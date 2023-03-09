const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get('/planets', (req, res) => {
    Controllers.swapiController.getPlanets(req, res);
})

router.get('/films', (req, res) => {
    Controllers.swapiController.getFilms(req, res);
})

router.get('/people', (req, res) => {
    Controllers.swapiController.getPeople(req, res);
})

module.exports = router;