// 9a
console.log(document.querySelector('button'));

// 9b
function buttonClicked() {
  document.querySelector('.js-done')
    .innerHTML = '9b done!';
}

// 9c
function choiceMade(choice) {
  document.querySelector('.js-choice').innerHTML = `You chose: ${choice}`;
}

// 9d
function textInput() {
  const inputElement = document.querySelector('.js-text');
  document.querySelector('.js-input').innerHTML = `Your name is ${inputElement.value}`;
}

// 9e
function enterPressed(event) {
  if (event.key === 'Enter') {
    textInput();
  }
}

// 9h
function upPressed() {
    const inputElement = document.querySelector('.js-text2');
    document.querySelector('.js-input2').innerHTML = `${inputElement.value}`;
}