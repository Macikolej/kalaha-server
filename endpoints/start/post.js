helperFunctions = require("../../helperFunctions");

const postStart = (gameId, games) => {
  if (gameId < games.length) {
    let game = helperFunctions.getGame(parseInt(gameId), games);
    if (game.players.length === 2) {
      game.in_progress = true;
      games[game.game_id] = game;
      return { game: game };
    }
  }
  return {};
};

module.exports = {
  postStart,
};
