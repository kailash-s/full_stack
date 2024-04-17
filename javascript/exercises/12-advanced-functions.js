// PART ONE 
// 12a
const add = function() {
  console.log(2+3);
};
add();
add();

// 12b
function runTwice(fun) {
  fun();
  fun();
}
runTwice(function() {
  console.log('12b');
})
runTwice(add);

// 12c, 12d
function hasFinished() {
  const updateButton = document.querySelector('.js-finished-button');
  updateButton.innerHTML = 'Loading...'
  setTimeout(function() {
    updateButton.innerHTML = 'Finished!';
  }, 1000);
}

// 12e, 12f
let timeoutId;
function hasAdded() {
  clearTimeout(timeoutId);

  const addedElement = document.querySelector('.js-added');
  addedElement.innerHTML = 'Added';
  timeoutId = setTimeout(function() {
    addedElement.innerHTML = '';
  }, 2000);
}

// 12g, 12h, 12i
let messages = 0;
function isClicked(param = 0) {
  if (messages+param >= 0) {
    messages += param;
  }
  console.log(messages);
}
setInterval(function() {
  if (document.title === 'Document' && messages > 0) {
    document.title = `(${messages}) New messages`;
  } else {
    document.title = 'Document';
  }
}, 1000);
isClicked();

// PART TWO
// 12j, 12k
const multiply = (param1, param2) => param1 * param2;
console.log(multiply(2,3));
console.log(multiply(7,10));

// 12l
function countPositive(nums) {
  let counter = 0;
  nums.forEach(function(value) {
    if (value >= 0) {
      counter++;
    }
  });
  return counter;
};
console.log(countPositive([1,-3,5]));
console.log(countPositive([-2,3,-5,7,10]));

// 12m
function addNum(array, num) {
  return array.map(value => value + num);
};
console.log(addNum([1,2,3], 3));
console.log(addNum([-2,-1,0,99], 2));