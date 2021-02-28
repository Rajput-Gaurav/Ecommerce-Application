const express = require('express');
const router = express.Router();
const studentController = require('../Controllers/studentCourse-controller');

router.post('/create', studentController.create);
router.post('/updateCourseById/:Id', studentController.update);
router.get('/findstudentCourse', studentController.findAll);
router.get('/getCourseById/:Id', studentController.getCourseById);
router.post('/deleteCourseById/:Id', studentController.delete);

module.exports = router;