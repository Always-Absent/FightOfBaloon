gdjs.MultiplayerLobbyCode = {};
gdjs.MultiplayerLobbyCode.localVariables = [];
gdjs.MultiplayerLobbyCode.idToCallbackMap = new Map();
gdjs.MultiplayerLobbyCode.GDLobbyObjects1= [];
gdjs.MultiplayerLobbyCode.GDLobbyObjects2= [];


gdjs.MultiplayerLobbyCode.mapOfGDgdjs_9546MultiplayerLobbyCode_9546GDLobbyObjects1Objects = Hashtable.newFrom({"Lobby": gdjs.MultiplayerLobbyCode.GDLobbyObjects1});
gdjs.MultiplayerLobbyCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Lobby"), gdjs.MultiplayerLobbyCode.GDLobbyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MultiplayerLobbyCode.mapOfGDgdjs_9546MultiplayerLobbyCode_9546GDLobbyObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.multiplayer.openLobbiesWindow(runtimeScene);
}
}

}


};

gdjs.MultiplayerLobbyCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MultiplayerLobbyCode.GDLobbyObjects1.length = 0;
gdjs.MultiplayerLobbyCode.GDLobbyObjects2.length = 0;

gdjs.MultiplayerLobbyCode.eventsList0(runtimeScene);
gdjs.MultiplayerLobbyCode.GDLobbyObjects1.length = 0;
gdjs.MultiplayerLobbyCode.GDLobbyObjects2.length = 0;


return;

}

gdjs['MultiplayerLobbyCode'] = gdjs.MultiplayerLobbyCode;
