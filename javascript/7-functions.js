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