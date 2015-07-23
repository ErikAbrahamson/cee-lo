
var player = [], computer = [];
var dieFace = [
  '&#x2680','&#x2681','&#x2682','&#x2683','&#x2684','&#x2685'
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
      die = Math.ceil(Math.random() * 6);
      player.push(die);
    }
    console.log('player has rolled ' + player);
  },

  compare: function() {
    var turn = 'Please press Reset to play again';
      var sum = function(side) {
        var sideSum = 0;
        for (var i = 0; i < side.length; i++) {
          sideSum = sideSum + side[i];
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

