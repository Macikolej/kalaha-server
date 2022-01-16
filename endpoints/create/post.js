helperFunctions = require("../../helperFunctions");

const postCreate = (playerId, games) => {
  if (helperFunctions.checkIfPlayerIsInGame(playerId, games)) {
    return {};
  }
  let game = {
    players: {
      [playerId]: {
        player_id: playerId,
        is_first_player: true,
      },
    },
    state: {
      first_player_holes: [6, 6, 6, 6, 6, 6, 0],
      second_player_holes: [6, 6, 6, 6, 6, 6, 0],
    },
    game_id: games.length,
    moves_next: playerId,
    in_progress: false,
  };
  games.push(game);

  return {
    game: {
      ...game,
      state: {
        player_holes: game.state.first_player_holes,
        enemy_holes: game.state.second_player_holes,
      },
    },
  };
};

module.exports = {
  postCreate,
};
