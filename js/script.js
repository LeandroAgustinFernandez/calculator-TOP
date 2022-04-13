function add(number1,number2){
    let number1 = Number(number1);
    let number2 = Number(number2);
    return number1 + number2;
}
function subtract(number1,number2){
    let number1 = Number(number1);
    let number2 = Number(number2);
    return number1 - number2;
}
function multiply(number1,number2){
    let number1 = Number(number1);
    let number2 = Number(number2);
    return number1 * number2;
}
function divide(number1,number2){
    let number1 = Number(number1);
    let number2 = Number(number2);
    return (number2 > 0) ? number1/number2 : 'ERROR';
}