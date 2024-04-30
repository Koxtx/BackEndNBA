const schema = require("mongoose").Schema;

const teamsSchema = schema({
  name: String,
  club: String,
  conference: String,
  liked: { type: Boolean, default: false },
  logo: String,
});

module.exports = teamsSchema;
