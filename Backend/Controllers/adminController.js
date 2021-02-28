const Admins = require('../Models/adminCreds');
const commonService = require('../middleware/commonService');

// Create User:
// exports.create = (req, res) => {
//     const userObj = {
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         email: req.body.email,
//         password: req.body.password,
//         isDeleted: false
//     };

//     Admins.create(userObj, function (err, result) {
//         if(err)
//             res.json({ status: "fail", message: "Fail to create new User!", err: err});
//         else
//             res.json({ status: "success", message: "User added Successfully!", data: result});            
//     });

// }

exports.create = (req, res) => {
    const { firstName, lastName, email, userType, password} = req.body;

    const admin = new Admins();

    admin.firstName = firstName;
    admin.lastName = lastName;
    admin.email = email;
    admin.userType = userType;
    admin.generatePasswordHash(password);

    admin.save()
    .then(data => {res.json(data.genUserObj())
    }).catch()
};

    // Update User:
    exports.update = (req, res) => {
        if (!req.params.Id) {
            return res.send({
                status: "fail",
                message: "User not found with Id " +req.params.Id
            });
        }
        Admins.findByIdAndUpdate(req.params.Id, {$set: req.body}, {new: false}, function (err, result) {
            if (err) {
                res.send({ status: "fail", message: err});
            }
                res.send({ status: "success", message: "User is updated successfully!", data: result});            
        });
    };

    // Get All data:
    exports.findAll = (req, res) => {
        Admins.find()
            .then(users => {
                if(!users)
                    res.json({ status: "fail", message: "fail to get users!"});
                else
                    res.json({ status: "success", message: "User found Successfully!", data: users});                    
            })  .catch(err => {
                res.send({
                    message: err.message || "Some error occurred while retriving User!"
                });
            });
    };

    // select UserById:
    exports.getUserById = (req, res) => {

        if(!req.params.Id) {
            return res.send({
                status: "fail",
                message: "User not found with Id " +req.params.Id
            });
        }

        Admins.findById(req.params.Id)
            .then(users => {
                if(!users)
                    res.json({ status: "fail", message: "Fail to get user!"});
                else
                    res.json({ status: "success", message: "User found successfully!", data: users});                    
            })  .catch(err => {
                res.send({
                    message: err.message || "some error occurred while retriving data!"
                });
            });
    };

    // delete UserById:
    exports.delete = (req, res) => {
        if (!req.params.Id) {
            return res.send({
                status: "fail",
                message: "User not found with Id " + req.params.Id
            });
        }   else{
            Admins.findByIdAndUpdate(req.params.Id, {$set: {isDeleted: true}}, {new: false}, function (err, result) {
                if(err) {
                    res.send({ status: "fail", message: err});
                }
                    res.send({ status: "success", message: "User deleted successfully!"});
            });
        }
    };

    // Login User with email and password:
    exports.adminLogin = (req, res) => {
        // if (commonService.isUndefinedOrNull(req.body.email)) {
        //     return res.json({ status: "fail", message: "Email address is required!"});
        // }   else if (commonService.isUndefinedOrNull(req.body.password)) {
        //     return res.json({ status: "fail", message: "Password is required!"});
        // }   else {
        //     Admins.findOne({ email: req.body.email, password: req.body.password})
        //         .then(admin => {
        //             if(admin) {
        //                 if(admin.isValidPassword(password)) {
        //                     res.json(admin.genUserObj())
        //                 } else {
        //                     res.status(401).json({
        //                         msg: 'Invalid Credentials.'
        //                     })
        //                 }
        //             } else {
        //                 res.status(400).json({
        //                     msg: 'User not found'
        //                 })
        //             }
        //         })
        //          .catch(err => {
        //             console.log('err', err);
        //             return res.send({
        //                 status: "fail",
        //                 message: err.message || "Some error occurred while retriving user."
        //             });
        //         });
        // }
        const  { email, password } = req.body;

        Admins.findOne({ email })
            .then(admin => {
                console.log(admin);
                if(admin) {
                    if(admin.isValidPassword(password)){
                        res.json(admin.genUserObj())
                    }else{
                        res.status(401).json({
                            msg: "Invalid Credentials."
                        })
                    }
                }else{
                    res.status(400).json({
                        msg: "User not found."
                    })
                }
            })
            .catch(() => {
                res.status(500).json({
                    msg: "Something went wrong."
                })
            })
    }
    