// DOM SELECTOR VARIABLES

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("body");
var random = document.querySelector("button");

document.onload = colorchange();


// FUNCTION TO STYLE BACKGROUND - BUTTON REACTIVE
 function colorchange() {

body.style.background = 
"linear-gradient(to right, "
 + color1.value
 + ", "
 +color2.value
 + ")";

 	css.textContent = body.style.background + ";";

 }

 function randomcolorchange() {
 // SELECT RANDOM COLOR
	color1.value = '#' + ('00000' + (Math.random() * 16777216 << 0).toString(16)).substr(-6);
	color2.value = '#' + ('00000' + (Math.random() * 16777216 << 0).toString(16)).substr(-6);

// CALLS COLOR CHANGE FUNCTION TO SET AS BACKGROUND
	colorchange(); 

 }


// EVENT LISTENERS ON BUTTONS - REACT TO INPUT - RUNS BACKGROUND STYLE FUNCTION
color1.addEventListener("input", colorchange);

color2.addEventListener("input", colorchange);

// EVENT LISTENERS ON RANDOM BUTTON - AUTOSELECTS COLOR - RUNS RANDOM COLOR FUNCTION
random.addEventListener("click", randomcolorchange);