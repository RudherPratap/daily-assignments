alert("To check if a number is +ve, -ve, or 0");
num = parseFloat(prompt("Enter a number"));

if (num > 0) {
  alert("Number is positive.");
}else if (num == 0) {
  alert("Number is zero.");
}else if (num < 0) {
  alert("Number is negative");
}else{
  alert("Invalid! Enter number again")
}

