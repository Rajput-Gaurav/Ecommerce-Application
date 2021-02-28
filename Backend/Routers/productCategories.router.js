const productCategories = require('../Controllers/productCategoriesController');
const express = require('express');
const router = express.Router();

router.post('/create', productCategories.create);
router.get('/getProductCategories', productCategories.findAll);
router.get('/getProductCategoriesById/:Id', productCategories.findById);
router.post('/updateProductCategories/:Id', productCategories.update);
router.post('/deleteProductCategories/:Id', productCategories.delete);

module.exports = router;