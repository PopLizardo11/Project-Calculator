const expressOut = document.querySelector("#expression-out");
const numberOut = document.querySelector("#number-out");
const numBtns = [...document.querySelectorAll(".num-btn")];
const operateBtns = [...document.querySelectorAll("operate-btn")];

function add(numA, numB) {
    return numA + numB;
}

function subtract(numA, numB) {
    return numA - numB;
}

function multiply(numA, numB) {
    return numA * numB;
}

function divide(numA, numB) {
    return numA / numB;
}

function operate(operator, numA, numB) {
    switch (operator) {
        case "+":
            return add(numA, numB)
        case "-":
            return subtract(numA, numB)
        case "x":
            return multiply(numA, numB)
        case "/":
            return divide(numA, numB)
    }
}

function popDisplay(e) {
    numberOut.textContent += e.target.textContent;
}

numBtns.forEach((btn) => btn.addEventListener("click", popDisplay));

// Recreate the operate function 

// Main problem: How to display numbers as output and store the number