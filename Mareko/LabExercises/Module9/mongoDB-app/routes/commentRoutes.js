let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

router.get('/', (req, res) => {
    Controllers.commentController.getComments(res);
})

router.post('/', (req, res) => {
    Controllers.commentController.createComment(req.body, res)
})

router.put('/:id', (req, res) => {
    Controllers.commentController.updateComment(req.body, res)
})

router.delete('/:id', (req, res) => {
    Controllers.commentController.deleteComment(req.body, res)
})

module.exports = router;