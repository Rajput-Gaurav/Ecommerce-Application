const mongoose = require('mongoose');
const availableCourseSchema = mongoose.Schema({
    selectCourse: String,
    courseCode: String,
    courseFees: Number,
    file: String,
    isDeleted: false
}, 
{timestamps: true});

module.exports = mongoose.model('availableCourse', availableCourseSchema);