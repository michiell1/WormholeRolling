var otherside = [];
var shipsUsed = [];
var stage = "Stage 1";
var selectedWormhole = 1800;
var wormhole = Math.round(1800+Math.random()*400);
var startMass = wormhole;
var massList = ["hotHiggsBS", 297, "coldHiggsBS", 197, "hotBattleship", 150, "coldBattleship", 100, "hotHic", 120, "normalCruiser", 10, "bubbleHic", 1];
document.getElementById("stageWormhole").innerHTML = stage;
document.getElementById("mass").innerHTML = wormhole+" Million Kg";
// this function updates all information off the wormhole
// it checks if the wormhole collapsed or if it went a different stage
// and updates the stage accordingly.
function update(){
	if(wormhole <= 0){
		stage = "Collapsed!";
		if(!otherside.length==0){
			alert("you fucked up!");
		}
		if(otherside.length==0){
			alert("you succesfully rolled the hole!")
		}
		reset();
	}else{
	if(wormhole < startMass*0.1){
		stage = "Stage 3"
	}else{
		if(wormhole < startMass/2){
			stage = "Stage 2";
		}
	}
	}
	document.getElementById("stageWormhole").innerHTML = stage;
	document.getElementById("mass").innerHTML = wormhole+ " Million Kg";
	updateOtherSide();
	updateShipsJumped();
}
var shipString = function(){
	var a = "";
	for(i = 0; i < shipsUsed.length; i++){
		a += shipsUsed[i];
		a += "\n";
	}
}
function updateOtherSide(){
	var list = document.createElement("LI");
	var list1 = "Ships in the nullsec<br>";
	for(i = 0; i < otherside.length; i++){
		list1 += otherside[i];
		list1 += "<br>"
	}
	document.getElementById("shipsOnOtherSide").innerHTML = list1;
}
function updateShipsJumped(){
		var list = document.createElement("LI");
	var list1 = "ships Jumped<br>";
	for(i = 0; i < shipsUsed.length; i++){
		list1 += shipsUsed[i];
		list1 += "<br>"
	}
	document.getElementById("shipsJumped").innerHTML = list1;
}
function displayMass(){
	if(document.getElementById("mass").style.visibility == "hidden"){
		document.getElementById("mass").style.visibility="visible";
		document.getElementById("massButton").innerHTML = "hide mass" 
	}else{
		document.getElementById("mass").style.visibility="hidden";
		document.getElementById("massButton").innerHTML = "show mass" 
	}
}
function reset(){
	stage = "Stage 1";
	wormhole = Math.round(selectedWormhole*0.9+Math.random()*(selectedWormhole*0.2));
	otherside = [];
	shipsUsed = [];
	update();
}
function someActivity(){
	wormhole = Math.round(wormhole*Math.random());
	update();
}
function showInformation(){
	document.getElementById("information").style.top=("0px");
}
function hideInformation(){
	document.getElementById("information").style.top=("-188px");
}

function foldOutExtra(){
	document.getElementById("extraBar").style.left = ("0px");
	document.getElementById("extraBar").style.width = ("180px");
	document.getElementById("extraBarText").style.transform = ("rotate(0deg)");
	document.getElementById("extraBarText").style.WebkitTransformOrigin = ("rotate(0deg)");
	document.getElementById("extraBarText").style.webkitTransform = ("rotate(0deg)");

}
function foldInExtra(){
	document.getElementById("extraBar").style.left = ("-190px");
	document.getElementById("extraBar").style.width = ("410px");
	document.getElementById("extraBarText").style.transform = ("rotate(90deg)");
	document.getElementById("extraBarText").style.WebkitTransformOrigin = ("rotate(90deg)");
	document.getElementById("extraBarText").style.webkitTransform = ("rotate(90deg)");
}



function setWormholeSize(mass){
	selectedWormhole = mass;
	reset();
	update();
}

function getMass(shipType){
	for(i =0; i < massList.length; i++){
		if(shipType == massList[i]){
			return massList[i+1];
		}
	}
	return undefined;
} 
function hotToShip(shipType){
	if(shipType == "hotHiggsBS" || shipType == "coldHiggsBS"){
		return "HiggsBS";
	}
	if(shipType == "hotBattleship" || shipType == "coldBattleship"){
	return "Battleship";
	}
	if(shipType == "hotHic" || shipType == "bubbleHic"){
	return "Hic";
	}
	return shipType;
}
function shipOut(shipType){
	if(wormhole > 0){
		wormhole -= getMass(shipType);
		shipsUsed.push(shipType);
		otherside.push(hotToShip(shipType));
		update();
	}
}
function shipBack(shipType){
	if(wormhole > 0){
		if(otherside.includes(hotToShip(shipType))){
			wormhole -= getMass(shipType);
			shipsUsed.push(shipType);
			index = otherside.indexOf(hotToShip(shipType));
			if (index > -1) {
			otherside.splice(index, 1);
			}
			update();
		}
	}
}





