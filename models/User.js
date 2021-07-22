const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const userSchema = new Schema(
  {
    username: {
      type: String,
      // required: [true, "Pseudo is required."],
    },
    email: {
      type: String,
      // required: [true, "Email is required."],
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address."],
      lowercase: true,
    },
    passwordHash: {
      type: String,
      // required: [true, "Password is required."],
      minlength: 6,
    },
    height :{
      type: String,
      // required: [true, "Height is required."],
    },
    age :{
      type: Number,
      min : 18,
      // required: [true, "Age is required."],
    },
    level :{
      type: String,
      enum : ["Débutant","Amateur","Confirmé","ProA","ProB"],
    },
    avatar :{
      type: String,
      // required: true,
  },
  role :{
    type: String,
    enum : ["user","admin"]
  },
},
  {
    timestamps: true,
  }
);
const User = mongoose.model('User', userSchema);
module.exports = User;