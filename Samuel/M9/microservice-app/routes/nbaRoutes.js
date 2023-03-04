const express = require("express");
const router = express.Router();
const Controllers = require("../controllers/nbaController");

router.get("/teams", (req, res) => {
  Controllers.gotController.getTeams(res);
});

router.get("/city", (req, res) => {
  Controllers.gotController.getCity(res);
});

module.exports = router;
