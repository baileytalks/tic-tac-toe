describe('Game', function() {

  var game = new Game('player1', 'player2');

  it('instansiating a game does not throw an error', function() {
    expect(game).toBeDefined()
  });

  it('a new game has an array of turns', function() {
    expect(game.turns).toBeDefined()
  });

  it('player1 is saved as a variable when passed as an arg', function() {
    expect(game.player1).toEqual('player1')
  });
});
