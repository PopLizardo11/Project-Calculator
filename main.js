const expressDis = document.querySelector("#express-dis");
const termDis = document.querySelector("#term-dis");
const numBtns = [...document.querySelectorAll(".num-btn")];
const operateBtns = [...document.querySelectorAll(".operate-btn")];
const operateArgs = {
    numA: null,
    numB: null,
    operator: null,
    isNew: true,
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
        termDis.textContent += e.target.textContent;    
    } else {
        termDis.textContent = e.target.textContent; 
        operateArgs.isEquation = false;  
    }
}


// function express(e) {

    
//     // if (expressDis.textContent !== "") {
//     //     operateArgs.numB = parseFloat(termDis.textContent);
//     //     const answer = operate(operateArgs.operator, operateArgs.numA, operateArgs.numB);
//     //     operateArgs.numA = answer;
//     //     operateArgs.operator = e.target.textContent;
//     //     expressDis.textContent = `${operateArgs.numA} ${operateArgs.operator} `;
//     //     termDis.textContent = operateArgs.numA;
//     //     operateArgs.isEquation = true; 
//     // } else {
//     //     operateArgs.numA = parseFloat(termDis.textContent);
//     //     operateArgs.operator = e.target.textContent;
//     //     termDis.textContent = "";
//     //     expressDis.textContent = `${operateArgs.numA} ${operateArgs.operator} `;
//     // }
//         // operateArgs.numA = parseFloat(numberOut.textContent);
//         // termDis.textContent = "";
//         // operateArgs.operator = e.target.textContent;
//         // expressDis.textContent = `${operateArg.numA} ${operateArg.operator} `
// }

numBtns.forEach((btn) => btn.addEventListener("click", popDisplay));
operateBtns.forEach((btn) => btn.addEventListener("click", express));

// Excalidraw Link: https://excalidraw.com/#room=680c1b7230cbcd3daf48,UH5tj90VNBs1EtwpnRM9Aw