gameEndpoints = require("./endpoints/game");

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

const checkIfPlayerHasNoStones = (arrayOfStones) => {
  for (let i = 0; i < arrayOfStones.length - 1; i++) {
    if (arrayOfStones[i] !== 0) {
      return false;
    }
  }
  return true;
};

const kickUnresponsivePlayers = (games) => {
  for (let i = 0; i < games.length; i++) {
    if (games[i]) {
      Object.values(games[i].players).forEach((p) => {
        if (new Date() - p.last_ping >= 20000) {
          gameEndpoints.delete(p.player_id, games[i].game_id, games);
        }
      });
    }
  }
};

module.exports = {
  checkIfPlayerIsInGame,
  checkIfPlayerHasNoStones,
  kickUnresponsivePlayers,
};
