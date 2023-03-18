const express = require("express");
const router = express.Router();
const Contollers = require("../controllers");

router.get('/', (req, res) => {
    Contollers.jinxController.getJinxs(res);
})

module.exports = router;