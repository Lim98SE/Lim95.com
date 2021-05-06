gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDshipObjects1= [];
gdjs.New_32sceneCode.GDshipObjects2= [];
gdjs.New_32sceneCode.GDshipObjects3= [];
gdjs.New_32sceneCode.GDstarObjects1= [];
gdjs.New_32sceneCode.GDstarObjects2= [];
gdjs.New_32sceneCode.GDstarObjects3= [];
gdjs.New_32sceneCode.GDstar_95spawnerObjects1= [];
gdjs.New_32sceneCode.GDstar_95spawnerObjects2= [];
gdjs.New_32sceneCode.GDstar_95spawnerObjects3= [];
gdjs.New_32sceneCode.GDbulletObjects1= [];
gdjs.New_32sceneCode.GDbulletObjects2= [];
gdjs.New_32sceneCode.GDbulletObjects3= [];
gdjs.New_32sceneCode.GDenemy_95spawnerObjects1= [];
gdjs.New_32sceneCode.GDenemy_95spawnerObjects2= [];
gdjs.New_32sceneCode.GDenemy_95spawnerObjects3= [];
gdjs.New_32sceneCode.GDenemyObjects1= [];
gdjs.New_32sceneCode.GDenemyObjects2= [];
gdjs.New_32sceneCode.GDenemyObjects3= [];
gdjs.New_32sceneCode.GDNewObjectObjects1= [];
gdjs.New_32sceneCode.GDNewObjectObjects2= [];
gdjs.New_32sceneCode.GDNewObjectObjects3= [];
gdjs.New_32sceneCode.GDNewObject2Objects1= [];
gdjs.New_32sceneCode.GDNewObject2Objects2= [];
gdjs.New_32sceneCode.GDNewObject2Objects3= [];
gdjs.New_32sceneCode.GDtransitionObjects1= [];
gdjs.New_32sceneCode.GDtransitionObjects2= [];
gdjs.New_32sceneCode.GDtransitionObjects3= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_0 = {val:false};
gdjs.New_32sceneCode.conditionTrue_1 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_1 = {val:false};


gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDstarObjects1Objects = Hashtable.newFrom({"star": gdjs.New_32sceneCode.GDstarObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDstarObjects1Objects = Hashtable.newFrom({"star": gdjs.New_32sceneCode.GDstarObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDstarObjects1Objects = Hashtable.newFrom({"star": gdjs.New_32sceneCode.GDstarObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDbulletObjects2Objects = Hashtable.newFrom({"bullet": gdjs.New_32sceneCode.GDbulletObjects2});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDbulletObjects1Objects = Hashtable.newFrom({"bullet": gdjs.New_32sceneCode.GDbulletObjects1});gdjs.New_32sceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), false);
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition1IsTrue_0;
gdjs.New_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8270044);
}
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
gdjs.New_32sceneCode.GDbulletObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDbulletObjects2Objects, gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) + 16, 461, "");
}{for(var i = 0, len = gdjs.New_32sceneCode.GDbulletObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDbulletObjects2[i].addForce(0, -(700), 1);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDbulletObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDbulletObjects2[i].setScale(4);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "shoot.wav", false, 10, 1);
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), true);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.New_32sceneCode.GDbulletObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDbulletObjects1Objects, gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) + 16, 461, "");
}{for(var i = 0, len = gdjs.New_32sceneCode.GDbulletObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDbulletObjects1[i].addForce(0, -(700), 1);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDbulletObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDbulletObjects1[i].setScale(0.5);
}
}}

}


};gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.New_32sceneCode.GDenemyObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.New_32sceneCode.GDenemyObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.New_32sceneCode.GDenemyObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDbulletObjects1Objects = Hashtable.newFrom({"bullet": gdjs.New_32sceneCode.GDbulletObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDshipObjects1Objects = Hashtable.newFrom({"ship": gdjs.New_32sceneCode.GDshipObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.New_32sceneCode.GDenemyObjects1});gdjs.New_32sceneCode.eventsList1 = function(runtimeScene) {

{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), true);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ship"), gdjs.New_32sceneCode.GDshipObjects2);
{for(var i = 0, len = gdjs.New_32sceneCode.GDshipObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDshipObjects2[i].getBehavior("Health").SetHealth(5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ship"), gdjs.New_32sceneCode.GDshipObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDshipObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDshipObjects1[i].getBehavior("Health").SetHealth(3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.New_32sceneCode.eventsList2 = function(runtimeScene) {

{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("enemy_spawner"), gdjs.New_32sceneCode.GDenemy_95spawnerObjects1);
gdjs.copyArray(runtimeScene.getObjects("transition"), gdjs.New_32sceneCode.GDtransitionObjects1);
{gdjs.evtTools.sound.playMusic(runtimeScene, "05. Ugh.mp3", true, 10, 1);
}{for(var i = 0, len = gdjs.New_32sceneCode.GDenemy_95spawnerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDenemy_95spawnerObjects1[i].resetTimer("spawn");
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDtransitionObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDtransitionObjects1[i].pauseTimer("end");
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDtransitionObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDtransitionObjects1[i].setLayer("transiton");
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32sceneCode.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32sceneCode.GDNewObject2Objects1);
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.New_32sceneCode.GDenemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("ship"), gdjs.New_32sceneCode.GDshipObjects1);
gdjs.copyArray(runtimeScene.getObjects("star_spawner"), gdjs.New_32sceneCode.GDstar_95spawnerObjects1);
gdjs.New_32sceneCode.GDstarObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDstarObjects1Objects, (( gdjs.New_32sceneCode.GDstar_95spawnerObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDstar_95spawnerObjects1[0].getPointX("")), (( gdjs.New_32sceneCode.GDstar_95spawnerObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDstar_95spawnerObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.New_32sceneCode.GDstar_95spawnerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDstar_95spawnerObjects1[i].setPosition(gdjs.randomInRange(-(800), 800),-(410));
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDstarObjects1Objects, (( gdjs.New_32sceneCode.GDstar_95spawnerObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDstar_95spawnerObjects1[0].getPointX("")), (( gdjs.New_32sceneCode.GDstar_95spawnerObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDstar_95spawnerObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.New_32sceneCode.GDstar_95spawnerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDstar_95spawnerObjects1[i].setPosition(gdjs.randomInRange(-(800), 800),-(410));
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDstarObjects1Objects, (( gdjs.New_32sceneCode.GDstar_95spawnerObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDstar_95spawnerObjects1[0].getPointX("")), (( gdjs.New_32sceneCode.GDstar_95spawnerObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDstar_95spawnerObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.New_32sceneCode.GDstar_95spawnerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDstar_95spawnerObjects1[i].setPosition(gdjs.randomInRange(-(800), 800),-(410));
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDstarObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDstarObjects1[i].addForce(0, 1000, 1);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDshipObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDshipObjects1[i].setX(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDenemyObjects1[i].addForce(0, 100, 0);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObject2Objects1[i].setString(gdjs.evtTools.common.toString((( gdjs.New_32sceneCode.GDshipObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDshipObjects1[0].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))));
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.New_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy_spawner"), gdjs.New_32sceneCode.GDenemy_95spawnerObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDenemy_95spawnerObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDenemy_95spawnerObjects1[i].timerElapsedTime("spawn", 0.5) ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDenemy_95spawnerObjects1[k] = gdjs.New_32sceneCode.GDenemy_95spawnerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDenemy_95spawnerObjects1.length = k;}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), false);
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDenemy_95spawnerObjects1 */
gdjs.New_32sceneCode.GDenemyObjects1.length = 0;

{for(var i = 0, len = gdjs.New_32sceneCode.GDenemy_95spawnerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDenemy_95spawnerObjects1[i].resetTimer("spawn");
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDenemy_95spawnerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDenemy_95spawnerObjects1[i].setX(gdjs.randomInRange(0, 800));
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDenemyObjects1Objects, (( gdjs.New_32sceneCode.GDenemy_95spawnerObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDenemy_95spawnerObjects1[0].getPointX("")), (( gdjs.New_32sceneCode.GDenemy_95spawnerObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDenemy_95spawnerObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.New_32sceneCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDenemyObjects1[i].setScale(0.25);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy_spawner"), gdjs.New_32sceneCode.GDenemy_95spawnerObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDenemy_95spawnerObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDenemy_95spawnerObjects1[i].timerElapsedTime("spawn", 2) ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDenemy_95spawnerObjects1[k] = gdjs.New_32sceneCode.GDenemy_95spawnerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDenemy_95spawnerObjects1.length = k;}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), true);
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDenemy_95spawnerObjects1 */
gdjs.New_32sceneCode.GDenemyObjects1.length = 0;

{for(var i = 0, len = gdjs.New_32sceneCode.GDenemy_95spawnerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDenemy_95spawnerObjects1[i].resetTimer("spawn");
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDenemy_95spawnerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDenemy_95spawnerObjects1[i].setX(gdjs.randomInRange(0, 800));
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDenemyObjects1Objects, (( gdjs.New_32sceneCode.GDenemy_95spawnerObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDenemy_95spawnerObjects1[0].getPointX("")), (( gdjs.New_32sceneCode.GDenemy_95spawnerObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDenemy_95spawnerObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.New_32sceneCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDenemyObjects1[i].setScale(0.25);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bullet"), gdjs.New_32sceneCode.GDbulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.New_32sceneCode.GDenemyObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDenemyObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDbulletObjects1Objects, false, runtimeScene, false);
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition1IsTrue_0;
gdjs.New_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8276188);
}
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDbulletObjects1 */
/* Reuse gdjs.New_32sceneCode.GDenemyObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDbulletObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDbulletObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(100);
}{gdjs.evtTools.sound.playSound(runtimeScene, "kill.wav", false, 10, 1);
}{for(var i = 0, len = gdjs.New_32sceneCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDenemyObjects1[i].getBehavior("Tween").addObjectOpacityTween("die", 0, "linear", 250, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.New_32sceneCode.GDenemyObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDenemyObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDenemyObjects1[i].getY() > 600 ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDenemyObjects1[k] = gdjs.New_32sceneCode.GDenemyObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDenemyObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDenemyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("ship"), gdjs.New_32sceneCode.GDshipObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDenemyObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDshipObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDshipObjects1[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "hurt.wav", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.New_32sceneCode.GDenemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("ship"), gdjs.New_32sceneCode.GDshipObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDshipObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDenemyObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDenemyObjects1 */
/* Reuse gdjs.New_32sceneCode.GDshipObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDenemyObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDshipObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDshipObjects1[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "hurt.wav", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ship"), gdjs.New_32sceneCode.GDshipObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDshipObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDshipObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDshipObjects1[k] = gdjs.New_32sceneCode.GDshipObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDshipObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("transition"), gdjs.New_32sceneCode.GDtransitionObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDtransitionObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDtransitionObjects1[i].unpauseTimer("end");
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDtransitionObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDtransitionObjects1[i].getBehavior("Tween").addObjectPositionYTween("end", 100, "linear", 500, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("transition"), gdjs.New_32sceneCode.GDtransitionObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDtransitionObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDtransitionObjects1[i].timerElapsedTime("end", 0.75) ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDtransitionObjects1[k] = gdjs.New_32sceneCode.GDtransitionObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDtransitionObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene2", false);
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.New_32sceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDshipObjects1.length = 0;
gdjs.New_32sceneCode.GDshipObjects2.length = 0;
gdjs.New_32sceneCode.GDshipObjects3.length = 0;
gdjs.New_32sceneCode.GDstarObjects1.length = 0;
gdjs.New_32sceneCode.GDstarObjects2.length = 0;
gdjs.New_32sceneCode.GDstarObjects3.length = 0;
gdjs.New_32sceneCode.GDstar_95spawnerObjects1.length = 0;
gdjs.New_32sceneCode.GDstar_95spawnerObjects2.length = 0;
gdjs.New_32sceneCode.GDstar_95spawnerObjects3.length = 0;
gdjs.New_32sceneCode.GDbulletObjects1.length = 0;
gdjs.New_32sceneCode.GDbulletObjects2.length = 0;
gdjs.New_32sceneCode.GDbulletObjects3.length = 0;
gdjs.New_32sceneCode.GDenemy_95spawnerObjects1.length = 0;
gdjs.New_32sceneCode.GDenemy_95spawnerObjects2.length = 0;
gdjs.New_32sceneCode.GDenemy_95spawnerObjects3.length = 0;
gdjs.New_32sceneCode.GDenemyObjects1.length = 0;
gdjs.New_32sceneCode.GDenemyObjects2.length = 0;
gdjs.New_32sceneCode.GDenemyObjects3.length = 0;
gdjs.New_32sceneCode.GDNewObjectObjects1.length = 0;
gdjs.New_32sceneCode.GDNewObjectObjects2.length = 0;
gdjs.New_32sceneCode.GDNewObjectObjects3.length = 0;
gdjs.New_32sceneCode.GDNewObject2Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject2Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject2Objects3.length = 0;
gdjs.New_32sceneCode.GDtransitionObjects1.length = 0;
gdjs.New_32sceneCode.GDtransitionObjects2.length = 0;
gdjs.New_32sceneCode.GDtransitionObjects3.length = 0;

gdjs.New_32sceneCode.eventsList2(runtimeScene);
return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
