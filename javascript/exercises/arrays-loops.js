// PART ONE
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
  const object = {min:nums[0], max:nums[0]};
  for (i=0; i<=nums.length-1; i++) {
    let value = nums[i];
    if (value<object.min) {
      object.min = value;
    } else if (value>object.max) {
      object.max = value;
    }
  }
  return object;
}
console.log(minMax([3]));

//11n
function countWords(words) {
  let object = {};
  for (i=0; i<=words.length-1; i++) {
    if (object[words[i]]>0) {
      object[words[i]]++;
    } else {
      object[words[i]] = 1;
    }
  }
  return object;
}
console.log(countWords(['apple','grape','apple','apple']));

// PART TWO
// 11o, 11p
const stringArray = ['hello', 'world', 'search', 'good', 'search'];
let index = -1;
for (let i=0; i<=stringArray.length-1; i++) {
  if (stringArray[i] === 'search') {
    index = i;
    break;
  }
}
if (index === -1) {
  console.log('-1');
} else {
  console.log(index);
}

// 11q
function findIndex(array, word) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      return i;
    }
  }
  return -1;
}
findIndex(['red', 'green', 'blue', 'green'], 'green');
findIndex(['red', 'blue', 'yellow'], 'green');

// 11r, 11s
function removeEgg(foods) {
  const result = [];
  let eggCounter=0;
  for (let i = 0; i<=foods.length-1; i++) {
    if (foods[i] === 'egg' && eggCounter<2) {
      eggCounter++;
      continue;
    } else {
      result.push(foods[i]);
    }
  }
  return result;
}
console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));

// 11t
function removeEgg(foods) {
  const result = [];
  let eggCounter=0;
  for (let i = foods.length-1; i>=0; i--) {
    if (foods[i] === 'egg' && eggCounter<2) {
      eggCounter++;
      continue;
    } else {
      result.push(foods[i]);
    }
  }
  return result.reverse();
}
console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));

// 11v
for (let i=1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

// 11w
function unique(array) {
  const array2 = [];
  for (let i = 0; i < array.length; i++) {
    let word = array[i];
    if (findIndex(array2, word) === -1) {
      array2.push(word);
    }
  }
  return array2;
}
console.log(unique(['green', 'red', 'blue', 'red']));