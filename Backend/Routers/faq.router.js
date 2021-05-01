const express = require("express");
const router = express.Router();
const FAQ = require("../Controllers/faqController");

router.post("/create", FAQ.create);
router.get("/getAllFaq", FAQ.findAll);
router.get("/getFaqById/:Id", FAQ.findById);
router.post("/updateFaq/:Id", FAQ.update);
router.post("/deleteFaq/:Id", FAQ.dalete);

module.exports = router;
