const express = require('express');
const router = express.Router();
const auth = require('../middleware/authentication');
const adminController = require('../Controllers/adminController');
const userValidator = require('../validators/adminValidator');

router.post('/create', [userValidator.registerValidator], adminController.create);
router.post('/updateUserById/:Id', adminController.update);
router.get('/getUsers', adminController.findAll);
router.post('/deleteUserById/:Id',  adminController.delete);
router.get('/getUserById/:Id', adminController.getUserById);
router.post('/adminLogin', [userValidator.loginValidator],adminController.adminLogin);

module.exports = router;