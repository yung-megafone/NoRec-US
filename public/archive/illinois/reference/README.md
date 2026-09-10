# Illinois county boundary mirror

NoRec.US prefers a local GeoJSON mirror at:

`public/archive/illinois/reference/IL_BNDY_County.geojson`

The geometry should be derived from the Illinois State Geological Survey / Illinois Geospatial Data Clearinghouse county-boundary dataset:

- Dataset page: https://clearinghouse.isgs.illinois.edu/data/reference/illinois-county-boundaries-polygons-and-lines
- Official ZIP: `IL_BNDY_County.zip`
- Official ArcGIS service: `Reference/County_Boundaries/MapServer`

At build time, `IllinoisCountyMap.astro` checks this local mirror first. If it is absent, it queries the official ISGS ArcGIS service for GeoJSON geometry. If neither source is available, the Illinois landing page keeps the centered county cartogram/directory as a fallback.

This keeps visitor browsers from contacting the GIS service directly.
