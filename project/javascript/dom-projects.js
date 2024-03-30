// Youtube Subscribe Button
function buttonClicked() {
const buttonElement = document.querySelector('.js-subscribe-button');

if (buttonElement.innerText === 'Subscribe') {
  buttonElement.innerHTML = 'Subscribed';
  buttonElement.classList.add('is-subscribed');
} else {
  buttonElement.innerHTML = 'Subscribe';
  buttonElement.classList.remove('is-subscribed');
}
}

// Amazon Shipping Calculator
// 9g updated to show correct figure when binary numbers are affected
function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');
  let cost = Number(inputElement.value*100);

  // 10h adding error message if cost is less than 0
  if (cost<0) {
    document.querySelector('.js-total-cost').innerHTML = 'Error: cost cannot be less than $0';
    document.querySelector('.js-total-cost').classList.add('error-cost');
    return
  }

  if (cost<4000 && cost>0) {
    cost+=1000;
  } 
  document.querySelector('.js-total-cost').innerHTML = `$${cost/100}`;
}

function enterPressed(event) {
  if (event.key === 'Enter') {
    calculateTotal();
  }
}