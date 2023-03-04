let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

router.get('/', (req, res) => {
    console.log('get request comments')
Controllers.commentController.getComments(res);
})

router.post('/create', (req, res) => {
    console.log('post request comments')
Controllers.commentController.createComment(req.body, res)
})
module.exports = router;