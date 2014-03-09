### Create a simple map application.

##### Steps:

- Add the ArcGIS JS API
```html
<link rel="stylesheet" type="text/css" href="http://js.arcgis.com/3.9/js/esri/css/esri.css">
<script src="http://js.arcgis.com/3.9/"></script>
```
    
- Add the map's container
```html
<div id="mapDiv"></div>
```

- Instanciate the map
```html
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
