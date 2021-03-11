// Sara Powers
// March 10, 2021
// Assignment 4
// COMM 644

//STEP 1

let num1;

//function that accepts one number
function halfNumber(num1) {
//divide by two and return result to the console
    let half = console.log(`Half of ${num1} is ${num1 / 2}.`);
    return half;
}
//call to function
halfNumber(50);


//STEP 2

let num2;

//function that accepts one number
function squareNumber(num2) {
//square the number and return result to the console
    let square = console.log(`The result of squaring the number ${num2} is ${Math.pow(num2,2)}.`);
    return square;
}
//call to function
squareNumber(3);


//STEP 3

let num3, num4;

//function that accepts two numbers
function percentOf(num3, num4) {
//find the percent of the number and return result to the console
    let percent = console.log(`${num3} is ${num3 / num4 * 100}% of ${num4}.`);
    return percent;
}
//call to function
percentOf(6, 8);


//STEP 4

let num5, num6;

//function that accepts two numbers
function findModulus(num5, num6) {
//find the modules of the two parameters and result to the console
    let modulus = console.log(`${num5 % num6} is the modulus of ${num5} and ${num6}.`);
    return modulus;
}
//call to function
findModulus(12, 5);


//STEP 5

//accept a certain amount of number of parameters
let sum = 0;
let entry = String(prompt('Enter a list of numbers, separated by commas: '));
let newEntry = "";

function addEmUp(entry) {
    for (let i = 0; i < entry.length; i++) {
        if (entry.charAt(i) === ',') {
            //debug console.log(`comma ${entry.charAt(i)}`);
            addChar = "+";
            newEntry = newEntry + addChar;
        }
        else {
            //debug console.log(`number ${entry.charAt(i)}`);
            addChar = entry.charAt(i);
            newEntry = newEntry + addChar;
        }
    }
    newEntry = Number(eval(newEntry));
    return(newEntry);
}

addEmUp(entry);
console.log(`The sum of all your numbers is ${newEntry}`);

