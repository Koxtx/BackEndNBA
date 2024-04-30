const router = require("express").Router();
const mongoose = require("mongoose");
const teamsSchema = require("../../../model/teams.schema");
const Teams = mongoose.model("teams", teamsSchema);

router.get("/", (req, res) => {
  Teams.find()
    .then((t) => res.status(200).json(t))
    .catch((err) => console.error(err));
});

module.exports = router;
