### Add a geocoder.

##### Steps:

- Add a container on the right to hold the components
```html
<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
  <ul class="nav navbar-nav navbar-right">
    <!--
      2. Add a container for the geocoder
    -->
  </ul>
</div>
```
    
- Add a container for the geocoder
```html
<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
  <ul class="nav navbar-nav navbar-right">
    <li class="navbar-form" role="search">
      <div id="geocoder"></div>
    </li> 
  </ul>
</div>
```

- require the esri/Geocoder module and create a new Geocoder
```javascript
require([
  "esri/map",
  
  "esri/dijit/Geocoder",
  
  "js/bootstrapmap.js",
  "dojo/domReady!"
], function(
  Map,
  Geocoder,
  BootstrapMap
) {
  var map = BootstrapMap.create("mapDiv", {
    basemap: "topo",
    center:  [-116.51,33.82],
    zoom:    12
  });
  
  // 4. Create a new geocoder instance
  var geocoder = new Geocoder({
    map: map
  }, "geocoder");
});
```
