const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for workout"
  },
  type: {
    type: String,
    trim: true,
    required: "Enter a type of workout"
  },
  duration: {
    type: Number,
    required: "Enter a duration"
  },
  weight: {
    type: Number,
    required: "Enter a weight"
  },
  reps: {
    type: Number,
    required: "Enter how many reps"
  },
  sets: {
    type: Number,
    required: "Enter how many sets"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
