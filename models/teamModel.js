var mongoose = require("mongoose");

var teamSchema = mongoose.Schema({
  name: String,
});

var teamModel = mongoose.model("teams", teamSchema);
module.exports = teamModel;
