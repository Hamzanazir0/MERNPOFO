var express = require("express");
var router = express.Router();

var teamModel = require("../models/teamModel");

/* GET home page. */
router.get("/", async (req, res, next) => {
  let team = await teamModel.find();
  console.log(team);
  return res.send(team);
});


//Insert a record
router.post("/", async (req, res) => {
  let team = new teamModel();
  team.name = req.body.name;
  await team.save();
  return res.send(team);
});

module.exports = router;
