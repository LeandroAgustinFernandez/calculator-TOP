let numberDisplay1 = 0;
let numberDisplay2 = 0;
let display = 0;
let operation = null;
let operationState = false;
const numberButtons = document.querySelectorAll(".number");
const clear = document.querySelector(".clearAll");
const erase = document.querySelector(".eraseDisplay");
const equalButton = document.querySelector(".calculate");
const operationButtons = document.querySelectorAll(".operator");
let displayContent = document.querySelector(".numberDisplay");

numberButtons.forEach((numberButton) =>
  numberButton.addEventListener("click", (e)=>{
    getNumber(e.target.dataset.value)
  })
);

clear.addEventListener("click", () => {
  displayContent.textContent = 0;
  resetValues();
});

erase.addEventListener("click", () => {
  displayContent.textContent = 0;
});

equalButton.addEventListener("click",calculate);

operationButtons.forEach((operatorButton) =>
  operatorButton.addEventListener("click",(e)=>{
    getParamsOperation(e.target.dataset.value)
  } )
);

function resetValues() {
  numberDisplay1 = 0;
  numberDisplay2 = 0;
  display = 0;
  operation = null;
}

function operator(operation, firstNumb, secondNumb) {
  let res;
  switch (operation) {
    case "+":
      res = add(firstNumb, secondNumb);
      break;
    case "-":
      res = subtract(firstNumb, secondNumb);
      break;
    case "*":
      res = multiply(firstNumb, secondNumb);
      break;
    case "/":
      res = divide(firstNumb, secondNumb);
      break;
    default:
      break;
  }
  displayContent.textContent = res;
}

function add(number1, number2) {
  let num1 = Number(number1);
  let num2 = Number(number2);
  let res = Number((num1 + num2).toFixed(6));
  return res;
}
function subtract(number1, number2) {
  let num1 = Number(number1);
  let num2 = Number(number2);
  return Number((num1 - num2).toFixed(6));
}
function multiply(number1, number2) {
  let num1 = Number(number1);
  let num2 = Number(number2);
  return Number((num1 * num2).toFixed(6));
}
function divide(number1, number2) {
  let num1 = Number(number1);
  let num2 = Number(number2);
  let res = Number((num1 / num2).toFixed(6));
  return number2 > 0 ? res : "ERROR";
}

function getNumber(number) {
  if (
    !displayContent.textContent.includes(".") ||
    number != "."
  ) {
    operationState = true;
    displayContent.textContent != 0 && display != 0
      ? (display += number)
      : (display = number);
    displayContent.textContent = display;
  }
}

function getParamsOperation(operationParam) {
  if (!operationState) {
    operation = operationParam;
    return;
  }
  if (operation != null) {
    numberDisplay2 = Number(displayContent.textContent);
    operator(operation, numberDisplay1, numberDisplay2);
  }
  operation = operationParam;
  numberDisplay1 = Number(displayContent.textContent);
  display = 0;
  operationState = false;
}

function  calculate() {
  if (operation == null || !operationState) return;
  numberDisplay2 = Number(displayContent.textContent);
  operator(operation, numberDisplay1, numberDisplay2);
  resetValues();
}

document.addEventListener('keypress',(e)=>{
  let codeKey = e.keyCode
  keyBoardOperations(codeKey) 
})

function keyBoardOperations(codeKey) {
  if ((codeKey >= 48 && codeKey <= 57) || codeKey == 46) {
    let arrayButtons = [...numberButtons];
    arrayButtons.forEach(element => {
      if (codeKey == element.dataset.keycode) {        
        getNumber(element.dataset.value)
        return;
      }
    });
  }
  if ((codeKey >= 42 && codeKey <= 45) || codeKey == 47) {
    let arrayOperationButtons = [...operationButtons];
    arrayOperationButtons.forEach(element => {
      if (codeKey == element.dataset.keycode) {
        getParamsOperation(element.dataset.value)
        return;
      }
    }) 
  }
  if (codeKey == 13) {
    calculate();
  }
  if (codeKey == 100) {
    displayContent.textContent = 0;
  }
  if (codeKey == 99) {
    displayContent.textContent = 0;
    resetValues();
  }
}