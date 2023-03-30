const express = require('express');
const router = express.Router();
const Controllers = require('../controllers/productController');

//console.log(productController)
router.get('/', Controllers.productController.getProducts);
router.get('/:id', Controllers.productController.getProductById);
router.post('/', Controllers.productController.createProduct);
router.put('/:id', Controllers.productController.updateProduct);
router.delete('/:id', Controllers.productController.deleteProduct);

module.exports = router;
