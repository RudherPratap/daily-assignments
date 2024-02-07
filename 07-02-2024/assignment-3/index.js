
function numberGuessing() {
  let randomNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

  let count = 0;
  let run = true
  while (run) {
    let guess;

    guess = parseInt(prompt("Guess the number between 1-100: "));
    console.log(guess);

    if (guess < 1 || guess > 100) {
      alert("Enter the valid guess.");
    } else if (isNaN(guess)) {
      window.alert("Invalid! Enter number again");
    } else {
      count++;
      if (guess < randomNumber) {
        window.alert("Too low");
      } else if (guess > randomNumber) {
        window.alert("Too high");
      }
      else {
        window.alert(`Correct. It took you ${count} attempts.`);
        calculateScore(count);
        break;

      }
    }
  }
  let again = confirm("Want to play again?");
  return again;
}

function calculateScore(count) {
  let score = 0;

  if (count <= 6) {
    score = 10;
  } else if (count <= 10) {
    score = 8;
  } else if (count <= 13) {
    score = 5;
  } else {
    score = 2;
  }
  alert(`Your score is: ${score}`);

}

function main() {
  let replay = true;
  do {
    replay = numberGuessing();

  } while (replay);
}
main();