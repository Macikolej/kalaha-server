helperFunctions = require("../../helperFunctions");

const postJoin = (playerId, gameId, games) => {
  if (gameId < games.length && games[gameId]) {
    let game = games[gameId];
    if (Object.keys(game.players).length === 1) {
      game.players[playerId] = {
        player_id: playerId,
        is_first_player: false,
        last_ping: new Date(),
      };

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
  postJoin,
};
