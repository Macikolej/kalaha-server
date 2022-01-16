helperFunctions = require("../../helperFunctions");

const postMove = (move, playerId, gameId, games) => {
  if (gameId < games.length && games[gameId] && games[gameId].in_progress) {
    game = games[gameId];
    if (game.players[playerId] && game.moves_next === playerId) {
      let playerState = {};
      let enemyState = {};
      if (game.players[playerId].is_first_player) {
        playerState = game.state.first_player_holes;
        enemyState = game.state.second_player_holes;
      } else {
        playerState = game.state.second_player_holes;
        enemyState = game.state.first_player_holes;
      }
      let index = move + 1;
      let amountOfMoves = playerState[move];
      playerState[move] = 0;
      while (amountOfMoves !== 0) {
        while (index < playerState.length && amountOfMoves !== 0) {
          playerState[index] += 1;
          index++;
          amountOfMoves--;
        }
        index = 0;
        while (index < enemyState.length && amountOfMoves !== 0) {
          enemyState[index] += 1;
          index++;
          amountOfMoves--;
        }
        index = 0;
      }
      if (game.players[playerId].is_first_player) {
        game.moves_next = Object.keys(game.players)[1];
        return {
          game: {
            ...game,
            state: {
              player_holes: game.state.first_player_holes,
              enemy_holes: game.state.second_player_holes,
            },
          },
        };
      } else {
        game.moves_next = Object.keys(game.players)[0];
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
  postMove,
};
