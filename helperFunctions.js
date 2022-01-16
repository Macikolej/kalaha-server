const checkIfPlayerIsInGame = (playerId, games) => {
  for (let i = 0; i < games.length; i++) {
    if (games[i]) {
      for (let j = 0; j < games[i].players.length; j++) {
        if (games[i].players[j][player_id]) {
          return true;
        }
      }
    }
  }
  return false;
};

module.exports = {
  checkIfPlayerIsInGame,
};
