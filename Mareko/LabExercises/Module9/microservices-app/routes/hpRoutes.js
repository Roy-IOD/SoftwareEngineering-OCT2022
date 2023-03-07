const express = require('express')
const router = express.Router()
const Controllers = require('../controllers')

router.get('/houses', (req, res) => {
    Controllers.hpController.getHouses(res);
})



module.exports = router;