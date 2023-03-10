const express = require("express");

const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.standingsController.getStandings(res);
});

router.put("/:id", (req, res) => {
  Controllers.standingsController.updateStandings(req, res);
});

module.exports = router;
