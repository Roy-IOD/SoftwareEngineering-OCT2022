const express = require("express");

const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.commentController.getComments(res);
});

router.post("/create", (req, res) => {
  Controllers.commentController.createComment(req.body, res);
});

module.exports = router;
