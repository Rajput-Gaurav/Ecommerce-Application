// import bcryptjs for encrypting password:
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

// create Schema:
const adminSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    userType: {type: String},
    passwordHash: {type: String, required: true},
    isDeleted: false

}, {timestamps: true});

// create a static method too check token is valid or not:
adminSchema.statics.isValidToken = function (token) {
    
    try {
        const payload = jwt.verify(token, 'skillai')
        console.log("payload: ", payload);
        return payload
    } catch (e) {
        return false
    }
}

// create a method for Encrypt the password:
adminSchema.methods.generatePasswordHash = function (password) {
    
    // generate salt:
    const salt = bcrypt.genSaltSync(10)
    // encrypt password:
    this.passwordHash = bcrypt.hashSync(password, salt);
}

// compare the password:
adminSchema.methods.isValidPassword = function(password) {
    return bcrypt.compareSync(password, this.passwordHash)
}

// create a method for token:
adminSchema.methods.genToken = function () {
    const payload = {
        email: this.email
    }
        return jwt.sign(payload, 'skillai');
}

// return some data:
adminSchema.methods.genUserObj = function() {
    return {
        id: this._id,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        userType: this.userType,
        token: this.genToken()
    }
}

module.exports = mongoose.model("AdminSchema", adminSchema);