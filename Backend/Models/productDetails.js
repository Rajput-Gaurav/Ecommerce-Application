const mongoose = require('mongoose');
const productDetails = new mongoose.Schema({
    productName: String,
    productType: String,
    productCategory: String,
    productImage: String,
    productColor: String,
    productSize: String,
    productRating: String,
    pincode: Number,
    netPurchaseRate: String,
    basicPurchaseRate: String,
    gst: String,
    mrp: String,
    salesRate: String,
    saleAmount: String,
    basicSaleRate: String,
    manufacturingDate: String,
    distributer: String,
    stock: String,
    cgst: String,
    sgst: String,
    status: String,
    isDeleted: false
}, {timestamps: true});

module.exports = mongoose.model('ProductDetails', productDetails);