// instead of hardcoding colors let's generate random colors
// For that we'll write function
// var colors = [
// 	"rgb(255, 0, 0)",
// 	"rgb(255, 255, 0)",
// 	"rgb(255, 0, 255)",
// 	"rgb(0, 255, 0)",
// 	"rgb(0, 255, 255)",
// 	"rgb(0, 0, 255)"
// ]
var numCols = 6;
var colors = generateRandomColors(numCols);
var squares = document.querySelectorAll(".square");

var pickedColor =  pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message"); 
var h1 = document.querySelector("h1");
var resetbtn = document.getElementById("resetbtn");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");

resetbtn.addEventListener("click", function(){
	//Generate all new colors
	colors = generateRandomColors(6);
	//pick a random color from a list
	pickedColor = pickColor();
	// change the color name in h1 to match the picked color
	colorDisplay.textContent = pickedColor;
	// change colors of a square
	for (var i = 0; i < squares.length; i++) {
	//initial colors to square
	squares[i].style.backgroundColor = colors[i];
	}
	//chnage the background color of h1
	h1.style.backgroundColor = "steelblue";

	// chnage the play again button to "New color"
	this.textContent = "New Colors";

	//Make message invisible

	messageDisplay.textContent = "";

})

easybtn.addEventListener("click", function(){
	numCols = 3
	colors = generateRandomColors(numCols);
	//pick a random color from a list
	pickedColor = pickColor();
	// change the color name in h1 to match the picked color
	colorDisplay.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++) {
	//initial colors to square
	if (colors[i]){
		squares[i].style.backgroundColor = colors[i];
	}else {
		squares[i].style.display = "none";
	}
	
	}

	this.classList.add("selected");
	hardbtn.classList.remove("selected");
});

hardbtn.addEventListener("click", function(){
	numCols = 6
	colors = generateRandomColors(numCols);
	//pick a random color from a list
	pickedColor = pickColor();
	// change the color name in h1 to match the picked color
	colorDisplay.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++) {
	//initial colors to square
	squares[i].style.backgroundColor = colors[i];
	squares[i].style.display = "block";
	}

	this.classList.add("selected");
	easybtn.classList.remove("selected");
});


colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	//initial colors to square
	squares[i].style.backgroundColor = colors[i];

	//add click listners to squares
	squares[i].addEventListener("click", function(){
	// grab a color of clicked square
	var clickedColor = this.style.backgroundColor;
	// compare color to pickedColor
	if (this.style.backgroundColor === pickedColor) {
		messageDisplay.textContent = "Correct";
		changeColor(clickedColor);
		h1.style.backgroundColor = clickedColor;
		resetbtn.textContent = "Play Again?";
		}
		else {
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "Try Again";
		} 
	})
}

// fucntion to chnage the color of all the squares:
function changeColor(color){
	//loop through all the square
	for (var i = 0; i < squares.length; i++) {
	// change each square color to match given color
		squares[i].style.backgroundColor = color
	}

}

function pickColor(){
	var ranNum = Math.floor(Math.random() * colors.length);
	return colors[ranNum];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	// add 'num' random colors to array
	for (var i = 0; i < num; i++) {
		// get random color and push into array
		arr.push(randomColor())
	}
	//return that array
	return arr
}

function randomColor(){
	// pick a red, green and blue
	var redCol = Math.floor(Math.random() * 256 + 1);
	var greenCol = Math.floor(Math.random() * 256 + 1);
	var blueCol = Math.floor(Math.random() * 256 + 1);
	return "rgb("+redCol+", "+greenCol+", "+blueCol+")"
}