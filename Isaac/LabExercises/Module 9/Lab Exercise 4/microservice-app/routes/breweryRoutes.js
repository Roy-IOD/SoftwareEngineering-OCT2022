const express = require("express");
const router = express.Router();
const Controllers = require("../controllers/breweryController");

router.get("/brewerieslist", (req, res) => {
  Controllers.breweryController.getBreweries(res);
});

router.get("/randombrewery", (req, res) => {
  Controllers.breweryController.getRandomBrewery(res);
});

module.exports = router;
