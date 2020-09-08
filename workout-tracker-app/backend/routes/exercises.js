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

router.route("/:id").get((req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => {
      exercise.username = req.body.username;
      exercise.type = req.body.type;
      exercise.weight = Number(req.body.weight);
      exercise.sets = Number(req.body.sets);
      exercise.reps = Number(req.body.reps);
      exercise.duration = Number(req.body.duration);
      exercise.distance = Number(req.body.distance);
      exercise.date = Date.parse(req.body.date);

      exercise
        .save()
        .then(() => res.json("Exercise updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
