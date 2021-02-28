const multer = require('multer');
const path = require('path');

const Storage = multer.diskStorage({
    // destination where files store:
    destination: function(req, file, cb) {
        cb(null, './public/uploads');
    },
    // filename for upload files:
    filename: function(req, file, cb) {
        const ext = path.extname(file.originalname);    //set the extension of file:
        cb(null, file.fieldname + '-' + Date.now() + ext);
    }
});

const upload = multer({ storage: Storage});

module.exports = upload;