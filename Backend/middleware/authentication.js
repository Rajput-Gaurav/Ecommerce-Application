const adminModel = require('../Models/adminCreds');

function authentication(req, res, next) {

    // if the req is OPTION req, then ignore:
    if(req.method === 'OPTIONS') next();

    // if authentication is null then return error or not Authorized msg:
    let token = null;

    if(typeof req.headers.authorization !== 'undefined') {
        token = req.headers['authorization'].split(' ')[1]
    }

    if(adminModel.isValidToken(token)) {
        next()
    } else {
        res.status(401).json({
            msg: 'Not Authorized'
        })
    }
};


module.exports = authentication;