const express = require("express");
const Game = require("../models/Game");
const gamesRoutes = express.Router();

gamesRoutes.post("/", (req, res, next) => {
  const organisator = req.session.currentUser;
  const {
    name, players, numPlayers, levelGame,
    field, mood, date, typeGame, image } = req.body;

  if (!name || !levelGame || !field || !mood || !date) {
    res.status(400).json({ message: "informations missing" });
    return;
  }

  const aNewGame = new Game({
    organisator: req.session.currentUser,
    name: name,
    players: players,
    numPlayers : numPlayers,
    levelGame: levelGame,
    field : field,
    mood:mood,
    date:date,
    typeGame,
    image,
  })

  aNewGame
  .save()
  .then(()=>{
    res.status(200).json(aNewGame)
  })


})

module.exports = gamesRoutes;