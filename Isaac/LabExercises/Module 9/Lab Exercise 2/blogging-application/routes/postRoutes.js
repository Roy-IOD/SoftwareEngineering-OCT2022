let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

router.get('/', (req, res) => {
      Controllers.userController.getPosts(res);
})

router.post('/create', (req, res) => {
      Controllers.userController.createPost(req.body, res)
})

module.exports = router;