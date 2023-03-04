let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

router.get('/', (req, res) => {
console.log('get users')
Controllers.userController.getUsers(res);
})

router.post('/create', (req, res) => {
    console.log('get posts(users)')
Controllers.userController.createUser(req.body, res)
})
module.exports = router;