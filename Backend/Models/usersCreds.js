const mongoose = require('mongoose');
// import bcrypt and jwt for user authentication mwthods:
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// CREATE USERS SCHEMA:
const UserSchema = new mongoose.Schema({
    imagePath: { type: String, required: true},
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    email: { type: String, required: true},
    mobileNo: { type: String, required: true},
    address: { type: String, required: true},
    zipCode: { type: String, required: true},
    passwordHash: { type: String, required: true},
    isDeleted: false
}, { timestamps: true})

// CREATE A STATIC METHOD TO CHECK TOKEN IS VALID OR NOT:
UserSchema.statics.isValidToken = function (token) {

    try {
        const payload = jwt.sign(token, 'skillai');
        console.log("Payload: ", payload);
        return payload;
    } catch (e) {
        return false;
    }
}

// CREATE A METHOD FOR ENCRYPT THE PASSWORD:
UserSchema.methods.generatePasswordHash = function (password) {
    
    // generate salt:
    const salt = bcrypt.genSaltSync(10)
    // encrypt password:
    this.passwordHash = bcrypt.hashSync(password, salt);
}

// CREATE A METHOD FOR COMPARE THE PASSWORD:
UserSchema.methods.isValidPassword = function (password) {

    return bcrypt.compareSync(password, this.passwordHash);
}

// CREATE A METHOD FOR GENERATE A TOKEN:
UserSchema.methods.genToken = function() {

    const payload = {
        email: this.email
    }
        return jwt.sign(payload, 'skillai');
}

// RETURN SOME DATA TO CLIENT SIDE:
UserSchema.methods.genUsersObj = function() {
    return {
        id: this._id,
        imagePath: this.imagePath,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        mobileNo: this.mobileNo,
        address: this.address,
        zipCode: this.zipCode,
        token: this.genToken()
    }
}

module.exports = mongoose.model("Users", UserSchema);