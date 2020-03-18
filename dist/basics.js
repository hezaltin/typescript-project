"use strict";
function add(num1, num2, showresultPrint, resultText) {
    var addNumber = num1 + num2;
    if (showresultPrint) {
        return resultText + addNumber;
    }
    else {
        return addNumber;
    }
}
var number1 = 5;
var number2 = 3.4;
var printResult = true;
var resultPrint = 'The Result is: ';
var result = add(number1, number2, printResult, resultPrint);
console.log(result);
