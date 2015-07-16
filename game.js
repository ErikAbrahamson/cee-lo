// This is our version of 'cee-lo'.

var player = [], computer = [];

var ceeLo = {
  reset: function() {
    player = [], computer = [];
    return console.log('Welcome to Cee-lo');
  },

  roll: function roll (player) {
    var die = 0;
    for (var i = 0; i < 3; i++) {
      die = Math.ceil(Math.random() * 6);
      player.push(die);
    }
  },

  compare: function() {
    var turn = 'Type ceeLo.reset() to play again';
    var sum = function(side) {
      var sideSum = 0;
      for (var i = 0; i < side.length; i++) {
        sideSum = sideSum + side[i];
      }
      return sideSum;
    };
    if (sum(player) > sum(computer)) {
      console.log('player wins!', player + ' > ' + computer + '\n' + turn);
    } else {
      console.log('computer wins :(', computer + ' > ' + player + '\n' + turn);
    }
  }
};
