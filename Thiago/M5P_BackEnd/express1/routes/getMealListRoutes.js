const express = require('express');
const getMealListController = require('../controllers/getMealListController')
const router = express.Router();

router.get('/list', (req, res) => {
    getMealListController.listMeals(req, res);
})


module.exports = router;