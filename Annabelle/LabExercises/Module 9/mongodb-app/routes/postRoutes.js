let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

router.get('/', (req, res) => {
console.log('get request')
Controllers.postController.getPosts(res);
})

router.post('/create', (req, res) => {
console.log('post request')
Controllers.postController.createPost(req.body, res)
})
module.exports = router;