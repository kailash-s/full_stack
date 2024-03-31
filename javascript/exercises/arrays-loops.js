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
  array[array.length-1] = firstValue;
  const lastValue = array[array.length-1];
  array[0] = lastValue;
}
console.log(arraySwap([1, 20, 22, 24, 5]));