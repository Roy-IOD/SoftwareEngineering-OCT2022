const express = require("express");
const router = express.Router();
const Contollers = require("../controllers");

router.get('/', (req, res) => {
    Contollers.curseController.getCurses(res);
})

module.exports = router;