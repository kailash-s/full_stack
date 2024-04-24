let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

let isAutoPlaying = false;
let intervalId;

const autoPlayElement = document.querySelector('.js-autoplay')

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
    autoPlayElement.innerHTML = 'Stop';
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
    autoPlayElement.innerHTML = 'Auto play';
  }
};

autoPlayElement.addEventListener('click', autoPlay);

document.querySelector('.js-rock-button').addEventListener('click', () => {
  playGame('rock');
});
document.querySelector('.js-paper-button').addEventListener('click', () => {
  playGame('paper');
});
document.querySelector('.js-scissors-button').addEventListener('click', () => {
  playGame('scissors');
});

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    }
    
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You win.';
    }
  }
  document.querySelector('.js-moves')
    .innerHTML = `You <img class="move-icon" src="images/${playerMove}-emoji.png"> - <img class="move-icon" src="images/${computerMove}-emoji.png"> Computer`;

  if (result === 'You win.') {
    score.wins+=1;
  } else if (result === 'You lose.') {
    score.losses+=1;
  } else if (result === 'Tie.') {
    score.ties+=1;
  }
  document.querySelector('.js-result')
    .innerHTML = result;

  // variables are temporary and deleted when we refresh the page so we use local storage to keep/remember it
  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();
}

function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}

function resetScore() {
  score.wins=0;
  score.losses=0;
  score.ties=0;
  localStorage.removeItem('score');
  updateScoreElement();
}

function confirmReset() {
  const confirmElement = document.querySelector('.js-confirm');
  confirmElement.innerHTML = `Are you sure you want to reset the score? <button class="js-yes yes-button">Yes</button> <button class="js-no no-button">No</button>`;
  document.querySelector('.js-yes').addEventListener('click', () => {
    resetScore();
    confirmElement.innerHTML = '';
  });
  document.querySelector('.js-no').addEventListener('click', () => {
    confirmElement.innerHTML = '';
  });
};

document.querySelector('.js-reset').addEventListener('click', () => {
  confirmReset();
});

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');
  } else if (event.key === 'a') {
    autoPlay();
  } else if (event.key === 'Backspace') {
    confirmReset();
  }
});