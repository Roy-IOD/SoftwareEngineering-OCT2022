const express = require("express");

const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.teamsController.getTeams(res);
});

router.post("/create", (req, res) => {
  Controllers.teamsController.createTeams(req.body, res);
});

router.put("/:id", (req, res) => {
  Controllers.teamsController.updateTeams(req, res);
});

router.delete("/:id", (req, res) => {
  Controllers.teamsController.deleteTeams(req, res);
});

module.exports = router;
