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
let age1 = 30
if (age1>=16) {
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
// and operator
console.log(true && true); // this will show as true
console.log(true && false); // this will show as false

// or operator
console.log(true || false); // this will show as true

// not operator
console.log(!true); // this will show as false

// truthy and falsy
// falsy values are false, 0, '', NaN, underfined and null
if (0) {
  console.log('hi');
}
// ^^^ this won't log anything

const cart = 5;
if (cart) {
  console.log('cart has items');
}
// ^^^ this will log as 5 is a truthy value

// this also works for logical operators like below
console.log(!0); // this is now truthy

// NaN = Not a number
console.log('hi'/5); // hi isn't a number

// underfined
let hi;
console.log(hi); // hi doesn't have a value