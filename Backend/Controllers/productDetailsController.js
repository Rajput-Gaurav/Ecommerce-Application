const ProductDetails = require('../Models/productDetails');

// Create or Insert:
exports.create = (req, res) => {

    const Product = {
        productName: req.body.productName,
        productType: req.body.productType,
        productCategory: req.body.productCategory,
        productImage: req.body.productImage,
        productColor: req.body.productColor,
        productSize: req.body.productSize,
        productRating: req.body.productRating,
        pincode: req.body.pincode,
        netPurchaseRate: req.body.netPurchaseRate,
        basicPurchaseRate: req.body.basicPurchaseRate,
        gst: req.body.gst,
        mrp: req.body.mrp,
        salesRate: req.body.salesRate,
        saleAmount: req.body.saleAmount,
        basicSaleRate: req.body.basicSaleRate,
        manufacturingDate: req.body.manufacturingDate,
        distributer: req.body.distributer,
        stock: req.body.stock,
        cgst: req.body.cgst,
        sgst: req.body.sgst,
        status: req.body.status,
        isDeleted: false
    };

    ProductDetails.create(Product, function(err, result){
        if (err) {
            res.json({ status: "Fail", message: "Fail to create new product!", err: err});
        }
            res.json({ status: "Success", message: "Product added successfully!!!", data: result});
    })
};

// Get Product:
exports.findAll = (req, res) => {
    ProductDetails.find( {isDeleted: false})
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
    ProductDetails.findById(req.params.Id)
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
        ProductDetails.find(query)
            .then(product => {
                if(!product || product <= 0)
                    res.json({ status: "Fail", message: "Fail to get Product!"});
                else if(req.body.apiForm == 'Admin') {
                    res.json({ status: "Success", message: "Product found successfully!!!", data: product});
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
        ProductDetails.findByIdAndUpdate(req.params.Id, { $set: { status: req.body.status}}, { new: false}, function(err, result){
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

    ProductDetails.findByIdAndUpdate(req.params.Id, { $set: req.body}, {new: false}, function(err, result){
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

    ProductDetails.findByIdAndUpdate(req.params.Id, { new: false}, function(err, result){
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

