const router = require("express").Router();
const apiTeams = require("./teams");
const apiPlayers = require("./players");

router.use("/teams", apiTeams);
router.use("/players", apiPlayers);

module.exports = router;
