let calculation = localStorage.getItem('calculation') || '';

// 7g
function updateCalculation(value) {
  calculation += value;
  console.log(calculation);
  // 8h adding localStorage
  localStorage.setItem('calculation', calculation);
};