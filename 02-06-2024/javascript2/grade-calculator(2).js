score = parseFloat(prompt("Enter your score"));

if (score >= 94 && score <= 100) {
  alert("Your grade: A");
}else if (score >= 84 && score < 94) {
  alert("Your grade: B");
}else if (score >= 74 && score < 84) {
  alert("Your grade: C");
}else if (score >= 64 && score < 74) {
  alert("Your grade: D")
}else if(score >= 0 && score <64){
  alert("Your grade: F");
}else if(score > 100){
  alert("Your score can not be evaluated");
}else{
  alert("Enter your score again");
  score = parseFloat(prompt("Enter your score"));
}
