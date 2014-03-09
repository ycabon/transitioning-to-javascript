define([
  "dojo/_base/declare",
  "dojo/_base/lang",
  
  "dojo/query",
  
  "dijit/_WidgetBase",
  "dijit/_TemplatedMixin"

], function(
  declare, lang,
  dojoQuery,
  _WidgetBase, _TemplatedMixin
) {
  
var BasemapsList = declare([_WidgetBase, _TemplatedMixin], {

  //--------------------------------------------------------------------------
  //
  //  Constructor
  //
  //--------------------------------------------------------------------------
  
  constructor: function() {
    this._basemapItemClickHandler = lang.hitch(this, this._basemapItemClickHandler);
  },
  

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------
  
  templateString: '<li class="dropdown">'
                 +'  <a href="#" class="dropdown-toggle" data-toggle="dropdown">Basemaps <b class="caret"></b></a>'
                 +'  <ul class="dropdown-menu">'
                 +'    <li><a href="#">Streets</a></li>'
                 +'    <li><a href="#">Imagery</a></li>'
                 +'    <li><a href="#">National Geographic</a></li>'
                 +'    <li><a href="#">Topographic</a></li>'
                 +'    <li><a href="#">Gray</a></li>'
                 +'    <li class="divider"></li>'
                 +'    <li><a href="#">Open Street Map</a></li>'
                 +'  </ul>'
                 +'</li>',
                 
                 
  //--------------------------------------------------------------------------
  //
  //  Overridden functions
  //
  //--------------------------------------------------------------------------
  
  postCreate: function() {
    this.handler = dojoQuery("li", this.domNode).on("click", this._basemapItemClickHandler);
  },
  
  destroy: function() {
    this.handler.remove();
    this.handler = null;
  },
  
  //--------------------------------------------------------------------------
  //
  // Event Handlers
  //
  //--------------------------------------------------------------------------
  
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
        case "Open Street Map":
          map.setBasemap("osm");
          break;
      }
    }
  }

});

return BasemapsList;
  
});
