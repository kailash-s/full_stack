// 6f, 6g, 6h and 6i
let randonNumber = Math.random();
console.log(randonNumber);
let result;
let guess = 'tails';

if (randonNumber<0.5) {
  result = 'heads';
} else {
  result = 'tails';
}

if (result===guess) {
  console.log('You win');
} else {
  console.log('You lose');
}