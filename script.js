//Guessing Game

var secretNumber = 5;

var guess = Number(prompt("Guess a number"));

if (guess === secretNumber) {
	alert("You guessed right!");
} else if (guess > secretNumber) {
	alert("You guessed too high! Pick again");
} else {
	alert(" You guessed too low! Pick again");
}