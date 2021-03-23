const express = require('express');
const Grocery = require('../Controllers/groceryController');
const groceryStorage = require('../middleware/fileUpload');
const router = express.Router();


router.post('/create', groceryStorage, Grocery.create);
router.get('/getAllGrocery', Grocery.findAll);
router.get('/getGroceryById/:Id', Grocery.findById);
router.post('/findFilterGrocery', Grocery.getFilterGrocery);
router.post('/updateGroceryStatus/:Id', Grocery.updateGroceryStatus);
router.post('/updateGroceryById/:Id', Grocery.update);
router.post('/deleteGroceryById/:Id', Grocery.delete);

module.exports = router;