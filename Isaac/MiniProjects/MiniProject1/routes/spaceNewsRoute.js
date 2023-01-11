const express = require('express');
const spaceNewsController = require('../controllers/spaceNewsController');
const router = express.Router();


router.get('/', (req, res) => {
      spaceNewsController.addSpaceNews(req,res)
})


module.exports = router;