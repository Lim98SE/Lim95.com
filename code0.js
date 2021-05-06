gdjs.menuCode = {};
gdjs.menuCode.GDNewObjectObjects1= [];
gdjs.menuCode.GDNewObjectObjects2= [];
gdjs.menuCode.GDNewObject2Objects1= [];
gdjs.menuCode.GDNewObject2Objects2= [];
gdjs.menuCode.GDplayObjects1= [];
gdjs.menuCode.GDplayObjects2= [];
gdjs.menuCode.GDNewObject3Objects1= [];
gdjs.menuCode.GDNewObject3Objects2= [];
gdjs.menuCode.GDNewObject4Objects1= [];
gdjs.menuCode.GDNewObject4Objects2= [];
gdjs.menuCode.GDhardObjects1= [];
gdjs.menuCode.GDhardObjects2= [];
gdjs.menuCode.GDNewObject5Objects1= [];
gdjs.menuCode.GDNewObject5Objects2= [];
gdjs.menuCode.GDNewObject6Objects1= [];
gdjs.menuCode.GDNewObject6Objects2= [];
gdjs.menuCode.GDfadeObjects1= [];
gdjs.menuCode.GDfadeObjects2= [];
gdjs.menuCode.GDNewObject7Objects1= [];
gdjs.menuCode.GDNewObject7Objects2= [];
gdjs.menuCode.GDNewObject8Objects1= [];
gdjs.menuCode.GDNewObject8Objects2= [];
gdjs.menuCode.GDshipObjects1= [];
gdjs.menuCode.GDshipObjects2= [];
gdjs.menuCode.GDNewObject9Objects1= [];
gdjs.menuCode.GDNewObject9Objects2= [];

gdjs.menuCode.conditionTrue_0 = {val:false};
gdjs.menuCode.condition0IsTrue_0 = {val:false};
gdjs.menuCode.condition1IsTrue_0 = {val:false};


gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDplayObjects1Objects = Hashtable.newFrom({"play": gdjs.menuCode.GDplayObjects1});gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDhardObjects1Objects = Hashtable.newFrom({"hard": gdjs.menuCode.GDhardObjects1});gdjs.menuCode.eventsList0 = function(runtimeScene) {

{


gdjs.menuCode.condition0IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.menuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("fade"), gdjs.menuCode.GDfadeObjects1);
{gdjs.evtTools.sound.playMusic(runtimeScene, "10. Senpai (Instrumental).mp3", true, 10, 1);
}{for(var i = 0, len = gdjs.menuCode.GDfadeObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDfadeObjects1[i].getBehavior("Tween").addObjectOpacityTween("out", 0, "linear", 2000, true);
}
}{for(var i = 0, len = gdjs.menuCode.GDfadeObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDfadeObjects1[i].setZOrder(10000);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.menuCode.GDplayObjects1);

gdjs.menuCode.condition0IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtsExt__MouseHelper__IsClicked.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDplayObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.menuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), true);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("hard"), gdjs.menuCode.GDhardObjects1);

gdjs.menuCode.condition0IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtsExt__MouseHelper__IsClicked.func(runtimeScene, gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDhardObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.menuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), false);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene", false);
}}

}


{


gdjs.menuCode.condition0IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), true);
}if (gdjs.menuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject7"), gdjs.menuCode.GDNewObject7Objects1);
{for(var i = 0, len = gdjs.menuCode.GDNewObject7Objects1.length ;i < len;++i) {
    gdjs.menuCode.GDNewObject7Objects1[i].hide(false);
}
}}

}


{


gdjs.menuCode.condition0IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), false);
}if (gdjs.menuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject7"), gdjs.menuCode.GDNewObject7Objects1);
{for(var i = 0, len = gdjs.menuCode.GDNewObject7Objects1.length ;i < len;++i) {
    gdjs.menuCode.GDNewObject7Objects1[i].hide();
}
}}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDNewObjectObjects1.length = 0;
gdjs.menuCode.GDNewObjectObjects2.length = 0;
gdjs.menuCode.GDNewObject2Objects1.length = 0;
gdjs.menuCode.GDNewObject2Objects2.length = 0;
gdjs.menuCode.GDplayObjects1.length = 0;
gdjs.menuCode.GDplayObjects2.length = 0;
gdjs.menuCode.GDNewObject3Objects1.length = 0;
gdjs.menuCode.GDNewObject3Objects2.length = 0;
gdjs.menuCode.GDNewObject4Objects1.length = 0;
gdjs.menuCode.GDNewObject4Objects2.length = 0;
gdjs.menuCode.GDhardObjects1.length = 0;
gdjs.menuCode.GDhardObjects2.length = 0;
gdjs.menuCode.GDNewObject5Objects1.length = 0;
gdjs.menuCode.GDNewObject5Objects2.length = 0;
gdjs.menuCode.GDNewObject6Objects1.length = 0;
gdjs.menuCode.GDNewObject6Objects2.length = 0;
gdjs.menuCode.GDfadeObjects1.length = 0;
gdjs.menuCode.GDfadeObjects2.length = 0;
gdjs.menuCode.GDNewObject7Objects1.length = 0;
gdjs.menuCode.GDNewObject7Objects2.length = 0;
gdjs.menuCode.GDNewObject8Objects1.length = 0;
gdjs.menuCode.GDNewObject8Objects2.length = 0;
gdjs.menuCode.GDshipObjects1.length = 0;
gdjs.menuCode.GDshipObjects2.length = 0;
gdjs.menuCode.GDNewObject9Objects1.length = 0;
gdjs.menuCode.GDNewObject9Objects2.length = 0;

gdjs.menuCode.eventsList0(runtimeScene);
return;

}

gdjs['menuCode'] = gdjs.menuCode;
