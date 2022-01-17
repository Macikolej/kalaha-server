helperFunctions = require("../../helperFunctions");

const postMove = (move, playerId, gameId, games) => {
  if (gameId < games.length && games[gameId] && games[gameId].in_progress) {
    game = games[gameId];
    if (game.players[playerId] && game.moves_next === playerId) {
      const isFirstPlayer = game.players[playerId].is_first_player;

      const playerState = isFirstPlayer
        ? game.state.first_player_holes
        : game.state.second_player_holes;
      const enemyState = isFirstPlayer
        ? game.state.second_player_holes
        : game.state.first_player_holes;

      game.moves_next = isFirstPlayer
        ? Object.keys(game.players)[1]
        : Object.keys(game.players)[0];

      let index = move + 1;
      let amountOfMoves = playerState[move];
      playerState[move] = 0;
      while (amountOfMoves !== 0) {
        while (index < playerState.length && amountOfMoves !== 0) {
          amountOfMoves--;
          if (
            amountOfMoves === 0 &&
            playerState[index] === 0 &&
            index !== playerState.length - 1 &&
            enemyState[enemyState.length - index - 2] !== 0
          ) {
            playerState[playerState.length - 1] +=
              enemyState[enemyState.length - index - 2] + 1;
            enemyState[enemyState.length - index - 2] = 0;
          } else {
            playerState[index] += 1;
          }
          index++;
        }
        if (amountOfMoves === 0) {
          if (index === playerState.length) {
            game.moves_next = playerId;
          } else if (helperFunctions.checkIfPlayerHasNoStones(enemyState)) {
            for (let i = 0; i < playerState.length - 1; i++) {
              playerState[playerState.length - 1] += playerState[i];
              playerState[i] = 0;
            }
            if (
              playerState[playerState.length - 1] ===
              enemyState[enemyState.length - 1]
            ) {
              game.result = "draw";
            } else {
              game.result =
                playerState[playerState.length - 1] >
                enemyState[enemyState.length - 1]
                  ? playerId
                  : game.moves_next;
            }
            game.in_progress = false;
          }
        }
        index = 0;
        while (index < enemyState.length && amountOfMoves !== 0) {
          enemyState[index] += 1;
          index++;
          amountOfMoves--;
        }
        index = 0;
      }

      return {
        game: {
          ...game,
          state: {
            player_holes: isFirstPlayer
              ? game.state.first_player_holes
              : game.state.second_player_holes,
            enemy_holes: isFirstPlayer
              ? game.state.second_player_holes
              : game.state.first_player_holes,
          },
        },
      };
    }
  }
  return {};
};

module.exports = {
  postMove,
};
