### Use Dojo Parser

##### Steps:

- Declare the module name for each component, Geocoder and BasemapList as attributes of the HTML tags
```html
<!--
  1. declare the dijit class to instanciate
-->
<li id="basemapsList"
    data-dojo-type="js/dijit/BasemapsList.js"
    data-dojo-props="map: map">
</li>

<li class="navbar-form" role="search">
  <div id="geocoder"
       data-dojo-type="esri/dijit/Geocoder"
       data-dojo-props="map: map"></div>
</li>
```
- Remove now the unnecessary requires, and use the dojo parser module
```javascript
var map;

require([
  "dojo/parser",
  
  "esri/map",
  
  "js/bootstrapmap.js",
  "dojo/domReady!"
], function(
  parser,
  Map,
  BootstrapMap
) {
  map = BootstrapMap.create("mapDiv", {
    basemap: "topo",
    center:  [-116.51,33.82],
    zoom:    12
  });
  
  // Use the dojo parser to parse the HTML markup
  parser.parse();
  
});
```
