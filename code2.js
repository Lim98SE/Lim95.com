gdjs.New_32scene2Code = {};
gdjs.New_32scene2Code.GDNewObjectObjects1= [];
gdjs.New_32scene2Code.GDNewObjectObjects2= [];
gdjs.New_32scene2Code.GDfadeObjects1= [];
gdjs.New_32scene2Code.GDfadeObjects2= [];

gdjs.New_32scene2Code.conditionTrue_0 = {val:false};
gdjs.New_32scene2Code.condition0IsTrue_0 = {val:false};
gdjs.New_32scene2Code.condition1IsTrue_0 = {val:false};


gdjs.New_32scene2Code.eventsList0 = function(runtimeScene) {

{


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32scene2Code.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("fade"), gdjs.New_32scene2Code.GDfadeObjects1);
{for(var i = 0, len = gdjs.New_32scene2Code.GDfadeObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDfadeObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.New_32scene2Code.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDNewObjectObjects1[i].resetTimer("end");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "die.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.New_32scene2Code.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDNewObjectObjects1[i].setScaleY(0);
}
}{for(var i = 0, len = gdjs.New_32scene2Code.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDNewObjectObjects1[i].setScaleX(0);
}
}{for(var i = 0, len = gdjs.New_32scene2Code.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDNewObjectObjects1[i].getBehavior("Tween").addObjectScaleYTween("appear", 1, "linear", 750, false);
}
}{for(var i = 0, len = gdjs.New_32scene2Code.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDNewObjectObjects1[i].getBehavior("Tween").addObjectScaleXTween("turn", 1, "linear", 750, false);
}
}{for(var i = 0, len = gdjs.New_32scene2Code.GDfadeObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDfadeObjects1[i].pauseTimer("out");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32scene2Code.GDNewObjectObjects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene2Code.GDNewObjectObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene2Code.GDNewObjectObjects1[i].timerElapsedTime("end", 3) ) {
        gdjs.New_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene2Code.GDNewObjectObjects1[k] = gdjs.New_32scene2Code.GDNewObjectObjects1[i];
        ++k;
    }
}
gdjs.New_32scene2Code.GDNewObjectObjects1.length = k;}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("fade"), gdjs.New_32scene2Code.GDfadeObjects1);
{for(var i = 0, len = gdjs.New_32scene2Code.GDfadeObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDfadeObjects1[i].getBehavior("Tween").addObjectOpacityTween("out", 255, "linear", 1000, false);
}
}{for(var i = 0, len = gdjs.New_32scene2Code.GDfadeObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDfadeObjects1[i].unpauseTimer("out");
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, gdjs.evtTools.sound.getGlobalVolume(runtimeScene) - (1));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("fade"), gdjs.New_32scene2Code.GDfadeObjects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene2Code.GDfadeObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene2Code.GDfadeObjects1[i].timerElapsedTime("out", 2.5) ) {
        gdjs.New_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene2Code.GDfadeObjects1[k] = gdjs.New_32scene2Code.GDfadeObjects1[i];
        ++k;
    }
}
gdjs.New_32scene2Code.GDfadeObjects1.length = k;}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), true);
}}

}


};

gdjs.New_32scene2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32scene2Code.GDNewObjectObjects1.length = 0;
gdjs.New_32scene2Code.GDNewObjectObjects2.length = 0;
gdjs.New_32scene2Code.GDfadeObjects1.length = 0;
gdjs.New_32scene2Code.GDfadeObjects2.length = 0;

gdjs.New_32scene2Code.eventsList0(runtimeScene);
return;

}

gdjs['New_32scene2Code'] = gdjs.New_32scene2Code;
