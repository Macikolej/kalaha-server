helperFunctions = require("../../helperFunctions");

const postStart = (playerId, gameId, games) => {
  if (gameId < games.length && games[gameId]) {
    let game = games[gameId];
    if (Object.keys(game.players).length === 2 && game.players[playerId]) {
      game.in_progress = true;
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
  }
  return {};
};

module.exports = {
  postStart,
};
