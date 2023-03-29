// Check the link in console
// console.log("Hello World")

// Guess That Number!
// Message to be used through project
const enterNumText = 'Please enter a number greater than zero'; // console.log(enterNumText);

// For restarting the game
let restartGame = true;

// For starting the range of number to be guessed
let rangeNum;

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



restartGame = false;
};