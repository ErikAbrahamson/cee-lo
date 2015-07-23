
var player = [], computer = [];
var dice = [
  { face: '&#x2680', value: 1 },
  { face: '&#x2681', value: 2 },
  { face: '&#x2682', value: 3 },
  { face: '&#x2683', value: 4 },
  { face: '&#x2684', value: 5 },
  { face: '&#x2685', value: 6 }
  ];

// Create modular ceeLo functions
var ceeLo = {
  reset: function() {
    player = [];
    computer = [];
    return console.log('Welcome to Cee-lo');
  },

  roll: function(player) {
    var die = 0;
    for (var i = 0; i < 3; i++) {
      die = Math.ceil(Math.random() * dice.length - 1);
      player.push(dice[die]);
    }
    console.log('player has rolled ' + player);
  },

  compare: function() {
    var turn = 'Please press Reset to play again';
      var sum = function(array) {
        var sideSum = 0;
        for (var i = 0; i < array.length; i++) {
          sideSum = sideSum + array[i].value;
        }
        return sideSum;
      };
      if (sum(player) > sum(computer)) {
        console.log('player wins!', player + ' ' + computer + '\n' + turn);
      } else {
        console.log('computer wins :(', computer + ' ' + player + '\n' + turn);
      }
  }
};
//Initialize game
ceeLo.reset();

