var otherside = [];
var shipsUsed = ["Ships used: "];
var stage = "Stage 1";
var wormhole = Math.round(1800+Math.random()*400);
var startMass = wormhole;
document.getElementById("stageWormhole").innerHTML = stage;
document.getElementById("mass").innerHTML = wormhole+" Million Kg";
// this function updates all information off the wormhole
// it checks if the wormhole collapsed or if it went a different stage
// and updates the stage accordingly.
function update(){
	if(wormhole < 0){
		stage = "Collapsed!";
		if(!otherside.length==0){
			alert("you fucked up!");
		}
		if(otherside.length==0){
			alert("you succesfully rolled the hole!")
			alert(shipsUsed)
		}
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
	wormhole = Math.round(1800+Math.random()*400);
	otherside = [];
	shipsUsed = [];
	update();
}
function someActivity(){
	wormhole = Math.round(wormhole*Math.random());
	update();
}
function showInformation(){
	document.getElementById("information").style.visibility="visible";
}
function hideInformation(){
	document.getElementById("information").style.visibility="hidden";
}







function hotHiggs(){
	if(wormhole > 0 ){
	wormhole -= 297;
	otherside.push("HiggsBS");
	shipsUsed.push("HiggsBS");
	update();
	}
}
function coldHiggs(){
		if(wormhole > 0 ){
	wormhole -= 197;
	otherside.push("HiggsBS");
	shipsUsed.push("HiggsBS");
	update();
		}
}
function hotBattleship(){
		if(wormhole > 0 ){
	wormhole -= 150;
	otherside.push("Battleship");
	shipsUsed.push("Battleship");
	update();
		}
}
function coldBattleship(){
		if(wormhole > 0 ){
	wormhole -= 100;
	otherside.push("Battleship");
	shipsUsed.push("Battleship");
	update();
		}
	}
function bubbleHic(){
	if(wormhole > 0 ){
	wormhole -= 1;
	otherside.push("Hic");
	shipsUsed.push("Hic");
	update();
	}
}
function hotHic(){
	if(wormhole > 0 ){
	wormhole -= 120;
	otherside.push("Hic");
	shipsUsed.push("Hic");
	update();
	}
}
function normalCruiser(){
	if(wormhole > 0 ){
	wormhole -= 10;
	otherside.push("normalCruiser");
	shipsUsed.push("normalCruiser");
	update();
	}
}
// ships going back
function hotHiggsBack(){
		if(wormhole > 0 ){
	if(otherside.includes("HiggsBS")){
		wormhole -= 297;
		index = otherside.indexOf("HiggsBS");
		if (index > -1) {
		otherside.splice(index, 1);
		}
		update();
	}
		}
}
function coldHiggsBack(){
		if(wormhole > 0 ){
	if(otherside.includes("HiggsBS")){
		wormhole -= 197;
		index = otherside.indexOf("HiggsBS");
		if (index > -1) {
		otherside.splice(index, 1);
		}
		update();
	}
		}
}
function hotBattleshipBack(){
		if(wormhole > 0 ){
	if(otherside.includes("Battleship")){
		wormhole -= 150;
		index = otherside.indexOf("Battleship");
		if (index > -1) {
		otherside.splice(index, 1);
		}
		update();
	}
		}
}
function coldBattleshipBack(){
		if(wormhole > 0 ){
	if(otherside.includes("Battleship")){
		wormhole -= 100;
		index = otherside.indexOf("Battleship");
		if (index > -1) {
		otherside.splice(index, 1);
		}
		update();
	}
		}
}
function bubbleHicBack(){
		if(wormhole > 0 ){
	if(otherside.includes("Hic")){
		wormhole -= 1;
		index = otherside.indexOf("Hic");
		if (index > -1) {
		otherside.splice(index, 1);
		}
		update();
	}
		}
}
function hotHicBack(){
		if(wormhole > 0 ){
	if(otherside.includes("Hic")){
		wormhole -= 120;
		index = otherside.indexOf("Hic");
		if (index > -1) {
		otherside.splice(index, 1);
		}
		update();
	}
	}
}
function normalCruiserBack(){
		if(wormhole > 0 ){
	if(otherside.includes("normalCruiser")){
		wormhole -= 10;
		index = otherside.indexOf("normalCruiser");
		if (index > -1) {
		otherside.splice(index, 1);
		}
		update();
	}
	}
}











