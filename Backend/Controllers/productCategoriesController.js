const productCategories = require('../Models/productCategories');

// Create or insert:
exports.create = (req, res) => {

    const pCategoriesObj = {
        pCategoryName: req.body.pCategoryName,
        isDeleted: false
    }

    productCategories.create(pCategoriesObj, function(err, result){
        if(err) {
            res.json({ status: "Fail", message: "Failed to add productCategories!", err: err});
        }
            res.json({ status: "Success", message: "productCategories added successfully!!!", data: result});
    })
};

// Get All productCategories:
exports.findAll = (req, res) => {
    productCategories.find()
        .then(pcategories => {
            if(!pcategories) {
                res.json({ status: "Fail", message: "Fail to find productCategories!", err: err});
            }
                res.json({ status: "Success", message: "productCategories find successfully!!!", data: pcategories});
        })
        .catch(err => {
            res.json({ status: "Fail other error", message: err.message || "Some other error occurred!"});
        })
};

// Get productCategories By Id:
exports.findById = (req, res) => {
    if (!req.params.Id) {
        res.json({ status: "Fail", message: "productCategories id not found!" + req.params.Id});
    }

    productCategories.findById(req.params.Id)
        .then(pcategories => {
            if (!pcategories) {
                res.json({ status: "Fail", message: "productCategories not found with id", err: err});
            }
                res.json({ status: "Success", message: "productCategories found successfully!!!", data: pcategories});
        })
        .then(err => {
            res.json({ status: "Fail other error", message: err.message || "Some other error occurred!"});
        })
};

// update productCategories By Id:
exports.update = (req, res) => {
    if (!req.params.Id) {
        res.json({ status: "Fail", message: "productCategories id not found!", err: err});
    }
    
    productCategories.findByIdAndUpdate(req.params.Id, { $set: req.body}, {new: false}, function(err, result){
        if (err){
            res.json({ status: "Fail", message: "Fail to update productCategories!", err: err});
        }
            res.json({ status: "Success", message: "productCategories updated successfully!!!", data: result});
    })
};

// Delete record permanent:
exports.delete = (req, res) => {
    if(!req.params.Id){
        res.send({
            status: "Fail", message: "productCategories id not found!" + req.params.Id
        });
    }

    productCategories.findByIdAndDelete(req.params.Id, {new: false}, function(err, result){
        if(err){
            res.json({ status: "Fail", message: "Fail to delete productCategories!", err: err});
        }
            res.json({ status: "Success", message: "productCategories deleted successfully!!!"});
    })
}