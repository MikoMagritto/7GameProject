const express = require("express");
const Game = require("../models/Game");
const gamesRoutes = express.Router();


gamesRoutes.get("/", (req, res, next) => {
  Game.find()
    .then(AllGamesFromDb => {
      console.log("AllGamesFromDb", AllGamesFromDb)
      res.json(AllGamesFromDb);
    })
    .catch(err => console.log(err))
})

gamesRoutes.post("/add", (req, res, next) => {
  const organisator = req.session.currentUser;
  const {
    name, players, numPlayers, levelGame,
    field, mood, date, typeGame } = req.body;
  const data = {
    name, players, numPlayers, levelGame,
    field, mood, date, typeGame
  };
  console.log('data is : ', data);

  // if (!name || !levelGame || !field || !mood) {
  //   res.status(400).json({ message: "informations missing" });
  //   return;
  // }

  const aNewGame = new Game({
    organisator: req.session.currentUser,
    name: name,
    players: players,
    numPlayers: numPlayers,
    levelGame: levelGame,
    mood: mood,
    date: date,
    typeGame: typeGame,
    //field: field, ---------> mettre IdField.
    //image, -------> Mettre image du terrain.
  })

  aNewGame
    .save()
    .then(() => {
      console.log('newGame', aNewGame)
      res.status(200).json(aNewGame)
    })


})

gamesRoutes.put("/edit/:id", (req, res, next) => {
  //console.log("editRoad")
  const organisator = req.session.currentUser;

  const { name, players, numPlayers, levelGame, field, mood, date, typeGame } = req.body;

  const data = { name, players, numPlayers, levelGame, field, mood, date, typeGame };

  console.log('data is : ', data);

  const id = req.params.id;
  //console.log(id);

  if (!req.session.currentUser) {
    res.status(401).json({ message: "You need to be logged in!" });
    return;
  }
  if (req.file) {
    data.avatar = req.file.path;
  }
  Game.findByIdAndUpdate(
    { _id: id },
    data,
    { new: true }
  )
    .then((newGame) => {
      console.log("new user", newGame);
      res.status(200).json(newGame);
    })
    .catch(next);
});

gamesRoutes.get('/delete/:id', (req, res) => {
  const id = req.params.id;
  Game.findByIdAndDelete(id).then(() => res.redirect('/')).catch(error => console.log(error));
});

module.exports = gamesRoutes;