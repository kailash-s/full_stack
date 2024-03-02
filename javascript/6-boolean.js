// // boolean value represents if something if true or false
// // the below code will show as false
console.log(3>5);

// // we use comparison operators for booleans like <, >, <=, >=, ===, !==
// // in js, there is === and == but mostly === is used as
console.log(5 == '5');
// // shows as true but
console.log(5 === '5');
// // shows as false as that is correct

// // comparison operators also have lower priority than order of operations so
console.log(3>5-3); 
// // shows as true

// // If-Statements lets us write multiple groups of code and decide which code to run
if(true) {
  console.log('hello');
}

// // If-Statements also have a feature called else
if (false) {
  console.log('hello');
} else {
  console.log('else');
}

// example
let age = 30
if (age>=16) {
  console.log('You can drive');
} else {
  console.log('You cant drive');
}

// if-statements also have the else if feature
let age = 15
if (age>=16) {
  console.log('You can drive');
} else if(age=15) {
  console.log('Almost');
} else {
  console.log('You cant drive');
}

// logical operators allow us to combine booleans
console.log(true && false); // this will show as true
console.log(true && false) // this will show as false