let number1;
let number2;
let operation = null;

function operator(operation, firstNumb, secondNumb) {
  let result;
  switch (operation) {
    case "+":
      result = add(firstNumb, secondNumb);
      break;
    case "-":
      result = subtract(firstNumb, secondNumb);
      break;
    case "*":
      result = multiply(firstNumb, secondNumb);
      break;
    case "/":
      result = divide(firstNumb, secondNumb);
      break;
    default:
      break;
  }
  return result;
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

