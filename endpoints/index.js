startEndpoints = require("./start");
gameEndpoints = require("./game");
searchEndpoints = require("./search");
createEndpoints = require("./create");
joinEndpoints = require("./create");

module.exports = {
  start: startEndpoints,
  game: gameEndpoints,
  search: searchEndpoints,
  create: createEndpoints,
  join: joinEndpoints,
};
