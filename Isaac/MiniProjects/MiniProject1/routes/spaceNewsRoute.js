const express = require('express');
let spaceNewsController = require('../controllers/spaceNewsController');
const router = express.Router();


router.get('/add', (req, res) => {
      spaceNewsController.addSpaceNews(req,res)
})


module.exports = router;