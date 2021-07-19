const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema(
  {
    name: { type: String },

    organisator: {
      type: Schema.Types.ObjectId, ref: 'User',
    },

    players: [{
      type: Schema.Types.ObjectId, ref: 'User'
    }],

    numPlayers: {
      type: Number,
    },

    levelGame: {
      type: String,
      enum: ["Débutant", "Amateur", "Confirmé", "ProA", "ProB"],
    },

    field: {
      type: Schema.Types.ObjectId, ref: 'Field',
    },

    mood: {
      type: String,
      enum: ["Fun", "Competitive"],
    },

    date: { type: Date },

    typeGame: {
      type:String,
      enum: ["1x1","2x2","3x3","4x4","5x5"]
    },

    image:{
      type: Schema.Types.ObjectId, ref: 'Field',
    },

  }
)

const Game = mongoose.model('Game', gameSchema);
module.exports = Game;

// Model Game  :
// _id: idGame
// Organisateur : :  id_User,
// List of players : [ id_User,id_User], players: [ { type : Schema.Types.ObjectId, ref: 'User' } ]
// Nbre of players : String

// levelUsers: [ id_User,id_User],
// terrains: Id_Field,
// Mood:  [ Fun, Compétitive],
// Name of match : String,
// date:String,
// Type of match : [],
// image: idField.image,