// Youtube Subscribe Button
function buttonClicked() {
const buttonElement = document.querySelector('.js-subscribe-button');

if (buttonElement.innerText === 'Subscribe') {
  buttonElement.innerHTML = 'Subscribed';
} else {
  buttonElement.innerHTML = 'Subscribe';
}
}

// Amazon Shipping Calculator
function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');
  let cost = Number(inputElement.value);

  if (cost<40) {
    cost+=10;
  }

  document.querySelector('.js-total-cost').innerHTML = `$${cost}`;
}

function enterPressed(event) {
  if (event.key === 'Enter') {
    calculateTotal();
  }
}