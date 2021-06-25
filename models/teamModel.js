var mongoose = require("mongoose");

var teamSchema = mongoose.Schema({
  Thref: String,
});

var teamModel = mongoose.model("teams", teamSchema);
module.exports = teamModel;
