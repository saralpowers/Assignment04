// Sara Powers
// March 10, 2021
// Assignment 4
// COMM 644

//prompt user for their choice: rock, paper, or scissors

let usrChoice = 'start';
do {
    usrChoice = prompt('Enter your choice: (rock, paper, scissors): ');
    //console.log(`${usrChoice}`);
} while ((usrChoice !== 'rock' && usrChoice !== 'paper') && usrChoice !== 'scissors');

//create the computer's selection through three options split between a random number generated from 0 to 1 and set to choice
let comphoice;
let rawChoice = Math.random();
//console.log(rawChoice);
//depending on numeric value of random number, reset to string
if (rawChoice <= 0.33) {
    compChoice = 'rock';
    //console.log('rock');
} else if (rawChoice <= 0.66) {
    compChoice = 'paper';
    //console.log('paper');
} else {
    compChoice = 'scissors';
    //console.log('scissors');
};

//create a conditional statement that determines the winner and indicate who the winner is
function gameWinner(usrChoice, compChoice) {
    if (usrChoice === 'rock') {
        if (compChoice === 'paper') {
            alert('The computer wins!');
        } else if (compChoice === 'scissors') {
            alert('You win!');
        } else {
            alert('It\'s a tie. Try again.');
        }
    } else if (usrChoice === 'paper') {
        if (compChoice === 'scissors') {
            alert('The computer wins!');
        } else if (compChoice === 'rock') {
            alert('You win!');
        } else {
            alert('It\'s a tie. Try again.');
        }
    } else if (usrChoice === 'scissors') {
        if (compChoice === 'rock') {
            alert('The computer wins!');
        } else if (compChoice === 'paper') {
            alert('You win!');
        } else {
            alert('It\'s a tie. Try again.');
        }
    }
}
gameWinner(usrChoice, compChoice);

