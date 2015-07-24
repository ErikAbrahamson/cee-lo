// Initial game set-up
window.onload = function() {
  ceeLo.reset();
};
var player = [], computer = [];
var dice = [
  { face: '\u2680', value: 1 },
  { face: '\u2681', value: 2 },
  { face: '\u2682', value: 3 },
  { face: '\u2683', value: 4 },
  { face: '\u2684', value: 5 },
  { face: '\u2685', value: 6 }
  ];

// Create modular ceeLo functions
var ceeLo = {

  reset: function() {
    player = [];
    computer = [];
    console.log('Welcome to Cee-lo');
  },

  reroll: function(player) {
    var die = 0;
    for(var i = 0; i < 3; i++) {
      die = Math.ceil(Math.random() * dice.length - 1);
      player.push(dice[die]);
    }
  },

  roll: function(player) {
    ceeLo.reroll(computer);
    if (player === undefined || player.length === 0) {
      ceeLo.reroll(player);
      ceeLo.displayDice(player, playerBox);
    } else {
      player = [];
      computer = [];
      ceeLo.reroll(player);
      ceeLo.displayDice(player, playerBox);
      }
    },

  compare: function() {
    var sum = function(array) {
      var sideSum = 0;
      for (var i = 0; i < array.length; i++) {
        sideSum = sideSum + array[i].value;
      }
      ceeLo.displayDice(computer, computerBox);
      return sideSum;
    };
    if (sum(player) > sum(computer)) {
      console.log('Player wins');
    } else {
      console.log('Computer wins');
    }
  },

  displayDice: function(player, playerSide) {
    for (var i = 0; i < player.length; i++) {
      textnode = document.createTextNode(player[i].face);
      p.appendChild(textnode)
      playerSide.appendChild(p);
    }
  }
};

