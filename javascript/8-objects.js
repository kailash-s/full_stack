// an object groups multiple values together
const product = {
  name: 'socks',
  price: '1090'
};
console.log(product);

// we can access the value of a property in a object like below
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