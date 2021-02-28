const mongoose = require('mongoose');

const productCategories = new mongoose.Schema({
    pCategoryName: String,
    isDeleted: false
}, {timestamps: true})

module.exports = mongoose.model('ProductCategories', productCategories);