const expressOut = document.querySelector("#express-out");
const termOut = document.querySelector("#term-out");
const numBtns = [...document.querySelectorAll(".num-btn")];
const operateBtns = [...document.querySelectorAll(".operate-btn")];
const operateArgs = {
    numA: null,
    numB: null,
    operator: null,
    isEquation: true
};

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
    if (!operateArgs.isEquation) {
        numberOut.textContent += e.target.textContent;    
    } else {
        numberOut.textContent = e.target.textContent; 
        operateArgs.isEquation = false;  
    }
}

function assignDisplay(e) {
    operateArg.numA = parseFloat(numberOut.textContent);
    numberOut.textContent = "";
    operateArg.operator = e.target.textContent;
    expressOut.textContent = `${operateArg.numA} ${operateArg.operator} `
}

numBtns.forEach((btn) => btn.addEventListener("click", popDisplay));
operateBtns.forEach((btn) => btn.addEventListener("click", assignDisplay));

// Excalidraw Link: https://excalidraw.com/#room=680c1b7230cbcd3daf48,UH5tj90VNBs1EtwpnRM9Aw