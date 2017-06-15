function Game(player1, player2) {
  this.turns = []
  this.player1 = player1
  this.player2 = player2
}

Game.prototype.turn = function(choice) {
  if (isValidChoice(choice) & this.turns.length === 0) {
    this.player1.choices.push(choice)
    this.turns.push(1)
  } else if (isValidChoice(choice) & Math.abs(this.turns.length % 2) == 1){
    this.player2.choices.push(choice)
    this.turns.push(this.turns[this.turns.length - 1] + 1)
  } else if (isValidChoice(choice)) {
    this.player1.choices.push(choice)
    this.turns.push(this.turns[this.turns.length - 1] + 1)
  } else {
    return 'Not valid! Try again'
  }
}

function isValidChoice(choice) {
  const validChoices = ['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3']
  if (validChoices.includes(choice)) {
    return true
  } else {
    return false
  }
}
