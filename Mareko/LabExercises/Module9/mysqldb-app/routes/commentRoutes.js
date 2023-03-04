const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get('/', (req, res) => {
    Controllers.commentController.getComments(res);
})

router.post('/', (req, res) => {
    Controllers.commentController.createComments(req.body, res)
})

module.exports = router;