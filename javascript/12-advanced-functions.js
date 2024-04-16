// How to use functions
function greeting() {
  console.log('hello');
}
greeting();

// functions are values so we can save it in variable like below
const function1 = function greeting() {
  console.log('hello2');
};
console.log(function1);
function1();

// functions without a name are called Anonyomous Functions like below
const function2 = function() {
  console.log('hi');
};

// Hoisting allows us to call a function before we write the function like below
function3();
function function3() {
  console.log('sup')
}

// Method is when we save a function inside an object like below
const object1 = {
  num: 2,
  fun: function() {
    console.log('hello3');
  }
};
object1.fun();

// We can values into a function like below
function display(param) {
  console.log(param);
}
display(2);

// We can also pass functions through functions like below
// The Callback function is the function which is used as the value
function run(param) {
  param();
}
run(function() {
  console.log('hello4')
});

// setTimeout is used when we want to call a function in the future
// this is Asynchronous code as the computer won't wait for a line to finish before going to the next line
setTimeout(function() {
  console.log('timeout');
}, 3000);
console.log('next line');

// setInterval will keep running a function in the future, it is also Asynchronous code
setInterval(function() {
  console.log('interval');
}, 3000);
console.log('next line 2');

// forEach is another way to loop through an array
[
  'make dinner',
  'wash dishes',
  'watch youtube'
].forEach(function(value, index) {
  if (value === 'wash dishes') { // return in a forReach does the same as a continue, it ends the function early and goes on to the next function
    return;
  }

  console.log(index);
  console.log(value);
});

// there's no easy way to use break in a for Each, if we want to, it's better to use a for loop

// Arrow functions work the same as regular functions with multiplpe params and return like below
const arrowFunction = (param, param2) => {
  console.log('hello');
  return 5;
};
arrowFunction();
// A difference is if only one param, brackets aren't needed like below
const oneParam = param => {
  console.log(param+1);
}
oneParam(2);
// Another difference is if only one line of code, curly brackets return aren't needed like below
const oneLine = () => 2 + 3;
console.log(oneLine());
// It's recommended to use arrow functions when passing a function into a function
// Below shows how to create a method in an object using arrow functions
const object2 = {
  method: () => {

  },
  // However there's something called Shorthand Method like below so arrow function not needed
  method() {

  }
};

// addEventListener lets us run code when we interact with the element
// It has two params; the event and the function
const buttonElement = document.querySelector('.js-button');
buttonElement.addEventListener('click', () => {
  console.log('click');
});
// An advantage is we can add multiple event listeners to one even like below
buttonElement.addEventListener('click', () => {
  console.log('click2');
});
// removeEventListener lets us remove an even listener and also takes the two params event and function like below
// But we can't just add the function so we make a variable first like below
const eventListener = () => {
  console.log('click');
};
buttonElement.removeEventListener('click', eventListener);