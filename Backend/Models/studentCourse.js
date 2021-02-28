const mongoose = require('mongoose');
const studentSchema = mongoose.Schema({
    course: String,
    isDeleted: false
}, 
{timestamps: true});

module.exports = mongoose.model('studentCourse', studentSchema);