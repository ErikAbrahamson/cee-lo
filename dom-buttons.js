// Reset button
  var reset = document.getElementById('reset');
  reset.addEventListener('click', function() {
    ceeLo.reset();
  });

// Compare button
var compare = document.getElementById('compare');
compare.addEventListener('click', function() {
  ceeLo.compare();
  if (player.length > 0) {
    console.log('Rolls have been compared!');
  } else {
    console.log('You have not rolled yet.');
  }
});

// Roll button
var roll = document.getElementById('roll');
roll.addEventListener('click', function() {
  ceeLo.roll(player);
});

// DOM variables

var playerBox = document.getElementById('player-hand');
var computerBox = document.getElementById('computer-hand');
var p = document.createElement('p');
var textnode;

