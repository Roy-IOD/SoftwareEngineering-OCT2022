const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.fantasyController.getFantasy(res);
});

router.post("/create", (req, res) => {
  Controllers.fantasyController.createFantasy(req.body, res);
});

router.put("/:id", (req, res) => {
  Controllers.fantasyController.updateFantasy(req, res);
});

router.delete("/:id", (req, res) => {
  Controllers.fantasyController.deleteFantasy(req, res);
});

module.exports = router;
