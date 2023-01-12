const express = require('express')
const dogsController = require('../controllers/dogsController.js')
const router = express.Router();

router.get('/', (req,res) => {
dogsController.loadDogs(req,res)
})

module.exports = router