// Create an array numbers 1-10

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Set variables for win, loss, etc.

var win = document.getElementByID("result-win")
var loss = document.getElementByID("result-loss")
var guessLeft = document.getElementByID("guesses-left")
var guessMade = document.getElementByID("guesses-made")
tieCount = 0;
winCount = 0;
lossCount = 0;

// function for computer to pick one number at random from the array

// user can loop through array 10 times, at which point game is over

// letters that the user has guessed are displayed in span ID under guesses made

// function for when on key press event, user key is compared to computer's guess

// if the same, user win ++i

//if not the same, loss ++1

//reset once game is over