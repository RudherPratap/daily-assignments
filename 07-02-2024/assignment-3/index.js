
let score = [];
function numberGuessing() {
  let randomNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

  let count = 0;
  let run = true;


  while (run) {
    let guess;

    guess = parseInt(prompt("Guess the number between 1-100: "));
    console.log(guess);

    if (guess < 1 || guess > 100 || isNaN(guess)) {
      alert("Enter the valid guess.");
    }
    count = count + 1;

    history_score.push(guess);

    if (guess < randomNumber) {
      window.alert("Too low");
    } else if (guess > randomNumber) {
      window.alert("Too high");
    }
    else {
      window.alert(`Correct. It took you ${count} attempts.`);
      score.push(count);

      break;

    }

  }
  let again = confirm("Want to play again?");
  return again;
}

function main() {
  let replay = true;
  do {
    replay = numberGuessing();

  } while (replay);
}
console.log(`Scores ${score}`);
main();