helperFunctions = require("../../helperFunctions");

const postCreate = (playerId, games) => {
  if (!helperFunctions.checkIfPlayerIsInGame(playerId, games)) {
    return {};
  }
  let game = {
    players: [
      {
        player_id: playerId,
      },
    ],
    state: [],
    game_id: games.length,
    in_progress: false,
  };
  games.push(game);

  return { game: game };
};

module.exports = {
  postCreate,
};
