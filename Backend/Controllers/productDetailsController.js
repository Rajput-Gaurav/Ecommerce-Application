const Products = require('../Models/productDetails');

// Create or Insert:
exports.create = (req, res) => {
    console.log(req.file);

    const products = {
        imagePath: "http://localhost:5000/public/products/" + req.file.filename,
        productName: req.body.productName,
        productCategory: req.body.productCategory,
        productRating: req.body.productRating,
        mrp: req.body.mrp,
        status: req.body.status,
        quantity: req.body.quantity,
        totalamount: req.body.totalamount,
        isDeleted: false
    };
    console.log("Products: ", products);

        Products.create(products, function(err, result) {
            if(err)
                res.send({ status: "fail", message: "Fail to add Course!", err:err});
            else
                res.send({ status: "success", message: "Course added successfully!", data: result});            
        });
}

// Get Product:
exports.findAll = (req, res) => {
    Products.find( {isDeleted: false})
        .then(product => {
            if(!product) {
                res.json({ status: "Fail", message: "Failed to find product!"});
            }
                res.json({ status: "Success", message: "Product found successfully!!!", data: product});
                
        })
            .catch(err => {
                res.json({ status: "Fail", message: err.message || "Some other error occurred!"});
            })
};

// Get Product By Id:
exports.findById = (req, res) => {
    if(!req.params.Id) {
        return res.send({
            status: "Fail", message: "Product id not found!" + req.params.Id
        });
    }
    Products.findById(req.params.Id)
        .then(product => {
            if(!product) {
                res.json({
                    status: "Fail",
                    message: "Product data not found with id!", err: err
                });
            }
                res.json({
                    status: "Success",
                    message: "Product data found with id!!!", data: product
                });
        })
        .catch(err => {
            res.json({
                status: "some other Error",
                message: err.message || "Some other error occurred!"
            });
        })
};

// Get Product & Show them through STATUS FILTER:
// Get Product By Filter:
exports.getFilterProduct = (req, res) => {
    var query = {};
    query['isDeleted'] = false;
    if (req.body) {
        if (req.body.status && req.body.status !== 'All') {
            query['status'] = req.body.status;
        }
    }
    console.log("query", query);
        Products.find(query)
            .then(product => {
                if(!product || product <= 0)
                    res.json({ status: "Fail", message: "Fail to get Product!"});
                else if(req.body.apiForm == 'Admin') {
                    res.json({ status: "success", message: "Product found successfully!!!", data: product});
                } else {
                    res.json({ status: "Fail", message: "Here no any data related to this status!"});
                }                    
            })
            .catch(err => {
                res.send({ status: "some other Error!",
            message: err.message || "Some error occurred!"});
            });
};

// Update Status:
exports.updateProductStatus = (req, res) => {
    if (!req.params.Id) {
        return res.send({
            status: "Fail",
            message: "Product not found with id!" + req.params.Id
        });
    } else {
        Products.findByIdAndUpdate(req.params.Id, { $set: { status: req.body.status}}, { new: false}, function(err, result){
            if (err) {
                res.json({ status: "error", message: "Status not update!", err: err});
            }
                res.json({ status: "Success", message: "Product status is updated successfully!!!", data: result});
        });
    }
};

// Update Product:
exports.update = (req, res) => {
    if (!req.params.Id) {
        return res.send({
            status: "Fail",
            message: "Product not found with id" +req.params.Id
        });
    }

    Products.findByIdAndUpdate(req.params.Id, { $set: req.body}, {new: false}, function(err, result){
        if (err) {
            res.json({ status: "error", message: "Product not updated!", err: err});
        }
            res.json({ status: "Success", message: "Product updated successfully!!!", data: result});
    });
};

// Delete Product:
exports.delete = (req, res) => {
    if (!req.params.Id) {
        return res.send({
            status: "Fail",
            message: "Product not found with id" +req.params.Id
        });
    }

    Products.findByIdAndDelete(req.params.Id, { new: false}, function(err, result){
        if(err) {
            res.json({
                status: "Fail",
                message: "Product not deleted with id!", err: err
            });
        }
        res.json({ 
            status: "Success",
            message: "Product deleted successfully!!!"
        });
    });
};

