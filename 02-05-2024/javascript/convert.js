alert("Unit conversion of km to miles, celsius to fahreheit, cm to meters.")
let value = prompt("Enter a value to convert: ");

value = parseFloat(value);

let convertFrom = prompt("Enter the unit to convert from(km, celcius, cm): ");
let convertTo = prompt("Enter the unit to convert to(miles, fahrenheit, meters): ");

if(convertFrom === "km" && convertTo === "miles"){
 let kmtoMiles = value/1.609;
 alert(kmtomiles.toFixed(2));
}
else if(convertFrom === "celcius" && convertTo === "fahrenheit"){
  let ctoF = value*9/5+32;
  alert(ctoF);
}
else{
  let cmtoMeters = value/100;
  alert(cmtoMeters.toFixed(2));
}


