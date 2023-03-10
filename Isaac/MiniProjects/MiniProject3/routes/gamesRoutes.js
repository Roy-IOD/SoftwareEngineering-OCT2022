const express = require("express");

const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.gamesController.getGames(res);
});

router.post("/create", (req, res) => {
  Controllers.gamesController.createGames(req.body, res);
});

router.put("/:id", (req, res) => {
  Controllers.gamesController.updateGames(req, res);
});

router.delete("/:id", (req, res) => {
  Controllers.gamesController.deleteGames(req, res);
});

module.exports = router;
