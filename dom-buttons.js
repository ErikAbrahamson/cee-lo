// Reset button
var reset = document.getElementById('reset');
reset.addEventListener('click', function() {
  ceeLo.reset();
  console.log('Game has been reset!');
});

// Compare button
var compare = document.getElementById('compare');
compare.addEventListener('click', function() {
  ceeLo.compare();
  console.log('Rolls have been compared!');
});


