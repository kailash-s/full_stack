const randonNumber = Math.random();
let computerMove = '';
let result = '';

if (randonNumber>=0 && randonNumber<1/3) {
  computerMove = 'rock';
} else if (randonNumber>=1/3 && randonNumber<2/3) {
  computerMove = 'paper';
} else {
  computerMove = 'scissors';
}
console.log(computerMove);

function rockClicked() {
  const rock = document.getElementById('rock');
  console.log(rock);
  }