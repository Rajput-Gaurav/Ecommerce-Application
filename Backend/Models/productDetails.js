const mongoose = require('mongoose');
const ProductCategories = require('./productCategories');

const products = new mongoose.Schema({
    imagePath: String,
    productName: String,
    productCategory: {type: String, trim: true},
    productRating: String,
    mrp: String,
    status: String,
    quantity: String,
    totalamount: String,
    isDeleted: false
}, {timestamps: true});

module.exports = mongoose.model('Products', products);