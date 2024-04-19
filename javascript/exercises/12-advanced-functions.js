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

// 12c, 12d, 12p, 12q
const updateButton = document.querySelector('.js-finished-button');
updateButton.addEventListener('click', () => {
  updateButton.innerHTML = 'Loading...'
  setTimeout(() => {
    updateButton.innerHTML = 'Finished!';
  }, 1000);
});

// 12e, 12f, 12p, 12q
const addElement = document.querySelector('.js-add-button');
let timeoutId;
addElement.addEventListener('click', () => {
  clearTimeout(timeoutId);
  const addedElement = document.querySelector('.js-added');
  addedElement.innerHTML = 'Added';
  timeoutId = setTimeout(() => {
  addedElement.innerHTML = '';
  }, 2000);
});

// 12g, 12h, 12i, 12p
let messages = 0;
function isClicked(param = 0) {
  if (messages+param >= 0) {
    messages += param;
  }
  console.log(messages);
}
setInterval(() => {
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

// 12n
function removeEgg(foods) {
  return foods.filter((value) => value !== 'egg');
};
console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));

// 12o
function removeEgg(foods) {
  eggCounter = 0;
  return foods.filter((value) => {
    if (value === 'egg') {
      eggCounter++;
      return eggCounter > 2;
    }
    return true;
  });
};
console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));