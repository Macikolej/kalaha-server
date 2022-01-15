helperFunctions = require("../../helperFunctions");

const postSearch = (playerId, games) => {
  if (helperFunctions.checkIfPlayerIsInGame(playerId, games)) {
    for (let i = 0; i < games.length; i++) {
      if (games[i].players.length === 1) {
        games[i].players.push({ player_id: playerId });
        return games[i];
      }
    }
  }
  return {};
};

module.exports = {
  postSearch,
};
