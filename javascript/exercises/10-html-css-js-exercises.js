// 10c
console.log(document.querySelector('.js-test-button').classList.contains('js-test-button'));

// 10d, 10e, 10f
function isToggled(selector) {
  const button = document.querySelector(selector);

  if (button.classList.contains('is-toggled')) {
    button.classList.remove('is-toggled');
  } else {
    turnOffPreviousButton();
    button.classList.add('is-toggled');
  }
}

// 10g
function turnOffPreviousButton () {
  const previousButton = document.querySelector('.is-toggled');
  if (previousButton) {
    previousButton.classList.remove('is-toggled');
  }
}