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

// 11g, 11h
let valueAddOne = [];

function addOne(array) {
  for (let i = 0; i <= array.length-1; i++) {
    const num = array[i];
    valueAddOne.push(num+1);
  }
  return valueAddOne;
}
console.log(addOne([1,2,3]));

// 11i
let valueAddNum = [];

function addNum(array, num) {
  for (let j = 0; j <= array.length-1; j++) {
    const value = array[j];
    valueAddNum.push(value+num);
  }
  return valueAddNum;
}
console.log(addNum([1,2,3], 2));

// 11j
let arrayTotal = [];

function addArrays(array1, array2) {
  for (let i = 0; i <= array1.length-1; i++) {
    const index1 = array1[i];
    const index2 = array2[i];
    arrayTotal.push(index1+index2);
  }
  return arrayTotal;
}
console.log(addArrays([1,1,2], [1,1,3]));

// 11k
function countPositive(nums) {
  let counter = 0;
  for (let i = 0; i <= nums.length-1; i++) {
    if (nums[i]>0) {
      counter++;
    }
  }
  return counter;
}
console.log(countPositive([1,-3,5,3]));

// 11l
function minMax(nums) {
  const object = {min:nums[0], max: nums[0]};
  for (i=0; i<=nums.length-1; i++) {
    let value = nums[i];
  }
}