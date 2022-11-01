const expressDis = document.querySelector("#express-dis");
const termDis = document.querySelector("#term-dis");
const numBtns = [...document.querySelectorAll(".num-btn")];
const operateBtns = [...document.querySelectorAll(".operate-btn")];
const equalsBtn = document.querySelector("#equals-btn");
const deleteBtn = document.querySelector("#delete-btn");
const clearBtn = document.querySelector("#clear-btn");
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

function getNum(e) {
    if (!operateArgs.isNew) {
        termDis.textContent += e.target.textContent;
    } else {
        termDis.textContent = e.target.textContent; 
        operateArgs.isNew = false;  
    }
    
    assignNum();
}

function getOperator(e) {
    if (operateArgs.numA !== null) {
        operateArgs.operator = e.target.textContent;
        expressDis.textContent = `${operateArgs.numA} ${operateArgs.operator}`
        operateArgs.isNew = true;
    }
}

function getAnswer() {
    if (operateArgs.numB !== null) {
        const answer = operate(operateArgs.operator, operateArgs.numA, operateArgs.numB);
        expressDis.textContent = `${operateArgs.numA} ${operateArgs.operator} ${operateArgs.numB} =`
        termDis.textContent = answer;
        operateArgs.numA = answer;
        operateArgs.isNew = true;
    }
}

function expressAnswer(e) {
    if (operateArgs.numB !== null) {
        const answer = operate(operateArgs.operator, operateArgs.numA, operateArgs.numB);
        operateArgs.numA = answer;
        operateArgs.operator = e.target.textContent;
        operateArgs.numB = null;
        operateArgs.isNew = true;
        expressDis.textContent = `${operateArgs.numA} ${operateArgs.operator}`;
        termDis.textContent = answer;
    }
}

function deleteNum() {
    termDis.textContent = termDis.textContent.slice(0, termDis.textContent.length - 1);
    assignNum()
}

function clearAll() {
    termDis.textContent = 0;
    expressDis.textContent = "";
    for (let args in operateArgs) {
        args = (args === operateArgs.isNew) ? true : null; 
    }
    console.log(operateArgs)
}

function assignNum() {
    const num = isNaN(parseFloat(termDis.textContent)) ? 0 : parseFloat(termDis.textContent);
    if (operateArgs.operator === null) {
        operateArgs.numA = num;
    } else {
        operateArgs.numB = num;
    }
}

numBtns.forEach((btn) => btn.addEventListener("click", getNum));
operateBtns.forEach((btn) => btn.addEventListener("click", getOperator));
operateBtns.forEach((btn) => btn.addEventListener("click", expressAnswer));
equalsBtn.addEventListener("click", getAnswer);
deleteBtn.addEventListener("click", deleteNum);

// Excalidraw Link: https://excalidraw.com/#room=680c1b7230cbcd3daf48,UH5tj90VNBs1EtwpnRM9Aw