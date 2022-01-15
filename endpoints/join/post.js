helperFunctions = require("../../helperFunctions");

const postJoin = (playerId, gameId, games) => {
  if (gameId < games.length) {
    let game = helperFunctions.getGame(parseInt(gameId), games);
    if (game.players.length === 1) {
      game.players.push({
        player_id: playerId,
      });
      return { game: game };
    }
  }
  return {};
};

module.exports = {
  postJoin,
};
