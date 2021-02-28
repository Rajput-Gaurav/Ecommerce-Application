const AvailableCourse = require('../Models/availableCourse');

// upload Image:
exports.uploadFile = (req, res) => {
    console.log(req.file);
    res.json({
        imageUrl: 'http://localhost:5000/uploads' +req.file.filename
    });
}

// Insert data:
exports.create = (req, res) => {
    console.log(req.file);
    const availableCourse = {
        selectCourse: req.body.selectCourse,
        courseCode: req.body.courseCode,
        courseFees: req.body.courseFees,
        file: req.file.originalname,
        isDeleted: false
    };
    console.log(availableCourse);

    if(!req.file) {
        return res.json({
            status: "Fail",
            message: "Upload fail!"
        });
    } else{
        req.body.imageUrl = 'http://localhost:5000/uploads' +req.file.filename;
        AvailableCourse.create(availableCourse, function(err, result) {
            if(err)
                res.send({ status: "fail", message: "Fail to add Course!", err:err});
            else
                res.send({ status: "success", message: "Course added successfully!", data: result});            
        });
    }
}


// Update Course By Id: 
exports.update = (req, res) => {

    if(!req.params.Id) {
        res.send({
            status:"fail",
            message: "course not found with Id!" + req.params.Id
        });
    }
        AvailableCourse.findByIdAndUpdate(req.params.Id, { $set: req.body}, {new: false}, function(err, result) {
            if(err) {
                res.send({ status: "fail", message: "course not updated with Id!", err:err});
            }
                res.send({ status: "success", message: "course updated with successfully!!!", data: result});
        });
}

// Get All available Course:
exports.findAll = (req, res) => {

    AvailableCourse.find( {isDeleted: false})
        .then(availableCourse => {
            if(!availableCourse)
                res.json({ status: "fail", message: "fail too get all availableCourse!"});
            else
                res.json({ status: "success", message: "availableCourse find succesfully!!!", data: availableCourse});                
        })
        .catch(err => {
            res.json({
                status: "fail",
                message: err.message || "some error occurred"
            });
        });
}

// Get available Course By Id:
exports.getavailableCourseById = (req, res) => {
    if (!req.params.Id) {
        res.send({
            status: "fail",
            message: "course not found with Id!" + req.params.Id
        });
    }
    AvailableCourse.findById(req.params.Id)
        .then(availableCourse => {
            if(!availableCourse)
                res.json({ status: "fail", message: "fail to get customer!"});
            else
                res.json({ status: "success", message: "availableCourse found successfully!!!", data: availableCourse});             
        }).catch(err => {
            res.send({
                message: err.message || "some error occurred while retriving course"
            });
        });
}

// Delete Course By Id:
exports.delete = (req, res) => {
    if(!req.params.Id) {
        res.send({
            status: "fail",
            message: "available course not found with Id " + req.params.Id
        });
    }
        else{
            AvailableCourse.findByIdAndUpdate(req.params.Id, { $set: {isDeleted: true}}, {new: false}, function(err, result) {
                if (err) {
                    res.send({ status: "error", message: err});
                }
                    res.send({ status: "success", message: "availableCourse deleted successfully!!!"});
            });
        }
}
