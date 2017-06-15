describe('Game', function() {

  var game = new Game();

  it('instansiating a game does not throw an error', function() {
    expect(game).toBeDefined()
  });

  it('a new game has an array of turns', function() {
    expect(game.turns).toBeDefined()
  });
});
