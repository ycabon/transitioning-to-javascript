define([
  "dojo/_base/declare",
  
  "dijit/_WidgetBase",
  "dijit/_TemplatedMixin"

], function(
  declare,
  _WidgetBase, _TemplatedMixin
) {
  
  var BasemapsList = declare([_WidgetBase, _TemplatedMixin], {
  
  });
  
  return BasemapsList;
  
});

declare("MyWidget", dijit._WidgetBase, { ... });