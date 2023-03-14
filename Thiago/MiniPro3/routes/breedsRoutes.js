const express = require("express");
const router = express.Router();
const Controllers = require("../controllers/breedsController");

router.get("/breedslist", (req, res) => {
  Controllers.breedsController.getBreeds(res);
});

router.post("/create", (req, res) => {
  Controllers.breedsController.createBreed(req.body, res);
});

router.put("/:id", (req, res) => {
  Controllers.breedsController.updateBreed(req, res);
});

router.delete("/:id", (req, res) => {
  Controllers.breedsController.deleteBreed(req, res);
});

router.get("/randombreeds", (req, res) => {
  Controllers.breedsController.getRandomBreeds(res);
});

module.exports = router;
