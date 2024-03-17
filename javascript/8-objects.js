// an object groups multiple values together
const product = {
  name: 'socks',
  price: '1090'
};
console.log(product);

// we can access the value of a property in a object with dot notation like below
console.log(product.name);

// we can change the value of a property like below
product.name = 'cotton socks';
console.log(product.name);

// we can add new properties like below
product.newProperty = true;
console.log(product);

// we can delete propeties like below
delete product.newProperty;
console.log(product);

// we can also access the value of a property with bracket notation like below
console.log(product['name']);
// we use bracket notation when dot notation causes syntax errors like using '-'

// nested objects are objects stored within objects
const product2 = {
  rating: {
    stars: 4.5,
    count: 87
  }
};
console.log(product2.rating.count);

// methods are functions inside an object
const product3 = {
  func: function function1 () {
    console.log('function inside object');
  }
}
product3.func();

// Built-In JSON object
// JSON means javascript object notation and is a syntax similar to javascript object but with less features like no functions
// all JSON properties and values need "", doesn't support ''
// JSON syntax can be understood in almost all coding languages so we use it when we send data between computers and store data
console.log(JSON.stringify(product2));

// we can use parse to convert back to an object
const jsonString = JSON.stringify(product2)
console.log(JSON.parse(jsonString));