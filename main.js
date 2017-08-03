let calcButtons = document.getElementsByClassName("calc-button");
let clearButton = document.getElementById("clear");
let equalsButton = document.getElementById("equals");
let display = document.getElementById("display");
let calcString = "";
let button = "";
let ans = calcString;


function addCalc() {
  let input = this.textContent;
  calcString += input;
  display.textContent = calcString;
}

for (let i = 0; i < calcButtons.length; i++) {
  button = calcButtons[i].textContent;
  calcButtons[i].addEventListener("click", addCalc);
}


function equals() {
  calcString = eval(calcString);
  display.textContent = calcString;
  calcString = "";
}

function clear() {
  calcString = "";
  display.textContent = calcString;
}

equalsButton.addEventListener('click', equals);
clearButton.addEventListener('click', clear);
