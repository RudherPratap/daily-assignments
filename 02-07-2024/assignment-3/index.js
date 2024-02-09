
function numberGuessing() {
  let randomNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

  let count = 0;
  let run = true;

  const history_score = [];

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
      score(count);
      showHistory(history_score);
      break;

    }

  }
  let again = confirm("Want to play again?");
  return again;
}
function showHistory(history) {
  alert(`history: ${history.join(', ')}`);
}
function score(count) {
  let claculatedScore = 0;
  if (count <= 5) {
    claculatedScore = 12;
  } else if (count <= 10) {
    claculatedScore = 8;
  } else if (count <= 14) {
    claculatedScore = 4
  } else {
    claculatedScore = 2;
  }

  alert(`Your score: ${claculatedScore}`);
}

function main() {
  let replay = true;
  do {
    replay = numberGuessing();

  } while (replay);
}
main();