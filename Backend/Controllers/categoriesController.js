const Categories = require('../Models/categories');

// Create data:
exports.create = (req, res) => {

    const categoriObj = {
        categoryName: req.body.categoryName,
        isDeleted: false
    }

    Categories.create(categoriObj, function(err, result){
        if (err) {
            res.json({ status: "Fail", message: "Failed to create new categories!", err: err});
        }
            res.json({ status: "Success", message: "Categories created successfully!!!", data: result});
    })
};

// Get data:
exports.findAll = (req, res) => {
    Categories.find( {isDeleted: false})
        .then(categories => {
            if(!categories) {
                res.json({ status: "Fail", message: "Failed to find categories!"});
            }
                res.json({ status: "Success", message: "Categories found successfully!!!", data: categories});
                
        })
            .catch(err => {
                res.json({ status: "Fail", message: err.message || "Some other error occurred!"});
            })
};

// Get data By Id:
exports.findById = (req, res) => {
    if (!req.params.Id){
        res.send({ status: "Fail", message: "Categories id not found!" +req.params.Id });
    }

    Categories.findById(req.params.Id)
        .then(categories => {
            if(!categories){
                res.json({ status: "Fail", message: "Categories not found!"});
            }
                res.json({ status: "Success", message: "Categories found successfully!!!", data: categories});
        })
        .catch(err => {
            res.json({ status: "Fail", message: err.message || "Some other error occurred!"});
        })
};

// Update data By Id:
exports.update = (req, res) => {
    if(!req.params.Id){
        res.send({ status: "Fail", message: "Categories id not found!" + req.params.Id});
    }

    Categories.findByIdAndUpdate(req.params.Id, { $set: req.body}, { new: false}, function(err, result){
        if(err) {
            res.json({ status: "Fail", message: "Fail to update categories!", err: err});
        }
            res.json({ status: "Success", message: "Categories update successfully!!!", data: result});
    })
};

// delete data By Id:
// exports.delete = (req, res) => {
//     if(!req.params.Id){
//         res.json({ status: "Fail", message: "Categories id not found!"});
//     }

//     Categories.findByIdAndUpdate(req.params.Id, { $set: {isDeleted: true}}, { new: false}, function(err, result){
//         if(err){
//             res.json({ status: "Fail", message: "Fail to delete categories!", err: err});
//         }
//             res.json({ status: "Success", message: "Categories deleted successfully!!!"});
//     })
// };

// Delete record permanent:
exports.delete = (req, res) => {
    if(!req.params.Id){
        res.send({
            status: "Fail", message: "Categories id not found!" + req.params.Id
        });
    }

    Categories.findByIdAndDelete(req.params.Id, {new: false}, function(err, result){
        if(err){
            res.json({ status: "Fail", message: "Fail to delete categories!", err: err});
        }
            res.json({ status: "Success", message: "Categories deleted successfully!!!"});
    })
}