// 11a
const nums = [10, 20, 30];
nums[nums.length-1] = 99;

// 11b
function getLastValue(array) {
  const lastIndex = array.length-1;
  value = array[lastIndex];
  console.log(value);
}
getLastValue([1, 20, 22, 24, 5]);
getLastValue(['hi', 'hello', 'good']);

// 11c
function arraySwap(array) {
  const firstValue = array[0];
  const lastValue = array[array.length-1];
  array[0] = lastValue;
  array[array.length-1]=firstValue;
}
console.log(arraySwap([1, 20, 22, 24, 5]));

// 11d
for (let i = 0; i <= 10; i+=2) {
  console.log(i);
}

// 11e
for (let i = 5; i >=0; i--) {
  console.log(i);
}

// 11f
let i = 0;
while (i<=10) {
  console.log(i);
  i+=2;
}

let number = 5;
while (number>=0) {
  console.log(number);
  number--;
}

// 11g
let valueAddOne = [];

function addOne(array) {
  for (let i = 0; i <= array.length-1; i++) {
    const num = array[i];
    valueAddOne.push(num+1);
  }
  return valueAddOne;
}
console.log(addOne([1,2,3]));