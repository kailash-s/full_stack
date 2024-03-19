let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0
};

function playGame(guess) {
  let randonNumber = Math.random();
  console.log(randonNumber);
  let result = randonNumber<0.5 ? 'heads' : 'tails';
  result===guess ? console.log('You win') : console.log('You lose');
  result===guess ? score.wins++ : score.losses++;
  console.log(`wins: ${score.wins}, losses: ${score.losses}`);
  localStorage.setItem('score', JSON.stringify(score));
};