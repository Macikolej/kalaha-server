// TODO: MAYBE REFACTOR TO DENO?

const express = require("express");
const cors = require("cors");
const uuid = require("uuid");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

helperFunctions = require("./helperFunctions");
const { game, search, create, start, join } = require("./endpoints");

let games = [];

app.post("/session", (_, res) => {
  res.json({ player_id: uuid.v4() });
});

app.get("/game", (req, res) => {
  res.json(game.get(parseInt(req.body.game_id), games)); // TODO: HANDLE ERRORS
});

app.post("/search", (req, res) => {
  res.json(search.post(req.body.player_id, games)); // TODO: HANDLE ERRORS
});

app.post("/create", (req, res) => {
  res.json(create.post(req.body.player_id, games)); // TODO: HANDLE ERRORS
});

app.post("/start", (req, res) => {
  res.json(start.post(parseInt(req.body.game_id), games)); // TODO: HANDLE ERRORS
});

app.post("/join", (req, res) => {
  res.json(join.post(req.body.player_id, parseInt(req.body.game_id), games)); // TODO: HANDLE ERRORS
});
