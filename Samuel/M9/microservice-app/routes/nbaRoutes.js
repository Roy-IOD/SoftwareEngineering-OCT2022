const express = require("express");
const router = express.Router();
const Controllers = require("../controllers/nbaController");

router.get("/teams", (req, res) => {
  Controllers.nbaController.getTeams(res);
});

router.get("/city", (req, res) => {
  Controllers.nbaController.getCity(res);
});

router.get("/randomteam", (req, res) => {
  Controllers.nbaController.getRandomTeam(res);
});

module.exports = router;
