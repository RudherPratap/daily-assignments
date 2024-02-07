
let values = prompt("Enter any value: ");

if (values == false) {
  alert("The entered value is falsy.");
}else if (values == null) {
  alert("The entered value is falsy."); 
}else if (values === 0) { 
  alert("The entered value is falsy."); 
}else if (values === undefined) {
  alert("The entered value is falsy.");
}else{
  alert("The entered value is truthy.");
}