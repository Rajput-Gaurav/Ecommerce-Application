const mongoose = require('mongoose');
const Users = require('./usersCreds');

const cartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId,
            ref: 'UserSchema'},
    productImage: { type: String},
    productName: {type: String, trim: true},
    productMrp: {type: Number},
    productQuantity: { type: Number},
    totalamount: { type: Number},
    isDeleted: false,     

}, { timestamps: true});

module.exports = mongoose.model('Cart', cartSchema);