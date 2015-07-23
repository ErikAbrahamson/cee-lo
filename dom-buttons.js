// Reset button
  var reset = document.getElementById('reset');
  reset.addEventListener('click', function() {
    ceeLo.reset();
    ceeLo.roll(computer);
    console.log('Game has been reset!');
  });

// Compare button
var compare = document.getElementById('compare');
compare.addEventListener('click', function() {
  ceeLo.compare();
  if (player.length > 0) {
    ceeLo.displayDice(computer, computerBox);
    console.log('Rolls have been compared!');
  } else {
    console.log('You have not rolled yet.');
  }
});

// Roll button
var roll = document.getElementById('roll');
roll.addEventListener('click', function() {
  ceeLo.roll(player);
  ceeLo.displayDice(player, playerBox);
});

// DOM variables

var playerBox = document.getElementById('player-hand');
var computerBox = document.getElementById('computer-hand');
var p = document.createElement('p');
var textnode;
