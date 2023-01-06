const express = require('express');
const catFactsController = require('../controllers/catfactsController')
const router = express.Router();

router.get('/random', (req, res) => {
    catFactsController.randomFact(req, res);
})

//get a list of cat facts based on the limit and paging query parameters
router.get('/list', (req, res) => {
    catFactsController.listFacts(req, res);
})

//get a specific fact from the cache based on its ID
router.get('/fact/:id', (req, res) => {
    catFactsController.getFact(req, res);
})


module.exports = router;