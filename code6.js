gdjs.SUPERULtiMATEEXCALIBURCode = {};
gdjs.SUPERULtiMATEEXCALIBURCode.localVariables = [];
gdjs.SUPERULtiMATEEXCALIBURCode.idToCallbackMap = new Map();
gdjs.SUPERULtiMATEEXCALIBURCode.GDNewSprite2Objects1= [];
gdjs.SUPERULtiMATEEXCALIBURCode.GDNewSprite2Objects2= [];


gdjs.SUPERULtiMATEEXCALIBURCode.asyncCallback33349572 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SUPERULtiMATEEXCALIBURCode.localVariables);
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
gdjs.SUPERULtiMATEEXCALIBURCode.localVariables.length = 0;
}
gdjs.SUPERULtiMATEEXCALIBURCode.idToCallbackMap.set(33349572, gdjs.SUPERULtiMATEEXCALIBURCode.asyncCallback33349572);
gdjs.SUPERULtiMATEEXCALIBURCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SUPERULtiMATEEXCALIBURCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(10.72), (runtimeScene) => (gdjs.SUPERULtiMATEEXCALIBURCode.asyncCallback33349572(runtimeScene, asyncObjectsList)), 33349572, asyncObjectsList);
}
}

}


};gdjs.SUPERULtiMATEEXCALIBURCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Excalibur morgan audio.mp3", 0, false, 100, 1);
}

{ //Subevents
gdjs.SUPERULtiMATEEXCALIBURCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.SUPERULtiMATEEXCALIBURCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SUPERULtiMATEEXCALIBURCode.GDNewSprite2Objects1.length = 0;
gdjs.SUPERULtiMATEEXCALIBURCode.GDNewSprite2Objects2.length = 0;

gdjs.SUPERULtiMATEEXCALIBURCode.eventsList1(runtimeScene);
gdjs.SUPERULtiMATEEXCALIBURCode.GDNewSprite2Objects1.length = 0;
gdjs.SUPERULtiMATEEXCALIBURCode.GDNewSprite2Objects2.length = 0;


return;

}

gdjs['SUPERULtiMATEEXCALIBURCode'] = gdjs.SUPERULtiMATEEXCALIBURCode;
