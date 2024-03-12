let result = '';

function pickComputerMove() {
  const randonNumber = Math.random();
  let computerMove = '';
  if (randonNumber>=0 && randonNumber<1/3) {
  computerMove = 'rock';
  } else if (randonNumber>=1/3 && randonNumber<2/3) {
    computerMove = 'paper';
  } else {
    computerMove = 'scissors';
  }
  return computerMove;
}


function rockClicked() {
  const computerMove = pickComputerMove();
  if (computerMove === 'rock') {
    result = 'Tie';
  } else if (computerMove === 'paper') {
    result = 'You lose';
  } else if (computerMove === 'scissors') {
    result = 'You win';
  }
  alert(`You picked rock. Computer picked ${computerMove}. ${result}.`);
  }

function paperClicked() {
  const computerMove = pickComputerMove();
  if (computerMove === 'paper') {
    result = 'Tie';
  } else if (computerMove === 'scissors') {
    result = 'You lose';
  } else if (computerMove === 'rock') {
    result = 'You win';
  }
  alert(`You picked paper. Computer picked ${computerMove}. ${result}.`);
  }

function scissorsClicked() {
  const computerMove = pickComputerMove();
  if (computerMove === 'scissors') {
    result = 'Tie';
  } else if (computerMove === 'rock') {
    result = 'You lose';
  } else if (computerMove === 'paper') {
    result = 'You win';
  }
  alert(`You picked scissors. Computer picked ${computerMove}. ${result}.`);
  }