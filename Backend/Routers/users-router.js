const express = require("express");
const router = express.Router();
const auth = require("../middleware/authentication");
const userController = require("../Controllers/userController");
const Storage = require("../middleware/userfileUpload");

router.post("/create", Storage, userController.create);
router.get("/getUsers", userController.findAll);
router.get("/getUsersById/:Id", userController.getUserById);
router.post("/updateUserById/:Id", userController.update);
router.post("/updateUserByEmail/:email", userController.updateByEmail);
router.post("/deleteUserById/:Id", userController.delete);
router.post("/userLogin", userController.userLogin);

module.exports = router;
