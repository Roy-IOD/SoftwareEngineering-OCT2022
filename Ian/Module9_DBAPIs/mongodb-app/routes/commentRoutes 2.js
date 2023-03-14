let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

router.get('/', (req, res) => {
    Controllers.commentController.getComments(res);
})

router.post('/create', (req, res) => {
    Controllers.commentController.createComment(req.body, res)
})

module.exports = router;