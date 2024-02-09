

let num1 = parseFloat(prompt("Enter number 1: "));
let num2 = parseFloat(prompt("Enter number 2: "));

let opr = prompt("Enter an operator(+, *, -, /): ");


switch (opr) {
  case "+":
    result = num1 + num2;
    alert(`${num1} + ${num2} = ${result}`);
    break;
  case "-":
    result = num1 - num2;
    alert(`${num1} + ${num2} = ${result}`);
    break;
  case "*":
    result = num1 * num2;
    alert(`${num1} + ${num2} = ${result}`);
    break;
  case "/":
    result = num1 / num2;
    alert(`${num1} + ${num2} = ${result}`);
    break;
  default:
    alert("Enter valid operator");
    opr = prompt("Enter an operator(+, *, -, /): ");
    break;
}



