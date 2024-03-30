// An array is another type of value and is a lost of values
const myArray = [10, 20, 30];
console.log(myArray);

// we can target specific values in an array like below:
console.log(myArray[1]); // this shows 20

// we can change values like below:
myArray[0] = 99; // the first value is now 99
console.log(myArray);

// arrays can have any type of values like below:
[1, 'hello', true, {name: 'socks'}, [1, 2]];
console.log(typeof [1, 2]); // this shows as an object as arrays are special type of objects
console.log(Array.isArray([1, 2])); // this is how to check if an array is an array and this shows as true

// as arrays are objects, it also has properties and methods like below:
console.log(myArray.length); // this shows how many values are in the array
myArray.push(100); // this method adds a value at the end of an array
console.log(myArray);
myArray.splice(0, 1); // this method removes values from an array
console.log(myArray);