const resultBox = document.getElementsByClassName('calculator__display')[0];

let firstPart = "";

let clearCalc = function() {
  resultBox.innerHTML = 0;
  firstPart = "";
}

let pressNumber = function(digit) {
  console.log(digit);
  firstPart = firstPart + digit;
  resultBox.innerHTML = firstPart;
}