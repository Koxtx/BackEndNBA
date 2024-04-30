const router = require("express").Router();
const mongoose = require("mongoose");
const PlayersSchema = require("../../../model/players.schema");
const Players = mongoose.model("players", PlayersSchema);

router.get("/", (req, res) => {
  Players.find()
    .then((t) => res.status(200).json(t))
    .catch((err) => console.error(err));
});

router.post("/add", (req, res) => {
  const body = req.body;
  // console.log(req.body);
  const newPlayers = new Players(body);
  newTodo
    .save()
    .then((t) => res.status(200).json(t))
    .catch((err) => console.log(err));
});

module.exports = router;
