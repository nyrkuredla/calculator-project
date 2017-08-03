// declaring global variables and buttons
let calcButtons = document.getElementsByClassName("calc-button");
let clearButton = document.getElementById("clear");
let equalsButton = document.getElementById("equals");
let display = document.getElementById("display");
let calcString = "";
let button = "";
let ans = calcString;

// function to add number and calculation functions to buttons
function addCalc() {
  let input = this.textContent;
  calcString += input;
  display.textContent = calcString;
}

// adding click listeners and functions to number and operator buttons
for (let i = 0; i < calcButtons.length; i++) {
  button = calcButtons[i].textContent;
  calcButtons[i].addEventListener("click", addCalc);
}

// "equals" button function
function equals() {
  calcString = eval(calcString);
  display.textContent = calcString;
  calcString = "";
}

// "clear" button function
function clear() {
  calcString = "";
  display.textContent = calcString;
}

// adding clear and equals button click listeners
equalsButton.addEventListener('click', equals);
clearButton.addEventListener('click', clear);
