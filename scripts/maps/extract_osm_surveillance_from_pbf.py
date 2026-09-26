#!/usr/bin/env python3
"""Extract surveillance-tagged OSM features from an Illinois PBF snapshot and split them by county.

Requires: geopandas, shapely, fiona.
Example:
  python scripts/maps/extract_osm_surveillance_from_pbf.py \
    --pbf /path/to/illinois.osm.pbf \
    --counties /path/to/illinois-counties.geojson \
    --out public/map-data/osm
"""

from __future__ import annotations
import argparse
import json
from pathlib import Path
import geopandas as gpd
import pandas as pd


LAYER_NAMES = ["points", "lines", "multipolygons"]


def looks_like_surveillance(row: pd.Series) -> bool:
    man_made = str(row.get("man_made") or "")
    other_tags = str(row.get("other_tags") or "")
    if man_made == "surveillance":
        return True
    surveillance_markers = [
        '"surveillance:type"',
        '"camera:type"',
        '"camera:mount"',
        '"surveillance"=>',
        '"camera:direction"'
    ]
    return any(marker in other_tags for marker in surveillance_markers)


def representative_points(gdf: gpd.GeoDataFrame) -> gpd.GeoDataFrame:
    geom = gdf.geometry
    out = gdf.copy()
    out.geometry = geom.representative_point()
    return out


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--pbf", required=True, help="Path to Illinois OSM PBF snapshot")
    parser.add_argument("--counties", required=True, help="County boundary GeoJSON/Shapefile with a slug-like field")
    parser.add_argument("--out", required=True, help="Directory for county GeoJSON outputs")
    parser.add_argument("--county-slug-field", default="slug", help="Boundary field containing county slug values")
    parser.add_argument("--county-name-field", default="name", help="Boundary field containing county names")
    args = parser.parse_args()

    pbf_path = Path(args.pbf)
    county_path = Path(args.counties)
    out_dir = Path(args.out)
    out_dir.mkdir(parents=True, exist_ok=True)

    counties = gpd.read_file(county_path).to_crs(4326)
    if args.county_slug_field not in counties.columns:
        raise SystemExit(f"County boundary file is missing the slug field: {args.county_slug_field}")

    frames = []
    for layer_name in LAYER_NAMES:
        layer = gpd.read_file(pbf_path, layer=layer_name)
        layer = layer[layer.apply(looks_like_surveillance, axis=1)]
        if layer.empty:
            continue
        layer = layer[[col for col in layer.columns if col != 'other_tags'] + ['other_tags']]
        layer["source_layer"] = layer_name
        frames.append(representative_points(layer).to_crs(4326))

    if not frames:
        raise SystemExit("No surveillance-tagged OSM features were detected in the provided snapshot.")

    osm_features = pd.concat(frames, ignore_index=True)
    osm_features = gpd.GeoDataFrame(osm_features, geometry="geometry", crs="EPSG:4326")
    joined = gpd.sjoin(osm_features, counties[[args.county_slug_field, args.county_name_field, 'geometry']], predicate='within', how='left')

    for slug, group in joined.groupby(args.county_slug_field):
        if pd.isna(slug):
            continue
        group = group.drop(columns=['index_right'])
        feature_collection = json.loads(group.to_json())
        out_path = out_dir / f"{slug}.geojson"
        out_path.write_text(json.dumps(feature_collection, indent=2) + "\n", encoding="utf-8")
        print(f"wrote {out_path} ({len(feature_collection['features'])} features)")


if __name__ == "__main__":
    main()
