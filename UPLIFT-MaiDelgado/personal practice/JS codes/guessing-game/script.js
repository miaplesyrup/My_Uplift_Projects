/*
begin
GET user guess from input
SET userGuess

SET randomNumber
SET guessCount to 0

function checkGuess()
    // validation

    IF guessCount === 10 
        RETURN "Game over"
    
    IF userGuess === randomNumber
        PRINT "Congratulations"
    ELSE IF userGuess > randomNumber
        PRINT "Your guess was too high"
    ELSE IF userGuess < randomNumber
        PRINT "Your guess was too low"
    ELSE
        PRINT "Your input was not a number"

    increament guessCount plus 1
end
*/

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);
let guessCount = 1;

// console.log(userGuess);
guesses.textContent = "Previous Guesses: ";

function checkGuess() {
  let userGuess = Number(guessField.value);

  guesses.textContent += userGuess + " ";

  if (userGuess === randomNumber) {
    lastResult.innerHTML = "Congratulations! 🚀";
    setGameOver();
  } else if (guessCount === 3) {
    lastResult.innerHTML = `Game over! 😥 The correct number is ${randomNumber}`;
    setGameOver();
  } else {
    if (userGuess > randomNumber) {
      lowOrHi.textContent = "Your guess was too high!";
    } else if (userGuess < randomNumber) {
      lowOrHi.textContent = "Your guess was too low!";
    } else {
      lowOrHi.textContent = "Your input was not a number!";
    }
  }
  guessCount++;
  guessField.value = "";
}
guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  lowOrHi.textContent = "";

  // generate new button
  const resetButton = document.createElement("button");
  resetButton.textContent = "Start New Game 🚀";
  document.body.appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  location.reload();
}
