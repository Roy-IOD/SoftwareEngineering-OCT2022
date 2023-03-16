const express = require('express');

const router = express.Router();
const Controllers = require('../controllers');

router.get('/', (req, res) => {
    Controllers.planetsController.getPlanets(res);
});

router.post('/create', (req, res) => {
    Controllers.planetsController.createPlanets(req.body, res);
});

router.put('/:id', (req, res) => {
    Controllers.planetsController.updatePlanets(req, res);
});

router.delete('/:id', (req, res) => {
    Controllers.planetsController.deletePlanets(req, res);
});

module.exports = router;

