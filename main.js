let calcButtons = document.getElementsByClassName("calc-button");
let clearButton = document.getElementById("clear");
let equalsButton = document.getElementById("equals");
let display = document.getElementById("display");
let calcString = "";
let button = "";
let ans = calcString;
display.textContent = calcString;

function addCalc() {
  let input = this.textContent;
  calcString += input;
}

for (let i = 0; i < calcButtons.length; i++) {
  button = calcButtons[i].textContent;
  calcButtons[i].addEventListener("click", addCalc);
}


function equals() {
  calcString = eval(calcString);
  console.log(calcString);
  clear();
}

function clear() {
  calcString = 0;
}

equalsButton.addEventListener('click', equals);
clearButton.addEventListener('click', clear);
