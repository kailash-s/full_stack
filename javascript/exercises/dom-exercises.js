// 9a
console.log(document.querySelector('button'));

// 9b
function buttonClicked() {
  document.querySelector('.js-done')
    .innerHTML = '9b done!';
}

// 9c NOT FINISHED
function choiceMade() {
  document.querySelector('.js-choice').innerHTML = `You chose: ${document.querySelector('button').innerHTML}`
}