const express = require('express');
const router = express.Router();
const availableCourseController = require('../Controllers/availableCourse-controller');

const upload = require('../middleware/fileUpload');

router.use(express.static(__dirname + "./public/"));
router.post('/Create', upload.single('images'), availableCourseController.create);
router.get('/findAvailableCourse', availableCourseController.findAll);
router.get('/findAvailableCourseById/:Id', availableCourseController.getavailableCourseById);
router.post('/updateAvailableCourseById/:Id', availableCourseController.update);
router.post('/deleteAvailableCourseById/:Id', availableCourseController.delete);
router.post('/uploadPicture', upload.single('images'), availableCourseController.uploadFile);

module.exports = router;