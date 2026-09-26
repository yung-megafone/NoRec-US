import React, { useEffect, useMemo, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './county-map.css';

const OVERPASS_URL = 'https://overpass-api.de/api/interpreter';

function stableIdForFeature(feature) {
  return feature?.properties?.osm_id || feature?.properties?.id || JSON.stringify(feature?.geometry?.coordinates || null);
}

function classifyFeature(properties = {}) {
  const surveillanceType = properties.osm_surveillance_type || properties['surveillance:type'] || '';
  if (/alpr|anpr|license_plate/i.test(surveillanceType)) return 'ALPR';
  if (/gunshot|shotspotter/i.test(surveillanceType)) return 'Gunshot detection';
  if (/camera/i.test(surveillanceType) || properties.camera_type || properties['camera:type']) return 'Camera';
  return 'Surveillance';
}

function defaultStyle() {
  return {
    version: 8,
    sources: {},
    layers: [{ id: 'background', type: 'background', paint: { 'background-color': '#f3f3f3' } }]
  };
}

function buildOverpassQuery(areaName) {
  return `
[out:json][timeout:60];
area["boundary"="administrative"]["admin_level"="6"]["name"="${areaName}"]->.searchArea;
(
  node(area.searchArea)["man_made"="surveillance"];
  way(area.searchArea)["man_made"="surveillance"];
  relation(area.searchArea)["man_made"="surveillance"];
  node(area.searchArea)["surveillance:type"];
  way(area.searchArea)["surveillance:type"];
  relation(area.searchArea)["surveillance:type"];
  node(area.searchArea)["camera:type"];
  way(area.searchArea)["camera:type"];
  relation(area.searchArea)["camera:type"];
  node(area.searchArea)["camera:mount"];
  way(area.searchArea)["camera:mount"];
  relation(area.searchArea)["camera:mount"];
);
out center tags geom;
`.trim();
}

function overpassElementToFeature(element) {
  let geometry = null;
  if (element.type === 'node' && typeof element.lon === 'number' && typeof element.lat === 'number') {
    geometry = { type: 'Point', coordinates: [element.lon, element.lat] };
  } else if (element.center && typeof element.center.lon === 'number' && typeof element.center.lat === 'number') {
    geometry = { type: 'Point', coordinates: [element.center.lon, element.center.lat] };
  } else if (Array.isArray(element.geometry) && element.geometry.length) {
    geometry = {
      type: 'LineString',
      coordinates: element.geometry.map((pt) => [pt.lon, pt.lat])
    };
  }

  return {
    type: 'Feature',
    geometry,
    properties: {
      osm_id: `${element.type}/${element.id}`,
      source_layer: 'osm-live',
      norec_status: 'OSM_ONLY',
      name: element.tags?.name || null,
      operator: element.tags?.operator || null,
      camera_type: element.tags?.['camera:type'] || null,
      camera_mount: element.tags?.['camera:mount'] || null,
      osm_surveillance_type: element.tags?.['surveillance:type'] || null,
      raw_tags: element.tags || {}
    }
  };
}

function compareCollections(cached, live) {
  const cachedMap = new Map((cached?.features || []).map((f) => [stableIdForFeature(f), JSON.stringify(f.properties || {})]));
  const liveMap = new Map((live?.features || []).map((f) => [stableIdForFeature(f), JSON.stringify(f.properties || {})]));
  let added = 0, removed = 0, changed = 0;
  for (const [id, props] of liveMap.entries()) {
    if (!cachedMap.has(id)) added += 1;
    else if (cachedMap.get(id) !== props) changed += 1;
  }
  for (const id of cachedMap.keys()) {
    if (!liveMap.has(id)) removed += 1;
  }
  return { added, changed, removed };
}

export default function CountyMap(props) {
  const {
    countyName,
    countySlug,
    center,
    zoom,
    overpassAreaName,
    aerialTiles = null,
    norecPath,
    osmPath,
    osmMetaPath,
    boundaryPath,
    municipalitiesPath
  } = props;

  const mapNodeRef = useRef(null);
  const mapRef = useRef(null);
  const [cachedMeta, setCachedMeta] = useState(null);
  const [refreshStatus, setRefreshStatus] = useState('idle');
  const [refreshSummary, setRefreshSummary] = useState(null);
  const [liveOsm, setLiveOsm] = useState(null);
  const [showConsent, setShowConsent] = useState(false);
  const [layers, setLayers] = useState({ norec: true, osm: true, municipalities: true, stateIsp: false });
  const [errors, setErrors] = useState([]);

  const mapConfig = useMemo(() => ({ center, zoom }), [center, zoom]);

  useEffect(() => {
    if (!mapNodeRef.current || mapRef.current) return;

    const style = defaultStyle();
    if (aerialTiles) {
      style.sources.aerial = { type: 'raster', tiles: [aerialTiles], tileSize: 256, attribution: 'Aerial imagery cache (operator-supplied)' };
      style.layers.push({ id: 'aerial', type: 'raster', source: 'aerial' });
    }

    const map = new maplibregl.Map({
      container: mapNodeRef.current,
      style,
      center,
      zoom,
      cooperativeGestures: true
    });

    map.addControl(new maplibregl.NavigationControl({ visualizePitch: false }), 'top-right');
    mapRef.current = map;

    const popup = new maplibregl.Popup({ closeButton: false, closeOnClick: false });

    const loadGeoJson = async (id, url, color, radius, hoverTitle, visibility = 'visible') => {
      try {
        const response = await fetch(url, { cache: 'no-store' });
        if (!response.ok) throw new Error(`Failed to load ${url}`);
        const data = await response.json();
        if (map.getSource(id)) return;
        map.addSource(id, { type: 'geojson', data });
        map.addLayer({
          id,
          type: 'circle',
          source: id,
          paint: {
            'circle-radius': radius,
            'circle-color': color,
            'circle-stroke-width': 1.5,
            'circle-stroke-color': '#000'
          },
          layout: { visibility }
        });
        map.on('mousemove', id, (event) => {
          const feature = event.features?.[0];
          if (!feature) return;
          const props = feature.properties || {};
          const lines = [hoverTitle || countyName, `<strong>${props.name || classifyFeature(props)}</strong>`];
          if (props.operator) lines.push(`Operator: ${props.operator}`);
          if (props.norec_status) lines.push(`Status: ${props.norec_status}`);
          popup.setLngLat(event.lngLat).setHTML(`<div class="county_map_popup">${lines.join('<br/>')}</div>`).addTo(map);
          map.getCanvas().style.cursor = 'pointer';
        });
        map.on('mouseleave', id, () => {
          popup.remove();
          map.getCanvas().style.cursor = '';
        });
      } catch (error) {
        setErrors((prev) => [...prev, error.message]);
      }
    };

    const loadLineGeoJson = async (id, url, color, dash = false, visibility = 'visible') => {
      try {
        const response = await fetch(url, { cache: 'no-store' });
        if (!response.ok) return;
        const data = await response.json();
        if (map.getSource(id)) return;
        map.addSource(id, { type: 'geojson', data });
        map.addLayer({
          id,
          type: 'line',
          source: id,
          paint: {
            'line-color': color,
            'line-width': id.includes('municip') ? 1.5 : 2.5,
            'line-dasharray': dash ? [3, 2] : [1, 0]
          },
          layout: { visibility }
        });
      } catch {}
    };

    map.on('load', async () => {
      await Promise.all([
        loadGeoJson('norec-points', norecPath, '#111111', 6.5, 'NoRec documented asset', layers.norec ? 'visible' : 'none'),
        loadGeoJson('osm-points', osmPath, '#ffffff', 5, 'OpenStreetMap surveillance', layers.osm ? 'visible' : 'none'),
        loadLineGeoJson('county-boundary', boundaryPath, '#000000', false),
        loadLineGeoJson('municipal-boundaries', municipalitiesPath, '#444444', true, layers.municipalities ? 'visible' : 'none')
      ]);
    });

    return () => {
      popup.remove();
      map.remove();
      mapRef.current = null;
    };
  }, [aerialTiles, boundaryPath, center, countyName, layers.municipalities, layers.norec, layers.osm, municipalitiesPath, norecPath, osmPath, zoom]);

  useEffect(() => {
    fetch(osmMetaPath, { cache: 'no-store' })
      .then((response) => response.ok ? response.json() : null)
      .then((data) => setCachedMeta(data))
      .catch(() => setCachedMeta(null));
  }, [osmMetaPath]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    const toggle = (layerId, visible) => {
      if (map.getLayer(layerId)) map.setLayoutProperty(layerId, 'visibility', visible ? 'visible' : 'none');
    };
    toggle('norec-points', layers.norec);
    toggle('osm-points', layers.osm);
    toggle('municipal-boundaries', layers.municipalities);
  }, [layers]);

  async function handleLiveRefresh() {
    setShowConsent(false);
    setRefreshStatus('loading');
    setRefreshSummary(null);
    try {
      const overpassQuery = buildOverpassQuery(overpassAreaName);
      const response = await fetch(OVERPASS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          'Accept': 'application/json'
        },
        referrerPolicy: 'origin',
        body: new URLSearchParams({ data: overpassQuery }).toString()
      });
      if (!response.ok) throw new Error('OpenStreetMap refresh failed.');
      const payload = await response.json();
      const liveCollection = {
        type: 'FeatureCollection',
        features: (payload.elements || []).map(overpassElementToFeature).filter((feature) => feature.geometry)
      };
      const cachedResponse = await fetch(osmPath, { cache: 'no-store' });
      const cachedCollection = cachedResponse.ok ? await cachedResponse.json() : { type: 'FeatureCollection', features: [] };
      const summary = compareCollections(cachedCollection, liveCollection);
      setLiveOsm(liveCollection);
      setRefreshSummary(summary);
      setRefreshStatus('loaded');

      const map = mapRef.current;
      if (map) {
        if (map.getSource('osm-live-points')) {
          map.getSource('osm-live-points').setData(liveCollection);
        } else {
          map.addSource('osm-live-points', { type: 'geojson', data: liveCollection });
          map.addLayer({
            id: 'osm-live-points',
            type: 'circle',
            source: 'osm-live-points',
            paint: {
              'circle-radius': 4,
              'circle-color': '#d0d0d0',
              'circle-stroke-color': '#111111',
              'circle-stroke-width': 1
            }
          });
        }
      }
    } catch (error) {
      setRefreshStatus('error');
      setErrors((prev) => [...prev, error.message]);
    }
  }

  return (
    <section className="county_map_shell">
      <div className="county_map_intro">
        <div>
          <p className="eyebrow">COUNTY MAP</p>
          <h2>{countyName} map</h2>
          <p className="lede">Cached county-level map data with locally served overlays. OpenStreetMap refreshes require explicit consent and are never automatic.</p>
        </div>
        <dl className="county_map_meta">
          <div><dt>OSM snapshot</dt><dd>{cachedMeta?.fetchedAt || 'Not cached yet'}</dd></div>
          <div><dt>Live refresh</dt><dd>{refreshStatus === 'loaded' ? 'Loaded for this session' : 'Off'}</dd></div>
          <div><dt>Attribution</dt><dd>© OpenStreetMap contributors · ODbL</dd></div>
        </dl>
      </div>

      <div className="county_map_panel">
        <aside className="county_map_sidebar">
          <div className="county_map_card">
            <h3>Layers</h3>
            <label><input type="checkbox" checked={layers.norec} onChange={(e) => setLayers((prev) => ({ ...prev, norec: e.target.checked }))} /> NoRec documented locations</label>
            <label><input type="checkbox" checked={layers.osm} onChange={(e) => setLayers((prev) => ({ ...prev, osm: e.target.checked }))} /> Cached OpenStreetMap surveillance</label>
            <label><input type="checkbox" checked={layers.municipalities} onChange={(e) => setLayers((prev) => ({ ...prev, municipalities: e.target.checked }))} /> Municipal boundaries</label>
            <label><input type="checkbox" checked={layers.stateIsp} disabled /> State ISP infrastructure (manual coordinates not established)</label>
          </div>

          <div className="county_map_card">
            <h3>OpenStreetMap</h3>
            <p className="muted">NoRec serves a cached local copy by default. Checking for updates will contact an external Overpass API server and disclose your IP address plus the county being queried.</p>
            <button className="button" type="button" onClick={() => setShowConsent(true)}>Check OSM for updates</button>
            {refreshSummary && (
              <div className="county_map_delta">
                <p><strong>Live vs cached snapshot</strong></p>
                <ul>
                  <li>+ {refreshSummary.added} new</li>
                  <li>~ {refreshSummary.changed} changed</li>
                  <li>− {refreshSummary.removed} removed</li>
                </ul>
              </div>
            )}
          </div>

          {errors.length > 0 && (
            <div className="county_map_card county_map_errors">
              <h3>Map notes</h3>
              <ul>{errors.map((error, index) => <li key={`${error}-${index}`}>{error}</li>)}</ul>
            </div>
          )}
        </aside>

        <div className="county_map_canvas_wrap">
          <div className="county_map_canvas" ref={mapNodeRef} />
          {!aerialTiles && (
            <div className="county_map_banner">
              <strong>Aerial imagery cache not configured.</strong>
              <span>Add a local tile template to this county config when you are ready to serve cached imagery from NoRec.US.</span>
            </div>
          )}
        </div>
      </div>

      {showConsent && (
        <div className="county_map_consent_backdrop" role="presentation">
          <div className="county_map_consent" role="dialog" aria-modal="true" aria-labelledby={`county-map-consent-${countySlug}`}>
            <h3 id={`county-map-consent-${countySlug}`}>Contact OpenStreetMap?</h3>
            <p>NoRec is currently showing a cached local snapshot. Checking for updates will contact an external Overpass API server and disclose your IP address and the geographic area being queried.</p>
            <div className="county_map_consent_actions">
              <button className="button button_subtle" type="button" onClick={() => setShowConsent(false)}>Cancel</button>
              <button className="button" type="button" onClick={handleLiveRefresh}>Check now</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
