const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
  {
    username: { type: String, required: true },
    type: { type: String, required: true },
    weight: { type: Number, required: true },
    sets: { type: Number, required: true },
    reps: { type: Number, required: true },
    duration: { type: Number, required: true },
    distance: { type: Number, required: false },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
