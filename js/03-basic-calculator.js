// Sara Powers
// March 10, 2021
// Assignment 4
// COMM 644

// IMPORT THE MODULE

// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER
let num1 = prompt('Enter the first number: ');
let num2 = prompt('Enter the second number: ');
let operation = prompt('Enter the operation you want to perform (add, subtract, multiply, or divide): ');


// CHECK TO SEE WHAT OPERATION THEY'RE USING
// CALL THE APPROPRIATE FUNCTION

import * as calc from "../calculator.js";

if (operation === "add") {
    console.log(calc.add(num1, num2));
} else if (operation === "subtract") {
    console.log(calc.subtract(num1, num2));
} else if (operation === "multiply") {
    console.log(calc.multiply(num1, num2));
} else (operation === "divide") {
    console.log(calc.divide(num1, num2));
};
