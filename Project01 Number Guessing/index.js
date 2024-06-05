#!/usr/bin/env node
import inquirer from "inquirer";
// Function to generate a random number between min (inclusive) and max (exclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
async function guessNumberGame() {
    const secretNumber = getRandomNumber(1, 101);
    let attempts = 0;
    console.log("Welcome to the Guess the Number game!");
    console.log("I'm thinking of a number between 1 and 100...");
    while (true) {
        const { guess } = await inquirer.prompt({
            type: 'number',
            name: 'guess',
            message: 'Enter your guess:',
            validate: (input) => {
                if (isNaN(input) || input < 1 || input > 100) {
                    return 'Please enter a valid number between 1 and 100.';
                }
                return true;
            }
        });
        attempts++;
        if (guess === secretNumber) {
            console.log(`Congratulations! You guessed the number ${secretNumber} correctly in ${attempts} attempts.`);
            break;
        }
        else if (guess < secretNumber) {
            console.log('Too low! Try a higher number.');
        }
        else {
            console.log('Too high! Try a lower number.');
        }
    }
}
guessNumberGame();
