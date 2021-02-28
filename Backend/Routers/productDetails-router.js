const productDetails = require('../Controllers/productDetailsController');
const express = require('express');
const router = express.Router();

router.post('/create', productDetails.create);
router.get('/getAllProduct', productDetails.findAll);
router.get('/getProductById/:Id', productDetails.findById);
router.post('/findFilterProduct', productDetails.getFilterProduct);
router.post('/updateProductStatus/:Id', productDetails.updateProductStatus);
router.post('/updateProductById/:Id', productDetails.update);
router.post('/deleteProductById/:Id', productDetails.delete);

module.exports = router;