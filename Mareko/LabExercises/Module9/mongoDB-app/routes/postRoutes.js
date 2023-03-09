let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

router.get('/', (req, res) => {
    Controllers.postController.getPosts(res);
})

router.post('/', (req, res) => {
    Controllers.postController.createPost(req.body, res)
})

router.put('/:id', (req, res) => {
    Controllers.postController.updatePost(req.body, res)
})

router.delete('/:id', (req, res) => {
    Controllers.postController.deletePost(req.body, res)
})

module.exports = router;