// PART ONE
// 1. AN ARRAY is another type of value and is a lost of values
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

// 2. A LOOP lets us run code over and over
// below is the while loop
let i = 1;

while (i<=5) {
  console.log(i);
  i++;
}

// below is the for loop
for (let i = 1; i<=5; i++) {
  console.log(i);
}

// recommended to use for loops usually and while loops for non-standard loops like below
let randomNumber = 0;

while (randomNumber<0.5) {
  randomNumber = Math.random();
}
console.log(randomNumber);

// 3. LOOPING THROUGH AN ARRAY
const toDoList = [
  'make dinner',
  'wash dishes',
  'watch youtube'
];

for (let i = 0; i < toDoList.length; i++) {
  const value = toDoList[i];
  console.log(value);
}

// 4. ACCUMULATOR PATTERN
// here we are totalling the values in the array
const nums = [1, 1, 3];
let total = 0;

for (let i = 0; i < nums.length; i++) {
  const num = nums[i];
  total += num;
}
console.log(total);

// Second example, we will double each value in an array and put it into a new array
const numsDoubled = [];

for (let i = 0; i < nums.length; i++) {
  const num = nums[i]
  numsDoubled.push(num * 2);
}
console.log(numsDoubled);

// PART TWO
// Arrays are references
const array1 = [1,2,3];
const array2 = array1;
array2.push(4);
console.log(array1);
console.log(array2);
// Doing the above will push 4 into array1 as well
// we can use slice to avoid this
const array3 = [1,2,3];
const array4 = array3.slice();
array3.push(4);
console.log(array3);
console.log(array4);
// The above won't push 4 into array4

// Array Destructuring is a variable making shortcut as below:
const [firstValue, secondValue] = [1,2];

// break allows us to stop a loop early and continue allows us to skip 1 iteration like below:
for (let i =1; i<=10; i++) {
  if (i===3) {
    continue;
  }
  console.log(i);
  if (i===8) {
    break;
  }
}

// using continue is a while requires us to manually input the increment step or it'll become a forever loop
let k = 1;
while (k<=10) {
  if (k % 3 === 0) {
    k++;
    continue;
  }
  console.log(k);
  k++;
}

// we can use loops in functions as below
function doubleArray(numbers) {
  const numsDoubled2 = [];

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i]
    if (num === 0) {
      return numsDoubled2; // we can use return to break out of a loop like in line 134
    }
    numsDoubled2.push(num * 2);
  }
  return numsDoubled2;
}
console.log(doubleArray([1,1,3]));
console.log(doubleArray([1,1,0,5]));