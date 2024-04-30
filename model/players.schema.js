const schema = require("mongoose").Schema;

const playersSchema = schema({
  name: String,
  players: String,
});

module.exports = playersSchema;
