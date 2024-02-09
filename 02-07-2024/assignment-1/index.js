while (true) {
  function addNumber(num1, num2) {
    return num1 + num2;
  }
  function subNumber(num1, num2) {
    return num1 - num2;
  }
  function multNumber(num1, num2) {
    return num1 * num2;
  }
  function divideNumber(num1, num2) {
    return num1 / num2;
  }
  let num1 = parseFloat(prompt("Enter first number: "));
  let num2 = parseFloat(prompt("Enter second number: "));
  if (!isNaN(num1) && !isNaN(num2)) {
    while (true) {
      let operator = prompt("Enter the operator(+, *, -, /");

      let result;
      switch (operator) {
        case "+":
          result = addNumber(num1, num2);
          break;
        case "-":
          result = subNumber(num1, num2);
          break;
        case "*":
          result = multNumber(num1, num2);
          break;
        case "/":
          result = divideNumber(num1, num2);
          break;

        default:
          alert("Invalid operator. Enter operator again.");

          continue;

      }
      alert(result);
      break;
    } break;
  } else {
    alert("Invalid input");
  }


}