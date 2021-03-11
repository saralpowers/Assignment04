// ADD A PRIVATE FUNCTION CALLED CALCULATE
//private by default

function calculate(num1, num2) {
//switch statement to evaluate operation parameter that calls function below
switch (operation) {
    case "add":
        const add(num1, num2)
        break;
    case "subtract":
        function subtract(num1, num2) {};
        break; 
    case "multiply":
        function multiply(num1, num2) {};
        break; 
    case "divide":
        function divide(num1, num2) {};
        break; 
    default:
        document.write('Invalid entry.');
}
}

// ADD FOUR PUBLIC FUNCTIONS BELOW

// ADD FUNCTION

const add = (x, y) => {
    return x + y;
}
export {add};

// SUBTRACT FUNCTION

const subtract = (x, y) => {
    return x - y;
}
export {subtract};

// MULTIPLY FUNCTION

const multiply = (x, y) => {
    return x * y;
}
export {multiply};

// DIVIDE FUNCTION

const divide = (x, y) => {
    return x / y;
}
export {divide};

// EXPORT THE FOUR PUBLIC FUNCTIONS