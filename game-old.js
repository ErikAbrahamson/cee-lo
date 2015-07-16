console.log('Welcome to Cee-Lo');



var die = 0;
var player1 = [], computer = [];
roll(computer);
roll(player1);

function sum(array) {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    count = count + array[i];
  }
  return count;
}

var ceeLo = {
  rollFor: function roll(player) {
    for (var i = 0; i < 3; i++) {
      die = Math.ceil(Math.random() * 6);
      player.push(die);
    }
      console.log(player);
  },

  compare: function compare() {
    if (sum(player1) > sum(computer)) {
      console.log('player1 wins!', player1);
    } else if (sum(computer) > sum(player1)){
      console.log('computer wins :(', computer);
    }
  }
};
