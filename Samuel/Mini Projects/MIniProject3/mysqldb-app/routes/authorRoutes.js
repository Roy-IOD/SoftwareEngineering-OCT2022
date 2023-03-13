const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.authorController.getAuthors(res);
});

module.exports = router;
