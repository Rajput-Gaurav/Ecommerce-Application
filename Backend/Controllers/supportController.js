const Support = require('../Models/support');

// CREATE OR INSERT:
exports.create = (req, res) => {

    const supportObj = {
        ticketId: req._id,
        message: req.body.message,
        userType: req.body.userType,
        isDeleted: false
    };

    Support.create(supportObj, function(err, result){
        if(err) {
            res.json({ status: "fail", message: "fail too create support!", err: err});
        }
            res.json({ status: "success", message: "support created successfully!!!", data: result});
    })
};

// GET All SUPPORT:
exports.findAll = (req, res) => {

    Support.find({ isDeleted: false})
        .then(support => {
            if(!support) {
                res.json({ status: "fail", message: "fail to find support!", err: err});
            }
                res.json({ status: "success", message: "support find successfully!!!", data: support});
        })
        .catch(err => {
            res.json({ status: "fail", message:err.message || "Some other error!"});
        })
};