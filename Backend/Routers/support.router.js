const express = require('express');
const router = express.Router();
const supportController = require('../Controllers/supportController');

router.post('/create', supportController.create);
router.get('/getAllSupport', supportController.findAll);

module.exports = router;