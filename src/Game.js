function Game(player1, player2) {
  this.turns = []
  this.player1 = player1
  this.player2 = player2
}

Game.prototype.turn = function(choice) {
  this.player1.choices.push(choice)
}
