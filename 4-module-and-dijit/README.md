### Add a basemap list.

##### Steps:

- Create a module `dijit/BasemapList` which extends modules `dijit/_WidgetBase` and `dijit/_TemplatedMixin`
- Move and convert the HTML part of the basemap list to the template string of the module

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
to
```javascript
  templateString: '<li class="dropdown">'
                 +'  <a href="#" class="dropdown-toggle" data-toggle="dropdown">Basemaps <b class="caret"></b></a>'
                 +'  <ul class="dropdown-menu">'
                 +'    <li><a href="#">Streets</a></li>'
                 +'    <li><a href="#">Imagery</a></li>'
                 +'    <li><a href="#">National Geographic</a></li>'
                 +'    <li><a href="#">Topographic</a></li>'
                 +'    <li><a href="#">Gray</a></li>'
                 +'    <li class="divider"></li>'
                 +'    <li><a href="#">OpenStreetMap</a></li>'
                 +'  </ul>'
                 +'</li>',
```

- Use the postCreate function to add event listeners on the item of the list
```javascript
postCreate: function() {
  this.handler = dojoQuery("li", this.domNode).on("click", this._basemapItemClickHandler);
},

_basemapItemClickHandler: function(event) {
  var map = this.get("map"),
      basemapName = event.target.text;
  if (map) {
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
  }
}
```

- Implement the function `destroy()` to correctly remove the handler when the dijit is destroyed
```javascript
destroy: function() {
  this.handler.remove();
  this.handler = null;
},
```

Require and use the new dijit in the application
```html
<li id="basemapsList"></li>
```
and
```javascript
var basemapList = new BasemapsList({
  map: map
}, "basemapsList");
```
