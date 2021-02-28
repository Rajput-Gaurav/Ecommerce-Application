const studentCourse = require('../Models/studentCourse');

// Create Course By Id:
exports.create = (req, res) => {
    const studentcourse = {
        course: req.body.course,
        isDeleted: false
    };

    studentCourse.create(studentcourse, function(err, result) {
        if(err)
            res.send({ status: "fail", message: "Fail to add Course!", err:err});
        else
            res.send({ status: "success", message: "Course added successfully!", data: result});            
    });
}

// Update Course By Id:
exports.update = (req, res) => {
    
    if(!req.params.Id) {
        return res.send({
            status: "fail",
            message: "course not found with id" +req.params.Id
        });
    }
    studentCourse.findByIdAndUpdate(req.params.Id, { $set: req.body}, {new: false}, function(err, result) {
        if (err){
            res.send({status: "error", message: err});
        }
            res.send({ status: "success", message: "course is updated successfully!", data: result});
    });
}

// Get All Course:
exports.findAll = (req, res) => {

    studentCourse.find( {isDeleted: false})
        .then(course => {
            if(!course)
                res.json({ status: "fail", message: "fail to get course"});
            else
                res.json({ status: "success", message: "course found successfully!", data: course});                
        })
        .catch(err => {
            res.send({
                status: "fail",
                message: err.message || "some error occurred while retriving course data"
            });
        });
};

// Get Course By Id:
exports.getCourseById = (req, res) => {
    if(!req.params.Id) {
        return res.send({
            status: "fail",
            message: "course not found with id" +req.params.Id
        });
    }

    studentCourse.findById(req.params.Id)
        .then(studentcourse => {
            if(!studentcourse)
                res.json({ status: "fail", message: "fail to get course"});
            else
                res.json({ status: "success", message: "course found successfully!", data: studentcourse});                
        }).catch(err => {
            res.send({
                status: "fail", message: err.message || "some error occurred while retriving course."
            });
        });
};

// Delete Course By Id:
exports.delete = (req, res) => {
    if(!req.params.Id) {
        return res.send ({
            status: "fail",
            message: "Course Id not found! " +req.params.Id
        });
    } else {
        studentCourse.findByIdAndUpdate(req.params.Id, { $set: {isDeleted: true}}, {new: false}, function (err, result){
            if(err) {
                res.send({ status: "error", message: err});
            }
                res.send({ status: "success", message: "Course deleted successfully!!!"});
        });
    }
};