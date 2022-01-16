helperFunctions = require("../../helperFunctions");

const deleteGame = (playerId, gameId, games) => {
  if (gameId < games.length) {
    let game = games[gameId];
    if (game.players[playerId]) {
      delete game.players[playerId];
      if (Object.keys(game.players).length === 0) {
        games[gameId] = null;
      } else {
        game.in_progress = false;
        game.state.first_player_holes = [0, 0, 0, 0, 0, 0, 0];
        game.state.second_player_holes = [0, 0, 0, 0, 0, 0, 0];
      }
      return { game: null };
    }
  }
  return {};
};

module.exports = {
  deleteGame,
};
