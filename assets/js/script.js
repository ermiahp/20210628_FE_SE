
const resultBox = document.getElementsByClassName('calculator__result')[0];

// console.log(resultBox.innerHTML);

let firstPart = "";

let clearCalc = function () {
    resultBox.innerHTML = 0;
    firstPart = "";
}

let pressNumber = function (digit) {
    console.log(digit);
    firstPart = firstPart + digit;
    resultBox.innerHTML = firstPart;
}