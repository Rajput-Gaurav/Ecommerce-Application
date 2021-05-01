const express = require("express");
// import middleware:
const Storage = require("../middleware/fileUpload");
const products = require("../Controllers/productDetailsController");
const categories = require("../Controllers/productCategoriesController");

const router = express.Router();

router.post("/create", Storage, products.create);
router.get("/getAllProduct", products.findAll);
router.get("/getProductById/:Id", products.findById);
router.post("/findFilterProduct", products.getFilterProduct);
router.post("/updateProductStatus/:Id", products.updateProductStatus);
router.post("/updateProductById/:Id", products.update);
router.post("/deleteProductById/:Id", products.delete);
router.get("/getCategoryByName/:productCategory", products.getCategoryByName);

module.exports = router;
