const categoriesController = require('../Controllers/categoriesController');
const express = require('express');
const router = express.Router();

router.post('/create', categoriesController.create);
router.get('/getAllCategories', categoriesController.findAll);
router.get('/getCategoriesById/:Id', categoriesController.findById);
router.post('/updateCategories/:Id', categoriesController.update);
router.post('/deleteCategories/:Id', categoriesController.delete);

module.exports = router;