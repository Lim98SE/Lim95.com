gdjs.evtsExt__MouseHelper__IsClicked = {};
gdjs.evtsExt__MouseHelper__IsClicked.GDobjectObjects1= [];
gdjs.evtsExt__MouseHelper__IsClicked.GDobjectObjects2= [];

gdjs.evtsExt__MouseHelper__IsClicked.conditionTrue_0 = {val:false};
gdjs.evtsExt__MouseHelper__IsClicked.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__MouseHelper__IsClicked.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__MouseHelper__IsClicked.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__MouseHelper__IsClicked.mapOfGDgdjs_46evtsExt_95_95MouseHelper_95_95IsClicked_46GDobjectObjects1Objects = Hashtable.newFrom({"object": gdjs.evtsExt__MouseHelper__IsClicked.GDobjectObjects1});gdjs.evtsExt__MouseHelper__IsClicked.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("object"), gdjs.evtsExt__MouseHelper__IsClicked.GDobjectObjects1);

gdjs.evtsExt__MouseHelper__IsClicked.condition0IsTrue_0.val = false;
gdjs.evtsExt__MouseHelper__IsClicked.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__MouseHelper__IsClicked.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__MouseHelper__IsClicked.mapOfGDgdjs_46evtsExt_95_95MouseHelper_95_95IsClicked_46GDobjectObjects1Objects, runtimeScene, true, false);
}if ( gdjs.evtsExt__MouseHelper__IsClicked.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__MouseHelper__IsClicked.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.evtsExt__MouseHelper__IsClicked.condition1IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__MouseHelper__IsClicked.func = function(runtimeScene, object, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"object": object
},
  _objectArraysMap: {
"object": gdjs.objectsListsToArray(object)
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__MouseHelper__IsClicked.GDobjectObjects1.length = 0;
gdjs.evtsExt__MouseHelper__IsClicked.GDobjectObjects2.length = 0;

gdjs.evtsExt__MouseHelper__IsClicked.eventsList0(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}

