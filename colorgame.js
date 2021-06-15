


var shuffle = function (array) {

	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;

};

var generateColor = function () {

	// The available hex options
	var hex = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	var color = '#';

	// Create a six-digit hex color
	for (var i = 0; i < 6; i++) {

		// Shuffle the hex values
		shuffle(hex);

		// Append first hex value to the string
		color += hex[0];

	}

	// Return the color string
	return color;

};


var winColor;
var roundCount=1;
var winCount=0;
var loseCount=0;
var selectedColor;
var picked=false;
var round=document.querySelector("#round-no");
var wcount=document.querySelector("#wincount");
var lcount=document.querySelector("#losecount");
var displayWinner=document.querySelector("#displaywin");
var selectedBox=document.querySelectorAll("#box");
var colorVal=document.querySelector("#colorval")
var box=document.querySelectorAll("#box")


function play() {
		
		for (var i = 0; i < box.length; i++) {
			box[i].style.backgroundColor = generateColor();
		}
		picked = false;
		winColor = box[Math.floor(Math.random() * 6)].style.backgroundColor;
		colorVal.textContent = winColor;
		displayWinner.textContent = "";
		document.querySelectorAll("#box").forEach(e => e.style.boxShadow = "none");
		round.textContent=roundCount;
	
}

function boxSelected(e) 
{
	if (picked == false) 
	{
		picked = true;
		selectedColor = e.style.backgroundColor;
		if (selectedColor === winColor) {
			winCount++;
			wcount.textContent = winCount; //setting the value of win count card
			displayWinner.textContent = "YOU WIN"; //setting the value YOU WIN
		}
		else {
			loseCount++;
			lcount.textContent = loseCount;
			displayWinner.textContent = "YOU LOSE"; //setting the value YOU WIN
			showwinColor();

		}
	}
	
	nextround();
}

function nextround() {
	roundCount++;
	if (roundCount <= 10) {
		setTimeout(() => { play(); }, 1500);
		
	}
	else {
		// if (winCount > loseCount)
		// 	displayWinner.textContent = "YOU WIN"; //setting the value YOU WIN	
		// else if (loseCount > winCount)
		// 	displayWinner.textContent = "YOU LOSE"; //setting the value YOU WIN
		// else
		// 	displayWinner.textContent = "DRAW";
		displayWinner.textContent="GAME OVER"
	}
}


function showwinColor(){
	for(var i=0; i<box.length;i++){

		if(box[i].style.backgroundColor==winColor){
    	box[i].style.boxShadow = "0px 0px 15px 5px black"; //#04396C";
		}

	}
}



//  for (var i = 0; i < selectedBox.length; i++) 
//   {
// 	selectedBox[i].addEventListener("click", function () 
// 	{
		
// 		picked=true;
// 		selectedColor = this.style.backgroundColor;
// 		if (selectedColor === winColor) {
// 			winCount++;
// 			count.textContent = winCount; //setting the value of win count card
// 			displayWinner.textContent = "YOU WIN"; //setting the value YOU WIN		
// 		}
// 		else {
// 			displayWinner.textContent = "YOU LOSE"; //setting the value YOU WIN
// 		}
// 	});
//  }

function disableClick(){
	if(picked==true)
	selectedBox.style.pointerEvents = 'none';
}


function reset(){
	winCount=0;
	loseCount=0;
	roundCount=1;
	wcount.textContent = winCount;//setting the value of win count card
	lcount.textContent= loseCount;
	round.textContent=1;
	displayWinner.textContent="";
}

function closeHelp(){
	document.querySelector("#help").style.display="none";
}

function openHelp(){
	document.querySelector("#help").style.display="block";

}





































