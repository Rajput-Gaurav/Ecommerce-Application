const Users = require('../Models/usersCreds');

// CREATE USER:
exports.create = (req, res) => {
    console.log(req.file);

    const { imagePath, firstName, lastName, email, mobileNo, address, zipCode, password} = req.body;

    const user = new Users();
    user.imagePath = "http://localhost:5000/public/users/" + req.file.filename;
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.mobileNo = mobileNo;
    user.address = address;
    user.zipCode = zipCode;
    user.generatePasswordHash(password);
    user.isDeleted = false;

    console.log("User: ", user);
    Users.create(user, function(err, result){
        if(err) {
            res.json({ status: "fail", message: "failed to create data!", err: err});
        }
            res.json({ status: "success", message: "user created successfully!!!", data: result.genUsersObj()});
    })
}

// Get All data:
exports.findAll = (req, res) => {
    Users.find( {isDeleted: false})
        .then(users => {
            if(!users)
                res.json({ status: "fail", message: "fail to get users!"});
            else
                res.json({ status: "success", message: "user found Successfully!", data: users});                    
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

    Users.findById(req.params.Id)
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

// Update User:
    exports.update = (req, res) => {
        if (!req.params.Id) {
            return res.send({
                status: "fail",
                message: "User not found with Id " +req.params.Id
            });
        }
        Users.findByIdAndUpdate(req.params.Id, {$set: req.body}, {new: false}, function (err, result) {
            if (err) {
                res.send({ status: "fail", message: err});
            }
                res.send({ status: "success", message: "User is updated successfully!", data: result});            
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
            Users.findByIdAndUpdate(req.params.Id, {$set: {isDeleted: true}}, {new: false}, function (err, result) {
                if(err) {
                    res.send({ status: "fail", message: err});
                }
                    res.send({ status: "success", message: "User deleted successfully!"});
            });
        }
    };

// Login User with email and password:
exports.userLogin = (req, res) => {

    const  { email, password } = req.body;

    Users.findOne({ email })
        .then(user => {
            console.log(user);
            if(user) {
                if(user.isValidPassword(password)){
                    res.json(user.genUsersObj());
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