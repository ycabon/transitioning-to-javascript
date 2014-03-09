# Create a simple map application.

## Steps:

1. Add the ArcGIS JS API
```html
<link rel="stylesheet" type="text/css" href="http://js.arcgis.com/3.9/js/esri/css/esri.css">
<script src="http://js.arcgis.com/3.9/"></script>
    
2. Add the map's container
```html
<div id="mapDiv"></div>
```

3. Instanciate the map
```javascript
<script>
    require([
      "esri/map",
      "js/bootstrapmap.js",
      "dojo/domReady!"
    ], function(
      Map, BootstrapMap
    ) {
      var map = BootstrapMap.create("mapDiv", {
        basemap: "national-geographic",
        center:  [-122.45,37.77],
        zoom:    12
      });
    });
</script>
```