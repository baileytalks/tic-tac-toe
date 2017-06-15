describe('Game', function() {
  var player1 = new Player();
  var player2 = new Player();
  var game = new Game(player1, player2);

  it('instansiating a game does not throw an error', function() {
    expect(game).toBeDefined()
  });

  it('a new game has an array of turns', function() {
    expect(game.turns).toBeDefined()
  });

  it('player1 is saved as a variable when passed as an arg', function() {
    expect(game.player1).toEqual(player1)
  });

  it('player1 can take a turn, pick a square and have it saved', function() {
    game.turn('A1')
    expect(game.player1.choices.length).toEqual(1)
  });

  it('player2 takes the next turn and has their choice saved', function() {
    game.turn('A2')
    expect(game.player2.choices.length).toEqual(1)
  });
});
