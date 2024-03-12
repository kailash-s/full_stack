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

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  if (playerMove = 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie';
    } else if (computerMove === 'paper') {
      result = 'You lose';
    } else if (computerMove === 'scissors') {
      result = 'You win';
    }
    alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}.`);
  } else if (playerMove = 'paper') {
    if (computerMove === 'paper') {
      result = 'Tie';
    } else if (computerMove === 'scissors') {
      result = 'You lose';
    } else if (computerMove === 'rock') {
      result = 'You win';
    }
    alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}.`);
  } else if (playerMove = 'scissors') {
    if (computerMove === 'scissors') {
      result = 'Tie';
    } else if (computerMove === 'rock') {
      result = 'You lose';
    } else if (computerMove === 'paper') {
      result = 'You win';
    }
    alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}.`);
  }
 
}