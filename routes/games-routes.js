const express = require("express");
const Game = require("../models/Game");
const Field = require("../models/Field");
const gamesRoutes = express.Router();
const mongoose = require("mongoose");

//-------- ROUTE GET ALL GAMES --------------

gamesRoutes.get("/", (req, res, next) => {
  //------On trouve le match-------//
  Game.find() // [ {field: '12341234234'}, {} ]
    .populate("field")
    .then((AllGamesFromDb) => {
      // console.log("AllGamesFromDb", AllGamesFromDb);
      res.json(AllGamesFromDb);
    })
    .catch((err) => console.log(err));
});

//-------- ROUTE CREATE A GAME --------------

gamesRoutes.post("/add", (req, res, next) => {
  // const organisator = req.session.currentUser;
  const {
    name,
    players,
    numPlayers,
    levelGame,
    field,
    mood,
    date,
    hour,
    typeGame,
  } = req.body;
  if (!req.session.currentUser) {
    res.status(400).json({ message: "you need to login" });
    return;
  }

  // const imgField = Field.findOne({ _id: field })
  //   .populate("field")
  //   .then((fieldObj) => {

  //     let imgField = { fieldObj };
  //     // console.log("imgField", imgField);
  //     res.json({ fieldObj });
  //   });

  //   console.log("imgField", imgField);

  const data = {
    name,
    players,
    numPlayers,
    levelGame,
    field,
    mood,
    date,
    hour,
    typeGame,
  };
  console.log("data game : ", data);
  console.log("organisator is : ", req.session.currentUser._id);

  // if (!name || !levelGame || !field || !mood) {
  //   res.status(400).json({ message: "informations missing" });
  //   return;
  // }

  const aNewGame = new Game({
    organisator: req.session.currentUser._id,
    name: name,
    players: players,
    numPlayers: numPlayers,
    levelGame: levelGame,
    mood: mood,
    hour: hour,
    date: date,
    typeGame: typeGame,
    field: field,
    // img: imgField,
    //image, -------> Mettre image du terrain.
  });

  aNewGame.save().then(() => {
    console.log("newGame", aNewGame);
    res.status(200).json(aNewGame);
  });
});

//-----ROUTE AFFICHER UN GAME--------

gamesRoutes.get("/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  if (!req.session.currentUser) {
    res.status(400).json({ message: "you need to login" });
    return;
  }

  Game.findById(req.params.id)
    .populate("field")
    .populate("players")
    .then((game) => {
      // console.log("GameDetail : ", game);
      res.status(200).json(game);
    })
    .catch((err) => console.log(err));
});

gamesRoutes.put("/edit/:id", (req, res, next) => {
  //console.log("editRoad")
  const organisator = req.session.currentUser;

  const { name, players, numPlayers, levelGame, field, mood, date, typeGame } =
    req.body;

  const data = {
    name,
    players,
    numPlayers,
    levelGame,
    field,
    mood,
    date,
    typeGame,
  };

  // console.log("data is : ", data);

  const id = req.params.id;
  //console.log(id);

  if (!req.session.currentUser) {
    res.status(401).json({ message: "You need to be logged in!" });
    return;
  }
  if (req.file) {
    data.avatar = req.file.path;
  }
  Game.findByIdAndUpdate({ _id: id }, data, { new: true })
    .then((newGame) => {
      console.log("new user", newGame);
      res.status(200).json(newGame);
    })
    .catch(next);
});

gamesRoutes.put("/:id/listPlayer", (req, res, next) => {
  if (!req.session.currentUser) {
    res.status(401).json({ message: "You need to be logged in!" });
    return;
  }
  // const players = req.body.players;
  console.log("IdUser", req.session.currentUser._id);

  //1.il faut Game.findById pour obtenir dans le game en 1er paramètre de la fonction de callback du .then(game => {})
  Game.findById({ _id: req.params.id }).then((game) => {
    game.players.push(req.session.currentUser._id);
    game.save().then((updateGame) => {
      res.status(200).json(updateGame);
    });
  })
  .catch(err=>console.log(err));

  //2. puis game.players.push() l'_id du user connecté

  //3. pour finalement le game.save()

  // Game.findByIdAndUpdate(
  //   { _id: req.params.id },
  //   players.push(req.session.currentUser._id)
  //   ,
  //   { new: true }
  // )
  //   .then((game) => {
  //     res.status(200).json(game);
  //   })
  //   .catch((err) => console.log(err));
});

gamesRoutes.get("/delete/:id", (req, res) => {
  const id = req.params.id;
  Game.findByIdAndDelete(id)
    .then(() => res.redirect("/"))
    .catch((error) => console.log(error));
});

module.exports = gamesRoutes;
