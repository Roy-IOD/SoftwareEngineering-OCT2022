let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

router.get('/', (req, res) => {
    Controllers.userController.getUsers(res);
})

router.post('/', (req, res) => {
    Controllers.userController.createUser(req.body, res)
})

router.put('/:id', (req, res) => {
    Controllers.userController.updateUser(req.body, res)
})

router.delete('/:id', (req, res) => {
    Controllers.userController.deleteUser(req.body, res)
})


module.exports = router;