const resultBox = document.getElementsByClassName('calculator__display')[0];

let firstPart = "";
let secondPart = "";
let selectedOperator = "";

let clearCalc = function() {
  resultBox.innerHTML = 0;
  firstPart = "";
  secondPart = "";
  selectedOperator = "";
}

let pressNumber = function(digit) {
  if (secondPart.length + firstPart.length <= 12) {
    if (selectedOperator === "") {
      if (firstPart.length <= 8) {
        firstPart = firstPart + digit;
        resultBox.innerHTML = firstPart;
      }
    }else {
      secondPart += digit;
      resultBox.innerHTML += digit;
    }
  }
}

function pressOperator (operator) {
  if (firstPart !== "" && secondPart === "" && selectedOperator === "") {
    selectedOperator = operator;
    resultBox.innerHTML += operator;
  }
}

function showResult() {
  switch (selectedOperator) {
    case "+":
        firstPart = (parseInt(firstPart) + parseInt(secondPart)).toString();
        resultBox.innerHTML = firstPart;
        selectedOperator = "";
        secondPart = "";
        break;
    case "-":
        firstPart = (parseInt(firstPart) - parseInt(secondPart)).toString();
        resultBox.innerHTML = firstPart;
        selectedOperator = "";
        secondPart = "";
        break;
    case "*":
        firstPart = (parseInt(firstPart) * parseInt(secondPart)).toString();
        resultBox.innerHTML = firstPart;
        selectedOperator = "";
        secondPart = "";
        break;  
    case "/":
        firstPart = (parseInt(firstPart) / parseInt(secondPart)).toString();
        resultBox.innerHTML = firstPart;
        selectedOperator = "";
        secondPart = "";
        break;
    default:
        break; 
  }
}