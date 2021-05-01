const express = require("express");
const CartController = require("../Controllers/cartController");
const router = express.Router();

router.post("/create", CartController.create);
router.get("/getAllCart", CartController.findAll);
router.get("/getCartById/:Id", CartController.findById);
router.post("/updateCartById/:Id", CartController.update);
router.post("/deleteCartById/:Id", CartController.delete);

module.exports = router;
