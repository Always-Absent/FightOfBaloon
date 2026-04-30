gdjs.Enuma_32ElishCode = {};
gdjs.Enuma_32ElishCode.localVariables = [];
gdjs.Enuma_32ElishCode.idToCallbackMap = new Map();
gdjs.Enuma_32ElishCode.GDEnumaElishObjects1= [];
gdjs.Enuma_32ElishCode.GDEnumaElishObjects2= [];
gdjs.Enuma_32ElishCode.GDEnumaElishObjects3= [];
gdjs.Enuma_32ElishCode.GDEnumaElishObjects4= [];
gdjs.Enuma_32ElishCode.GDEnumaElishObjects5= [];
gdjs.Enuma_32ElishCode.GDEnumaElishObjects6= [];
gdjs.Enuma_32ElishCode.GDEnumaElishActivationObjects1= [];
gdjs.Enuma_32ElishCode.GDEnumaElishActivationObjects2= [];
gdjs.Enuma_32ElishCode.GDEnumaElishActivationObjects3= [];
gdjs.Enuma_32ElishCode.GDEnumaElishActivationObjects4= [];
gdjs.Enuma_32ElishCode.GDEnumaElishActivationObjects5= [];
gdjs.Enuma_32ElishCode.GDEnumaElishActivationObjects6= [];
gdjs.Enuma_32ElishCode.GDEnumaElishActivation2Objects1= [];
gdjs.Enuma_32ElishCode.GDEnumaElishActivation2Objects2= [];
gdjs.Enuma_32ElishCode.GDEnumaElishActivation2Objects3= [];
gdjs.Enuma_32ElishCode.GDEnumaElishActivation2Objects4= [];
gdjs.Enuma_32ElishCode.GDEnumaElishActivation2Objects5= [];
gdjs.Enuma_32ElishCode.GDEnumaElishActivation2Objects6= [];


gdjs.Enuma_32ElishCode.asyncCallback33378932 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Enuma_32ElishCode.localVariables);
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
gdjs.Enuma_32ElishCode.localVariables.length = 0;
}
gdjs.Enuma_32ElishCode.idToCallbackMap.set(33378932, gdjs.Enuma_32ElishCode.asyncCallback33378932);
gdjs.Enuma_32ElishCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Enuma_32ElishCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.Enuma_32ElishCode.asyncCallback33378932(runtimeScene, asyncObjectsList)), 33378932, asyncObjectsList);
}
}

}


};gdjs.Enuma_32ElishCode.asyncCallback33376796 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Enuma_32ElishCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("EnumaElish"), gdjs.Enuma_32ElishCode.GDEnumaElishObjects5);

gdjs.copyArray(asyncObjectsList.getObjects("EnumaElishActivation"), gdjs.Enuma_32ElishCode.GDEnumaElishActivationObjects5);

gdjs.copyArray(asyncObjectsList.getObjects("EnumaElishActivation2"), gdjs.Enuma_32ElishCode.GDEnumaElishActivation2Objects5);

{for(var i = 0, len = gdjs.Enuma_32ElishCode.GDEnumaElishObjects5.length ;i < len;++i) {
    gdjs.Enuma_32ElishCode.GDEnumaElishObjects5[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Enuma_32ElishCode.GDEnumaElishActivationObjects5.length ;i < len;++i) {
    gdjs.Enuma_32ElishCode.GDEnumaElishActivationObjects5[i].getBehavior("Tween").addObjectOpacityTween2("EnumaHide", 0, "easeOutQuad", 1, false);
}
}
{for(var i = 0, len = gdjs.Enuma_32ElishCode.GDEnumaElishActivation2Objects5.length ;i < len;++i) {
    gdjs.Enuma_32ElishCode.GDEnumaElishActivation2Objects5[i].getBehavior("Tween").addObjectOpacityTween2("ElishHide", 0, "easeOutQuad", 1, false);
}
}
{for(var i = 0, len = gdjs.Enuma_32ElishCode.GDEnumaElishActivationObjects5.length ;i < len;++i) {
    gdjs.Enuma_32ElishCode.GDEnumaElishActivationObjects5[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Enuma_32ElishCode.GDEnumaElishActivation2Objects5.length ;i < len;++i) {
    gdjs.Enuma_32ElishCode.GDEnumaElishActivation2Objects5[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Enuma Elish SOud.mp3", 0, false, 100, 1);
}

{ //Subevents
gdjs.Enuma_32ElishCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Enuma_32ElishCode.localVariables.length = 0;
}
gdjs.Enuma_32ElishCode.idToCallbackMap.set(33376796, gdjs.Enuma_32ElishCode.asyncCallback33376796);
gdjs.Enuma_32ElishCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Enuma_32ElishCode.localVariables);
/* Don't save EnumaElish as it will be provided by the parent asyncObjectsList. */
/* Don't save EnumaElishActivation as it will be provided by the parent asyncObjectsList. */
/* Don't save EnumaElishActivation2 as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Enuma_32ElishCode.asyncCallback33376796(runtimeScene, asyncObjectsList)), 33376796, asyncObjectsList);
}
}

}


};gdjs.Enuma_32ElishCode.asyncCallback33376276 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Enuma_32ElishCode.localVariables);
{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 5, 0.1, 0.1, null);
}

{ //Subevents
gdjs.Enuma_32ElishCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Enuma_32ElishCode.localVariables.length = 0;
}
gdjs.Enuma_32ElishCode.idToCallbackMap.set(33376276, gdjs.Enuma_32ElishCode.asyncCallback33376276);
gdjs.Enuma_32ElishCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Enuma_32ElishCode.localVariables);
/* Don't save EnumaElish as it will be provided by the parent asyncObjectsList. */
/* Don't save EnumaElishActivation as it will be provided by the parent asyncObjectsList. */
for (const obj of gdjs.Enuma_32ElishCode.GDEnumaElishActivation2Objects3) asyncObjectsList.addObject("EnumaElishActivation2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Enuma_32ElishCode.asyncCallback33376276(runtimeScene, asyncObjectsList)), 33376276, asyncObjectsList);
}
}

}


};gdjs.Enuma_32ElishCode.asyncCallback33373940 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Enuma_32ElishCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("EnumaElishActivation2"), gdjs.Enuma_32ElishCode.GDEnumaElishActivation2Objects3);

{for(var i = 0, len = gdjs.Enuma_32ElishCode.GDEnumaElishActivation2Objects3.length ;i < len;++i) {
    gdjs.Enuma_32ElishCode.GDEnumaElishActivation2Objects3[i].getBehavior("Tween").addObjectPositionTween2("Elishmove", 641, 370, "easeInQuad", 0.5, false);
}
}
{for(var i = 0, len = gdjs.Enuma_32ElishCode.GDEnumaElishActivation2Objects3.length ;i < len;++i) {
    gdjs.Enuma_32ElishCode.GDEnumaElishActivation2Objects3[i].getBehavior("Tween").addObjectOpacityTween2("Elishshow", 250, "easeInQuad", 0.5, false);
}
}

{ //Subevents
gdjs.Enuma_32ElishCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Enuma_32ElishCode.localVariables.length = 0;
}
gdjs.Enuma_32ElishCode.idToCallbackMap.set(33373940, gdjs.Enuma_32ElishCode.asyncCallback33373940);
gdjs.Enuma_32ElishCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Enuma_32ElishCode.localVariables);
/* Don't save EnumaElish as it will be provided by the parent asyncObjectsList. */
for (const obj of gdjs.Enuma_32ElishCode.GDEnumaElishActivationObjects2) asyncObjectsList.addObject("EnumaElishActivation", obj);
/* Don't save EnumaElishActivation2 as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Enuma_32ElishCode.asyncCallback33373940(runtimeScene, asyncObjectsList)), 33373940, asyncObjectsList);
}
}

}


};gdjs.Enuma_32ElishCode.asyncCallback33371548 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Enuma_32ElishCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("EnumaElishActivation"), gdjs.Enuma_32ElishCode.GDEnumaElishActivationObjects2);

{for(var i = 0, len = gdjs.Enuma_32ElishCode.GDEnumaElishActivationObjects2.length ;i < len;++i) {
    gdjs.Enuma_32ElishCode.GDEnumaElishActivationObjects2[i].getBehavior("Tween").addObjectPositionTween2("Enumamove", 401, 231, "easeInQuad", 0.5, false);
}
}
{for(var i = 0, len = gdjs.Enuma_32ElishCode.GDEnumaElishActivationObjects2.length ;i < len;++i) {
    gdjs.Enuma_32ElishCode.GDEnumaElishActivationObjects2[i].getBehavior("Tween").addObjectOpacityTween2("Enumashow", 250, "easeInQuad", 0.5, false);
}
}

{ //Subevents
gdjs.Enuma_32ElishCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Enuma_32ElishCode.localVariables.length = 0;
}
gdjs.Enuma_32ElishCode.idToCallbackMap.set(33371548, gdjs.Enuma_32ElishCode.asyncCallback33371548);
gdjs.Enuma_32ElishCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Enuma_32ElishCode.localVariables);
for (const obj of gdjs.Enuma_32ElishCode.GDEnumaElishObjects1) asyncObjectsList.addObject("EnumaElish", obj);
for (const obj of gdjs.Enuma_32ElishCode.GDEnumaElishActivationObjects1) asyncObjectsList.addObject("EnumaElishActivation", obj);
for (const obj of gdjs.Enuma_32ElishCode.GDEnumaElishActivation2Objects1) asyncObjectsList.addObject("EnumaElishActivation2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Enuma_32ElishCode.asyncCallback33371548(runtimeScene, asyncObjectsList)), 33371548, asyncObjectsList);
}
}

}


};gdjs.Enuma_32ElishCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnumaElish"), gdjs.Enuma_32ElishCode.GDEnumaElishObjects1);
gdjs.copyArray(runtimeScene.getObjects("EnumaElishActivation"), gdjs.Enuma_32ElishCode.GDEnumaElishActivationObjects1);
gdjs.copyArray(runtimeScene.getObjects("EnumaElishActivation2"), gdjs.Enuma_32ElishCode.GDEnumaElishActivation2Objects1);
{for(var i = 0, len = gdjs.Enuma_32ElishCode.GDEnumaElishObjects1.length ;i < len;++i) {
    gdjs.Enuma_32ElishCode.GDEnumaElishObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Enuma_32ElishCode.GDEnumaElishActivationObjects1.length ;i < len;++i) {
    gdjs.Enuma_32ElishCode.GDEnumaElishActivationObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Enuma_32ElishCode.GDEnumaElishActivation2Objects1.length ;i < len;++i) {
    gdjs.Enuma_32ElishCode.GDEnumaElishActivation2Objects1[i].getBehavior("Opacity").setOpacity(0);
}
}

{ //Subevents
gdjs.Enuma_32ElishCode.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.Enuma_32ElishCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Enuma_32ElishCode.GDEnumaElishObjects1.length = 0;
gdjs.Enuma_32ElishCode.GDEnumaElishObjects2.length = 0;
gdjs.Enuma_32ElishCode.GDEnumaElishObjects3.length = 0;
gdjs.Enuma_32ElishCode.GDEnumaElishObjects4.length = 0;
gdjs.Enuma_32ElishCode.GDEnumaElishObjects5.length = 0;
gdjs.Enuma_32ElishCode.GDEnumaElishObjects6.length = 0;
gdjs.Enuma_32ElishCode.GDEnumaElishActivationObjects1.length = 0;
gdjs.Enuma_32ElishCode.GDEnumaElishActivationObjects2.length = 0;
gdjs.Enuma_32ElishCode.GDEnumaElishActivationObjects3.length = 0;
gdjs.Enuma_32ElishCode.GDEnumaElishActivationObjects4.length = 0;
gdjs.Enuma_32ElishCode.GDEnumaElishActivationObjects5.length = 0;
gdjs.Enuma_32ElishCode.GDEnumaElishActivationObjects6.length = 0;
gdjs.Enuma_32ElishCode.GDEnumaElishActivation2Objects1.length = 0;
gdjs.Enuma_32ElishCode.GDEnumaElishActivation2Objects2.length = 0;
gdjs.Enuma_32ElishCode.GDEnumaElishActivation2Objects3.length = 0;
gdjs.Enuma_32ElishCode.GDEnumaElishActivation2Objects4.length = 0;
gdjs.Enuma_32ElishCode.GDEnumaElishActivation2Objects5.length = 0;
gdjs.Enuma_32ElishCode.GDEnumaElishActivation2Objects6.length = 0;

gdjs.Enuma_32ElishCode.eventsList5(runtimeScene);
gdjs.Enuma_32ElishCode.GDEnumaElishObjects1.length = 0;
gdjs.Enuma_32ElishCode.GDEnumaElishObjects2.length = 0;
gdjs.Enuma_32ElishCode.GDEnumaElishObjects3.length = 0;
gdjs.Enuma_32ElishCode.GDEnumaElishObjects4.length = 0;
gdjs.Enuma_32ElishCode.GDEnumaElishObjects5.length = 0;
gdjs.Enuma_32ElishCode.GDEnumaElishObjects6.length = 0;
gdjs.Enuma_32ElishCode.GDEnumaElishActivationObjects1.length = 0;
gdjs.Enuma_32ElishCode.GDEnumaElishActivationObjects2.length = 0;
gdjs.Enuma_32ElishCode.GDEnumaElishActivationObjects3.length = 0;
gdjs.Enuma_32ElishCode.GDEnumaElishActivationObjects4.length = 0;
gdjs.Enuma_32ElishCode.GDEnumaElishActivationObjects5.length = 0;
gdjs.Enuma_32ElishCode.GDEnumaElishActivationObjects6.length = 0;
gdjs.Enuma_32ElishCode.GDEnumaElishActivation2Objects1.length = 0;
gdjs.Enuma_32ElishCode.GDEnumaElishActivation2Objects2.length = 0;
gdjs.Enuma_32ElishCode.GDEnumaElishActivation2Objects3.length = 0;
gdjs.Enuma_32ElishCode.GDEnumaElishActivation2Objects4.length = 0;
gdjs.Enuma_32ElishCode.GDEnumaElishActivation2Objects5.length = 0;
gdjs.Enuma_32ElishCode.GDEnumaElishActivation2Objects6.length = 0;


return;

}

gdjs['Enuma_32ElishCode'] = gdjs.Enuma_32ElishCode;
