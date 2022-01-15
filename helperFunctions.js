const getGame = (gameId, games) => {
  for (let i = 0; i < games.length; i++) {
    if (games[i].game_id === gameId) {
      return games[i];
    }
  }
};

const checkIfPlayerIsInGame = (playerId, games) => {
  for (let i = 0; i < games.length; i++) {
    for (let j = 0; j < games[i].players.length; j++) {
      if (games[i].players[j].player_id === playerId) {
        return false;
      }
    }
  }
  return true;
};

module.exports = {
  getGame,
  checkIfPlayerIsInGame,
};
