const express = require("express");
const router = express.Router();
const Contollers = require("../controllers");

router.get('/', (req, res) => {
    Contollers.charmController.getCharms(res);
})

module.exports = router;