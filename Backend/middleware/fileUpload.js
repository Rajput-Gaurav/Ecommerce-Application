const multer = require('multer');

// FILE UPLOAD FOR PRODUCTS:--------------------------------------//
const diskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/products');
  },
  filename: (req, file, cb) => {
    const mimeType = file.mimetype.split('/');
    const fileType = mimeType[1];
    const fileName = file.originalname + '.' + fileType;
    cb(null, fileName);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = ['image/png', 'image/jpeg', 'image/jpg'];
  allowedMimeTypes.includes(file.mimetype) ? cb(null, true) : cb(null, false);
};

const Storage = multer({ storage: diskStorage, fileFilter: fileFilter }).single(
  'image'
);

module.exports = Storage;

// GROCERY FILE UPLOAD----------------------------------------------//
const groceryStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/grocery');
  },
  filename: (req, file, cb) => {
    const mimeType = file.mimetype.split('/');
    const fileType = mimeType[1];
    const fileName = file.originalname + '.' + fileType;
    cb(null, fileName);
  },
});


const GroceryStorage = multer({ storage: groceryStorage, fileFilter: fileFilter }).single('image');
module.exports = GroceryStorage;
