const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ererciseSchema = new Schema(
  {
    username: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      required: true
    },
    date: {
      type: Date,
      required: true
    }
  },
  { timeStamps: true }
);

const Exercise = mongoose.model("Exercise", ererciseSchema);

module.exports = Exercise;
