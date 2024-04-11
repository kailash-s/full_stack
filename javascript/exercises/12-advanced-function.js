// 12a
const add = function() {
  console.log(2+3);
};
add();
add();

// 12b
function runTwice(fun) {
  fun();
  fun();
}
runTwice(function() {
  console.log('12b');
})
runTwice(add);

// 12c
function hasFinished() {
  setTimeout(function() {
    document.querySelector('.js-finished-button').innerHTML = 'Finished!';
  }, 1000);
}