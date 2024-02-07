


let run = true;
let again;
  
  
  do {

    let randomNumber = Math.floor(Math.random()*100)+1;

    let count = 0;
    
    
    while(run){
      guess = parseInt(prompt("Guess the number between 1-100: "));
      console.log(guess);
      count++;
      
      if(guess < 1 || guess > 100){
        alert("Enter the valid guess.");
      }else if (isNaN(guess)) {
        window.alert("Invalid! Enter number again");
      }else{
        if(guess < randomNumber){
          window.alert("Too Low");
        }else if (guess > randomNumber) {
          window.alert("Too high");
        }
        else{
          window.alert(`Correct. It took you ${count} attempts.`);
          break;
        }
        
      }
    }
    
    again = prompt("Want to play again?(y/n): ");
  } while (again === "y");
  