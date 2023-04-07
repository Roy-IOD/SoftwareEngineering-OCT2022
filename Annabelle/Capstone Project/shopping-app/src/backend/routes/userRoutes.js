let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js

router.get('/', (req, res) => {
Controllers.userController.getUsers(res);})

router.post('/create', (req, res) => {
Controllers.userController.createUser(req.body, res)})


router.post('/login', (req, res) => {
    Controllers.userController.loginUser(req.body, res)})

router.put('/:id/name', (req, res) => {
      const userId = req.params.id;
      const newName = req.body.newName;
      
      Controllers.userController.updateName(userId, newName, res);
    });
    
router.delete('/:id', (req, res) => {
      const userId = req.params.id;
      Controllers.userController.deleteUser(userId, res);
    });
    



module.exports = router;
