describe('Player', function() {

  var player = new Player();

  it('instansiating a player does not throw an error', function() {
    expect(player).toBeDefined()
  });

  it('each player has an array to contain their choices', function() {
    expect(player.choices).toBeDefined()
  });
});
