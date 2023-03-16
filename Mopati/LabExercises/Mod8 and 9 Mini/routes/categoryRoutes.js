const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.categoryController.getCategories(res);
});

router.post("/create", (req, res) => {
  Controllers.categoryController.createCategory(req.body, res);
});

router.put("/:id", (req, res) => {
  Controllers.categoryController.updateCategory(req, res);
});

router.delete("/:id", (req, res) => {
  Controllers.categoryController.deleteCategory(req, res);
});

module.exports = router;
