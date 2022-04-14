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
  numberButton.addEventListener("click", getNumber)
);

clear.addEventListener("click", () => {
  displayContent.textContent = 0;
  resetValues();
});

erase.addEventListener("click", () => {
  displayContent.textContent = 0;
});

equalButton.addEventListener("click", () => {
  if (operation == null || !operationState) return;
  numberDisplay2 = Number(displayContent.textContent);
  operator(operation, numberDisplay1, numberDisplay2);
  resetValues();
});

operationButtons.forEach((operatorButton) =>
  operatorButton.addEventListener("click", getParamsOperation)
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
  let res = num1 + num2;
  return res;
}
function subtract(number1, number2) {
  let num1 = Number(number1);
  let num2 = Number(number2);
  return num1 - num2;
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

function getNumber(e) {
  if (
    !displayContent.textContent.includes(".") ||
    e.target.dataset.value != "."
  ) {
    operationState = true;
    displayContent.textContent != 0 && display != 0
      ? (display += e.target.dataset.value)
      : (display = e.target.dataset.value);
    displayContent.textContent = display;
  }
}

function getParamsOperation(e) {
  if (!operationState) {
    operation = e.target.dataset.value;
    return;
  }
  if (operation != null) {
    numberDisplay2 = Number(displayContent.textContent);
    operator(operation, numberDisplay1, numberDisplay2);
  }
  operation = e.target.dataset.value;
  numberDisplay1 = Number(displayContent.textContent);
  display = 0;
  operationState = false;
}