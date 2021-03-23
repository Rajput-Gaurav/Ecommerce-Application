const mongoose = require('mongoose');

const supportSchema = new mongoose.Schema({
    ticketId: String,
    message: String,
    userType: String,
    isDeleted: false

}, { timestamps: true} );

module.exports = mongoose.model('support', supportSchema);