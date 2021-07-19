const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const fieldSchema = new Schema(
  {
    name: { type: String },
    longitude: { type: Number },
    lattitude:{type: Number},
    img:{ type: String },
    availibility:{ type: Date }
  },
  {
    timestamps: true,
  }
);
const field = mongoose.model('Field', fieldSchema);
module.exports = field;
  