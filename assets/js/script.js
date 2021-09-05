
const resultBox = document.getElementsByClassName('calculator__result')[0];

// console.log(resultBox.innerHTML);

let firstPart = "";
let secondPart = "";
let selectedOperator = "";

let clearCalc = function () {
    resultBox.innerHTML = 0;
    firstPart = "";
    secondPart = "";
    selectedOperator = "";
}

let pressNumber = function (digit) {
    if (secondPart.length + firstPart.length <= 12) {
        if (selectedOperator === "") {
            if (firstPart.length <= 8) {
                firstPart = firstPart + digit;
                resultBox.innerHTML = firstPart;
            }
        } else {
            secondPart += digit;
            resultBox.innerHTML += digit;
        }
    }
}



function pressOperator(operator) {
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
            firstPart = (parseInt(firstPart) + parseInt(secondPart)).toString();
            resultBox.innerHTML = firstPart;
            electedOperator = "";
            secondPart = "";
            break;

        case "*":
            firstPart = (parseInt(firstPart) + parseInt(secondPart)).toString();
            resultBox.innerHTML = firstPart;
            electedOperator = "";
            secondPart = "";
            break;

        case "=":
            firstPart = (parseInt(firstPart) + parseInt(secondPart)).toString();
            resultBox.innerHTML = firstPart;
            electedOperator = "";
            secondPart = "";
            break;

        case "/":
            firstPart = (parseInt(firstPart) + parseInt(secondPart)).toString();
            resultBox.innerHTML = firstPart;
            electedOperator = "";
            secondPart = "";
            break;
        default:
            break;



    }

}

