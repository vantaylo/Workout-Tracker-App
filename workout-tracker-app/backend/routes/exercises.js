const router = require("express").Router();
let Exercise = require("../models/exercise.model");

router.route("/").get((req, res) => {
  Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const type = req.body.type;
  const weight = req.body.weight;
  const sets = req.body.sets;
  const reps = req.body.reps;
  const duration = Number(req.body.duration);
  const distance = req.body.distance;
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({
    username,
    type,
    weight,
    sets,
    reps,
    duration,
    distance,
    date,
  });

  newExercise
    .save()
    .then(() => res.json("Exercise added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
