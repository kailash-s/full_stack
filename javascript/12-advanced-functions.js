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
