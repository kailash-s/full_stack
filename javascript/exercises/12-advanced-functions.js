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

// 12g, 12h
let messages = 0;
function isClicked(param = 0) {
  if (messages+param >= 0) {
    messages += param;
  } else {
    messages = 0;
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