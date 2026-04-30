gdjs.Death_32SceneCode = {};
gdjs.Death_32SceneCode.localVariables = [];
gdjs.Death_32SceneCode.idToCallbackMap = new Map();
gdjs.Death_32SceneCode.GDMission_9595FailedObjects1= [];
gdjs.Death_32SceneCode.GDMission_9595FailedObjects2= [];
gdjs.Death_32SceneCode.GDMission_9595FailedObjects3= [];
gdjs.Death_32SceneCode.GDMission_9595FailedObjects4= [];
gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects1= [];
gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects2= [];
gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects3= [];
gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects4= [];
gdjs.Death_32SceneCode.GDSurvivor2Objects1= [];
gdjs.Death_32SceneCode.GDSurvivor2Objects2= [];
gdjs.Death_32SceneCode.GDSurvivor2Objects3= [];
gdjs.Death_32SceneCode.GDSurvivor2Objects4= [];
gdjs.Death_32SceneCode.GDSharpshooterObjects1= [];
gdjs.Death_32SceneCode.GDSharpshooterObjects2= [];
gdjs.Death_32SceneCode.GDSharpshooterObjects3= [];
gdjs.Death_32SceneCode.GDSharpshooterObjects4= [];
gdjs.Death_32SceneCode.GDDoubleAchievedObjects1= [];
gdjs.Death_32SceneCode.GDDoubleAchievedObjects2= [];
gdjs.Death_32SceneCode.GDDoubleAchievedObjects3= [];
gdjs.Death_32SceneCode.GDDoubleAchievedObjects4= [];
gdjs.Death_32SceneCode.GDNewSpriteObjects1= [];
gdjs.Death_32SceneCode.GDNewSpriteObjects2= [];
gdjs.Death_32SceneCode.GDNewSpriteObjects3= [];
gdjs.Death_32SceneCode.GDNewSpriteObjects4= [];


gdjs.Death_32SceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() < 300);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber() < 300);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(11).setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() >= 300);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber() < 300);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(14).setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() < 300);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber() >= 300);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(16).setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() >= 300);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber() >= 300);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(17).setBoolean(true);
}
}

}


};gdjs.Death_32SceneCode.asyncCallback33009828 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Death_32SceneCode.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(10).add(0.1);
}
gdjs.Death_32SceneCode.localVariables.length = 0;
}
gdjs.Death_32SceneCode.idToCallbackMap.set(33009828, gdjs.Death_32SceneCode.asyncCallback33009828);
gdjs.Death_32SceneCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Death_32SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Death_32SceneCode.asyncCallback33009828(runtimeScene, asyncObjectsList)), 33009828, asyncObjectsList);
}
}

}


};gdjs.Death_32SceneCode.asyncCallback33010716 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Death_32SceneCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Try_Again_"), gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects2);
{for(var i = 0, len = gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects2.length ;i < len;++i) {
    gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects2[i].hide(false);
}
}
gdjs.Death_32SceneCode.localVariables.length = 0;
}
gdjs.Death_32SceneCode.idToCallbackMap.set(33010716, gdjs.Death_32SceneCode.asyncCallback33010716);
gdjs.Death_32SceneCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Death_32SceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Death_32SceneCode.asyncCallback33010716(runtimeScene, asyncObjectsList)), 33010716, asyncObjectsList);
}
}

}


};gdjs.Death_32SceneCode.mapOfGDgdjs_9546Death_959532SceneCode_9546GDTry_95959595Again_95959595Objects1Objects = Hashtable.newFrom({"Try_Again_": gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects1});
gdjs.Death_32SceneCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(39).getAsNumber() < runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(39).setNumber(runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DoubleAchieved"), gdjs.Death_32SceneCode.GDDoubleAchievedObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mission_Failed"), gdjs.Death_32SceneCode.GDMission_9595FailedObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sharpshooter"), gdjs.Death_32SceneCode.GDSharpshooterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Survivor2"), gdjs.Death_32SceneCode.GDSurvivor2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Try_Again_"), gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects1);
{for(var i = 0, len = gdjs.Death_32SceneCode.GDMission_9595FailedObjects1.length ;i < len;++i) {
    gdjs.Death_32SceneCode.GDMission_9595FailedObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Death_32SceneCode.GDSurvivor2Objects1.length ;i < len;++i) {
    gdjs.Death_32SceneCode.GDSurvivor2Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Death_32SceneCode.GDSharpshooterObjects1.length ;i < len;++i) {
    gdjs.Death_32SceneCode.GDSharpshooterObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Death_32SceneCode.GDDoubleAchievedObjects1.length ;i < len;++i) {
    gdjs.Death_32SceneCode.GDDoubleAchievedObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects1.length ;i < len;++i) {
    gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects1[i].hide();
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Sun Up Gunned Down.aac", 3, true, 100, 3);
}

{ //Subevents
gdjs.Death_32SceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(11).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Mission_Failed"), gdjs.Death_32SceneCode.GDMission_9595FailedObjects1);
{for(var i = 0, len = gdjs.Death_32SceneCode.GDMission_9595FailedObjects1.length ;i < len;++i) {
    gdjs.Death_32SceneCode.GDMission_9595FailedObjects1[i].getBehavior("Opacity").setOpacity(runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(14).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(16).getAsBoolean();
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Survivor2"), gdjs.Death_32SceneCode.GDSurvivor2Objects1);
{for(var i = 0, len = gdjs.Death_32SceneCode.GDSurvivor2Objects1.length ;i < len;++i) {
    gdjs.Death_32SceneCode.GDSurvivor2Objects1[i].getBehavior("Opacity").setOpacity(runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(14).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(16).getAsBoolean();
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Sharpshooter"), gdjs.Death_32SceneCode.GDSharpshooterObjects1);
{for(var i = 0, len = gdjs.Death_32SceneCode.GDSharpshooterObjects1.length ;i < len;++i) {
    gdjs.Death_32SceneCode.GDSharpshooterObjects1[i].getBehavior("Opacity").setOpacity(runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(17).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DoubleAchieved"), gdjs.Death_32SceneCode.GDDoubleAchievedObjects1);
{for(var i = 0, len = gdjs.Death_32SceneCode.GDDoubleAchievedObjects1.length ;i < len;++i) {
    gdjs.Death_32SceneCode.GDDoubleAchievedObjects1[i].getBehavior("Opacity").setOpacity(runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber());
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


const repeatCount2 = 200;
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = runtimeScene.getGame().getVariables().getFromIndex(11).getAsBoolean();
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = runtimeScene.getGame().getVariables().getFromIndex(14).getAsBoolean();
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0)
{

{ //Subevents: 
gdjs.Death_32SceneCode.eventsList1(runtimeScene);} //Subevents end.
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber() > 100);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Death_32SceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Try_Again_"), gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Death_32SceneCode.mapOfGDgdjs_9546Death_959532SceneCode_9546GDTry_95959595Again_95959595Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(45).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(41).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(19).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(33).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(46).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(22).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(21).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(20).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(34).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(44).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(64).setNumber(0);
}
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "DarkFlash");
}
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 3);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Death_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Death_32SceneCode.GDMission_9595FailedObjects1.length = 0;
gdjs.Death_32SceneCode.GDMission_9595FailedObjects2.length = 0;
gdjs.Death_32SceneCode.GDMission_9595FailedObjects3.length = 0;
gdjs.Death_32SceneCode.GDMission_9595FailedObjects4.length = 0;
gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects1.length = 0;
gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects2.length = 0;
gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects3.length = 0;
gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects4.length = 0;
gdjs.Death_32SceneCode.GDSurvivor2Objects1.length = 0;
gdjs.Death_32SceneCode.GDSurvivor2Objects2.length = 0;
gdjs.Death_32SceneCode.GDSurvivor2Objects3.length = 0;
gdjs.Death_32SceneCode.GDSurvivor2Objects4.length = 0;
gdjs.Death_32SceneCode.GDSharpshooterObjects1.length = 0;
gdjs.Death_32SceneCode.GDSharpshooterObjects2.length = 0;
gdjs.Death_32SceneCode.GDSharpshooterObjects3.length = 0;
gdjs.Death_32SceneCode.GDSharpshooterObjects4.length = 0;
gdjs.Death_32SceneCode.GDDoubleAchievedObjects1.length = 0;
gdjs.Death_32SceneCode.GDDoubleAchievedObjects2.length = 0;
gdjs.Death_32SceneCode.GDDoubleAchievedObjects3.length = 0;
gdjs.Death_32SceneCode.GDDoubleAchievedObjects4.length = 0;
gdjs.Death_32SceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Death_32SceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Death_32SceneCode.GDNewSpriteObjects3.length = 0;
gdjs.Death_32SceneCode.GDNewSpriteObjects4.length = 0;

gdjs.Death_32SceneCode.eventsList3(runtimeScene);
gdjs.Death_32SceneCode.GDMission_9595FailedObjects1.length = 0;
gdjs.Death_32SceneCode.GDMission_9595FailedObjects2.length = 0;
gdjs.Death_32SceneCode.GDMission_9595FailedObjects3.length = 0;
gdjs.Death_32SceneCode.GDMission_9595FailedObjects4.length = 0;
gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects1.length = 0;
gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects2.length = 0;
gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects3.length = 0;
gdjs.Death_32SceneCode.GDTry_9595Again_9595Objects4.length = 0;
gdjs.Death_32SceneCode.GDSurvivor2Objects1.length = 0;
gdjs.Death_32SceneCode.GDSurvivor2Objects2.length = 0;
gdjs.Death_32SceneCode.GDSurvivor2Objects3.length = 0;
gdjs.Death_32SceneCode.GDSurvivor2Objects4.length = 0;
gdjs.Death_32SceneCode.GDSharpshooterObjects1.length = 0;
gdjs.Death_32SceneCode.GDSharpshooterObjects2.length = 0;
gdjs.Death_32SceneCode.GDSharpshooterObjects3.length = 0;
gdjs.Death_32SceneCode.GDSharpshooterObjects4.length = 0;
gdjs.Death_32SceneCode.GDDoubleAchievedObjects1.length = 0;
gdjs.Death_32SceneCode.GDDoubleAchievedObjects2.length = 0;
gdjs.Death_32SceneCode.GDDoubleAchievedObjects3.length = 0;
gdjs.Death_32SceneCode.GDDoubleAchievedObjects4.length = 0;
gdjs.Death_32SceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Death_32SceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Death_32SceneCode.GDNewSpriteObjects3.length = 0;
gdjs.Death_32SceneCode.GDNewSpriteObjects4.length = 0;


return;

}

gdjs['Death_32SceneCode'] = gdjs.Death_32SceneCode;
