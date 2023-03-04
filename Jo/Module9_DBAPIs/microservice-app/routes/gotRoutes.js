const express = require("express");
const router = express.Router();
const Controllers = require("../controllers/gotController");

router.get('/houses', (req, res) => {
    Controllers.gotController.getHouses(res);
})

router.get('/books', (req, res) => {
    Controllers.gotController.getBooks(res);
})

router.get('/randombook', (req, res) => {
    Controllers.gotController.getRandomBook(res);
})

router.get('/randomcharacter', (req, res) => {
    Controllers.gotController.getRandomCharacter(res);
})

module.exports = router;