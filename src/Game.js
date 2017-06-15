function Game(player1, player2) {
  this.turns = []
  this.player1 = player1
  this.player2 = player2
}

Game.prototype.turn = function(choice) {
  if (this.turns.length === 0) {
    this.player1.choices.push(choice)
    this.turns.push(1)
  } else if (Math.abs(this.turns.length % 2) == 1){
    this.player2.choices.push(choice)
    this.turns.push(this.turns[this.turns.length - 1] + 1)
  } else {
    this.player1.choices.push(choice)
    this.turns.push(this.turns[this.turns.length - 1] + 1)
  }
}
