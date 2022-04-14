const numberButtons = document.querySelectorAll(".number");
const clear = document.querySelector('.clearDisplay');

numberButtons.forEach((numberButton) =>
  numberButton.addEventListener("click", (e) => {
    let display = document.querySelector(".numberDisplay");
    display.textContent != 0
      ? (display.textContent += e.target.dataset.value)
      : (display.textContent = e.target.dataset.value);
  })
);

clear.addEventListener('click',()=>{
  let display = document.querySelector(".numberDisplay");
  display.textContent = 0;
})

let numberDisplay = 0;
let partialResult = 0;
let operation = null;

function operator(operation, firstNumb, secondNumb) {
  switch (operation) {
    case "+":
      add(firstNumb, secondNumb);
      break;
    case "-":
      subtract(firstNumb, secondNumb);
      break;
    case "*":
      multiply(firstNumb, secondNumb);
      break;
    case "/":
      divide(firstNumb, secondNumb);
      break;
    default:
      break;
  }
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
  return num1 * num2;
}
function divide(number1, number2) {
  let num1 = Number(number1);
  let num2 = Number(number2);
  return number2 > 0 ? num1 / num2 : "ERROR";
}
