let calculation = localStorage.getItem('calculation') || '';

// 7g
function updateCalculation(value) {
  calculation += value;
  console.log(calculation);
  displayCalculation();
  // 8h adding localStorage
  localStorage.setItem('calculation', calculation);
};

// 9j dom used to display calculation
function displayCalculation() {
  document.querySelector('.js-calculate').innerHTML = calculation
}