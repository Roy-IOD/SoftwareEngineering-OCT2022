const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

//gets all houses
router.get('/houses', (req, res) => {
    Controllers.gotController.getHouses(res);
})

//searches for houses based on name, eg /api/got/houses/search?s=arr
router.get('/houses/search', (req, res) => {
    Controllers.gotController.searchHouses(req, res);
})

//gets all books, customises fields returned
router.get('/books', (req, res) => {
    Controllers.gotController.getBooks(res);
})

//gets a book at random, between 1 and 10
router.get('/randombook', (req, res) => {
    Controllers.gotController.getRandomBook(res);
})

//gets a character at random, between 1 and 2000
router.get('/randomcharacter', (req, res) => {
    Controllers.gotController.getRandomCharacter(res);
})

module.exports = router;