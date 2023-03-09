const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get('/', (req, res) => {
    Controllers.userController2.getUsers(res);
})

router.post('/create', (req, res) => {
    Controllers.userController2.createUser(req.body, res)
})

router.put('/:id', (req, res) => {
    Controllers.userController2.updateUser(req, res)
})

router.delete('/:id', (req, res) => {
    Controllers.userController2.deleteUser(req, res)
})

module.exports = router;