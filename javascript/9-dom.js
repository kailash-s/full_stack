// Document Object Model represents the webpage
// it is a built-in object
document.body.innerHTML = 'hello';
document.title = 'Good job';

// SYNTAX RULES
// 1. The DOM combines HTML and JavaScript together
console.log(document.body);
// this shows the body element of the webpage
// 2. the HTML element becomes an object
console.log(typeof document.body);
// 3. as body is an object, it also has methods and properties
console.log(document.body.innerHTML);
// 4. we can also do HTML
document.body.innerHTML = '<button>changed</button>'

// 1. querySelector lets us to get any element from the page and put it inside Javascript
console.log(document.querySelector('button'));
// 2. every HTML element has the innerHTML property
console.log(document.querySelector('button').innerHTML);
// 3. we can then use that
document.querySelector('button')
  .innerHTML = 'changed again';
// 4. if there are two buttons, querySelector will go for the first one
console.log(document.querySelector('.js-button'));
// 5. this can also be made into a variable
const buttonElement = document.querySelector('.js-button');
console.log(buttonElement);