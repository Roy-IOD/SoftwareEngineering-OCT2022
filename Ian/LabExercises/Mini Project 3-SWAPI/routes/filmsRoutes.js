const express = require('express');

const router = express.Router();
const Controllers = require('../controllers');

router.get('/', (req, res) => {
    Controllers.filmsController.getFilms(res);
});

router.post('/create', (req, res) => {
    Controllers.filmsController.createFilms(req.body, res);
});

router.put('/:id', (req, res) => {
    Controllers.filmsController.updateFilms(req, res);
});

router.delete('/:id', (req, res) => {
    Controllers.filmsController.deleteFilms(req, res);
});

module.exports = router;

