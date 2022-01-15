helperFunctions = require("../../helperFunctions");

const getGame = (gameId, games) => {
  if (gameId < games.length) {
    let game = helperFunctions.getGame(gameId, games);
    return { game: game };
  }
  return {};
};

module.exports = {
  getGame,
};
