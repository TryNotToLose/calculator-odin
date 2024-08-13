function add (number1, number2) {
    return parseFloat(number1) + parseFloat(number2);
}

function subtract (number1, number2) {
    return parseFloat(number1) - parseFloat(number2);
}

function multiply (number1, number2) {
    return parseFloat(number1) * parseFloat(number2);
}

function divide (number1, number2) {
    return parseFloat(number1) / parseFloat(number2);
}

let firstNumber;
let secondNumber;
let operator;

function operate (number1, operator, number2) {
    switch (operator) {
        case "+": return add(number1,number2);
        break;
        case "-": return  subtract(number1,number2);
        break;
        case "*": return  multiply(number1,number2);
        break;
        case "/": return divide(number1,number2);
        break;

    }
}

function displayNumber (e) {
    let number = e.target.textContent;    
    display.textContent = "" ?
        display.textContent = number :
        display.textContent = display.textContent + number;
}

const display = document.querySelector(".display-container");
const buttons = document.querySelectorAll("btn.number");
const operands = document.querySelectorAll("btn.operator")
buttons.forEach( (elem) => elem.addEventListener("click",displayNumber))

function updateDisplay (e) {
    if  (display.textContent != null) {
        if (e.target.textContent  == "C") { 
            display.textContent = null;
        }
        else if ( (firstNumber != null) && (e.target.textContent != "=") ) {
            secondNumber = display.textContent;
            operator = e.target.textContent;
            firstNumber = operate(firstNumber,operator,secondNumber);
            display.textContent = null
        }
        else if ((firstNumber != null) && (e.target.textContent = "=")) { 
            secondNumber = display.textContent;
            display.textContent = operate(firstNumber,operator,secondNumber);
            firstNumber = display.textContent;
            operator = null;
        }
        else {
            firstNumber = display.textContent;
            operator = e.target.textContent;
            display.textContent = null;
        }
    }
}

operands.forEach((elem) => elem.addEventListener("click", updateDisplay));

// if an operand is clicked
//      if first number is not in the display => Do nothing
//      else if an operand and first number has been stored already 
//          store second number in display 
//          return operand function and store as first number
//      else store the first number, the operand and clear the display
// if equal sign is clicked
//    if an operand and first number has been stored already 
//          store second number in display 
//          return operand function to the display


