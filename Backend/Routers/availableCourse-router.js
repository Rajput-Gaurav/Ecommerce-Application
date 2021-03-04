const express = require('express');
const router = express.Router();
const availableCourseController = require('../Controllers/availableCourse-controller');

const Storage = require('../middleware/fileUpload');

router.use(express.static(__dirname + "./public/"));
router.post('/Create', Storage, availableCourseController.create);
router.get('/findAvailableCourse', availableCourseController.findAll);
router.get('/findAvailableCourseById/:Id', availableCourseController.getavailableCourseById);
router.post('/updateAvailableCourseById/:Id', availableCourseController.update);
router.post('/deleteAvailableCourseById/:Id', availableCourseController.delete);

module.exports = router;