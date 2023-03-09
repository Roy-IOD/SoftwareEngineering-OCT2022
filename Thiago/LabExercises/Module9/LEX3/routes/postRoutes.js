const express = require("express");

const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.postController.getPosts(res);
});

router.post("/create", (req, res) => {
  Controllers.postController.createPost(req.body, res);
});

module.exports = router;
