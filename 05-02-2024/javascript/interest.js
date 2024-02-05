
alert("Simple interest calculator")
let principalAmount = prompt("Enter principal amount: ");
let rateofInterest = prompt("Enter rate of interest per annum: ");
let timePeriod = prompt("Enter time period in years: ");

principalAmount= parseFloat(principalAmount);
rateofInterest= parseFloat(rateofInterest);
timePeriod= parseFloat(timePeriod);

let simpleInterest = (principalAmount * rateofInterest * timePeriod) / 100;

alert(simpleInterest);