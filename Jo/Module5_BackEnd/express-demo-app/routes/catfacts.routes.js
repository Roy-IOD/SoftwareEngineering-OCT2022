const express = require('express');
const catfactsController = require('../controllers/catfactsController')
const router = express.Router();

router.get('/random', (req, res) => {
    catfactsController.randomFact(req, res);
})

//get a list of cat facts based on the limit and paging query parameters
router.get('/list', (req, res) => {
    catfactsController.listFacts(req, res);
})

//get a specific fact from the cache based on its ID
router.get('/fact/:id', (req, res) => {
    catfactsController.getFact(req, res);
})


module.exports = router;