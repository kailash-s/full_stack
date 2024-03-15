// functions let us reuse code

// how to create
function function1() {
  console.log('hello');
  console.log(2+2)
  // let's us get a value out of a function, this also ends the function
  return 5;
}

// how to run
console.log(function1());
function1();

// parameter puts a value into a function
function calculateTax(parameter1, taxPercent = 0.1) {
  console.log(parameter1*taxPercent);
}

calculateTax(2000, 0.2);
calculateTax(5000);

// EXERCISES
// 7a, 7b
function greet(name) {
  console.log(`hello ${name}`);
}
greet('Harry');

// 7c
function greet(name) {
  if (!name) {
    console.log('Hi there');
  } else {
    console.log(`hello ${name}`);
  }
}
greet();

// 7d
function convertToFahrenheit(celsius) {
  return (celsius*9/5)+32;
}
console.log(convertToFahrenheit(25));

// 7e
function convertToCelcius(fahrenheit) {
  return (fahrenheit-32)*5/9;
}
console.log(convertToCelcius(86));

//7f
function convertTemperature(degrees, unit) {
  if (unit === 'C') {
    const result = convertToFahrenheit(degrees);
    return `${result}F`;
  } else if (unit === 'F') {
    const result = convertToCelcius(degrees);
    return `${result}C`;
  }
}
console.log(convertTemperature(25, 'C'));
console.log(convertTemperature(86, 'F'));