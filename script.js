// Check the link in console
// console.log("Hello World")

// Guess That Number!
// Message to be used through project
const enterNumText = 'Please enter a number greater than zero'; // console.log(enterNumText);

// For restarting the game
let restartGame = true;

// For starting the range of number to be guessed
let rangeNum;

let randomNum;
// For storing the number of attempts the user has left

let lives;

// For storing the user's guess
let guess;

// For storing the user's response to play again or not
let playAgain;

// Starting alert message
alert ('Welcome to "GUESS THAT NUMBER!" Please click "OK" to start the game');


// game restarts as long as restartGame is true
while (restartGame) {
// ask user to enter number to set  the upper bound for the random number that will be created.
rangeNum = prompt('Please enter a maximum number');

// Using parseInt to attempt to convert the user's response into a number value
rangeNum = parseInt(rangeNum)

// Verifies the user's entry for a range number is a number greater than zero
// note : all numbers have a default boolean value Except for zero, which is boolean false value by default
while (!rangeNum || rangeNum < 1) {
    rangeNum = prompt(enterNumText);
    rangeNum = parseInt(rangeNum);
}

// Create the random number using the range number entered by the user
randomNum = Math.floor(Math.random() * rangeNum) + 1;

// Prompts user to enter a number of attempts (lives) allowed (e.g. the number of guesses)
lives = parseInt(prompt(`Please enter a number of attempts allowed:`));
console.log(lives);

// Verifying the user's entry for a number of attempts allowed is a number greater than zero and equal to or less than the range they set

while (!lives || lives < 1 || lives > rangeNum) {
    lives = parseInt(prompt(`Please enter a number from 1 to ${rangeNum}`));
}

// Asks the user to enter a guess in the range they set
guess = prompt(`Please enter a guess from 1 to ${rangeNum}. You have ${lives} live(s) left.`);

// Continue looping until the user guesses the correct number or runs out of attempts. NOTE: As loop is set up, the BREAK keyword is run.
while (true) {

    // Displays the number when a code word is entered
    if (guess === 'pickle') {
        alert(`Psssst... the number is ${randomNum}`)
        guess = prompt(`Please enter a guess from 1 to ${rangeNum}. You have ${lives} live(s) left.`);
    }

    // Tries to convert the user's guess into a number
    guess = parseInt (guess);

    // Verify the user's guess is a number greater than zero and less than or equal to the range they set.
    while (!guess || guess < 1 || guess > rangeNum) {
        guess = parseInt(prompt(`Please enter a number from 1 to ${rangeNum}`))
    }

    // Remove a life
    lives--;

    // if else
    if (guess === randomNum) {
        alert(`Congratulations!!! You guessed the correct number!!!: ${randomNum}`);
        break;
        // Check if user has any attempts left. If not, game ends and the number is displayed to the user.
    } else if (lives ===0) {
        alert(`Sorry but you have run out of lives. The number was ${randomNum}`)
        break;
    } else if (guess < randomNum) {
        guess = prompt(`Too low. You have ${lives} lives(s) left.`);
        // The only other possibility is the user's guess was too high, so the prompt was repeated.
    } else {
        guess = prompt(`Too high. You have ${lives} lives(s) left.`);
    }
    }

   // Ask the user with option to play again
   playAgain = prompt('Would you like to play again? Y for yes. N for no.');

   // Loop continues while user submits a valid response 
   while(true){
       // Check if the user's answer is no (eg. N for no)
       if (playAgain.toUpperCase() === 'N'){
           alert('Thanks for playing!');
           restartGame = false;
           break;
       // Check if the users answer is yes (e.g. Y for yes) 
       } else if (playAgain.toUpperCase() === 'Y'){
           // The game restarts
           break;
       } else {
           playAgain = prompt('Please enter Y or N');
       }
   }
};