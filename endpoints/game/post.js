helperFunctions = require("../../helperFunctions");

const postGame = (playerId, gameId, games) => {
  if (gameId < games.length && games[gameId]) {
    let game = games[gameId];
    if (game.players[playerId] && game.players[playerId].is_first_player) {
      return {
        game: {
          ...game,
          state: {
            player_holes: game.state.first_player_holes,
            enemy_holes: game.state.second_player_holes,
          },
        },
      };
    } else if (game.players[playerId]) {
      return {
        game: {
          ...game,
          state: {
            player_holes: game.state.second_player_holes,
            enemy_holes: game.state.first_player_holes,
          },
        },
      };
    }
  }
  return {};
};

module.exports = {
  postGame,
};
