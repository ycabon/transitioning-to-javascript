### Add a basemap list.

##### Steps:

- Add HTML list of basemap next to the geocoder 
```html
<li class="dropdown" id="basemapList">
  <a href="#" class="dropdown-toggle" data-toggle="dropdown">Basemaps <b class="caret"></b></a>
  <ul class="dropdown-menu">
    <li><a href="#">Streets</a></li>
    <li><a href="#">Imagery</a></li>
    <li><a href="#">National Geographic</a></li>
    <li><a href="#">Topographic</a></li>
    <li><a href="#">Gray</a></li>
    <li class="divider"></li>
    <li><a href="#">OpenStreetMap</a></li>
  </ul>
</li>
```
    
- Require the "dojo/query" module
```html
<script>
  require([
    "dojo/query",
    
    "esri/map",
    
    "esri/dijit/Geocoder",
    
    "js/bootstrapmap.js",
    "dojo/domReady!"
  ], function(
    dojoQuery,
    Map,
    Geocoder,
    BootstrapMap
  ) {
  // ...
  });
  // ...
</script>
```

- on click on one of the basemap item in the list, set the basemap on the map
```javascript
dojoQuery("#basemapList li").on("click", function(event) {
  var basemapName = event.target.text;
  switch(basemapName) {
    case "Streets":
      map.setBasemap("streets");
      break;
    case "Imagery":
      map.setBasemap("hybrid");
      break;
    case "National Geographic":
      map.setBasemap("national-geographic");
      break;
    case "Topographic":
      map.setBasemap("topo");
      break;
    case "Gray":
      map.setBasemap("gray");
      break;
    case "OpenStreetMap":
      map.setBasemap("osm");
      break;
  }
});
```
