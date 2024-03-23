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
// 9g updated to show correct figure when binary numbers are affected
function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');
  let cost = Number(inputElement.value*100);

  if (cost<4000) {
    cost+=1000;
  }

  document.querySelector('.js-total-cost').innerHTML = `$${cost/100}`;
}

function enterPressed(event) {
  if (event.key === 'Enter') {
    calculateTotal();
  }
}