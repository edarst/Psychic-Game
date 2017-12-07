// Create an array letters

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Set variables for win, loss, etc.

var wins = 0;
var losses = 0;
var ties = 0;
var guessLeft = 9;
var userGuess = [];
var computerGuess;

//When user presses a key fror 0-9 on their keyboard, this runs

document.onkeyup = function(event) {

	var userGuess = event.key;
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//FUNCTION TO BEGIN GAME ON INITAL KEY PRESS

// logs key press

	console.log(userGuess);

	if (userGuess === computerGuess) {

		wins++;
		console.log("Wins: " + wins);
		//ADD CHARACTER GUESSED TO USERGUESS

	}

	else if (userGuess !== computerGuess) {

		losses++;
		//LOWER GUESSLEFT BY 1
		console.log("Losses: " + losses);
		//ADD CHARACTER GUESSED TO USERGUESS

	else if (userGuess == computerGuess) {

		ties++;
		console.log("Ties: " + ties);
		//ADD CHARACTER GUESSED TO USERGUESS
	}

	};

//reset the game once the number of guesses reaches 9

function resetGame() {

	guessLeft = 9;
	userGuess = [];
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

};

// ID HTML to update with user-facing wins, losses, and ties

document.querySelector("#game").innerHTML = html;