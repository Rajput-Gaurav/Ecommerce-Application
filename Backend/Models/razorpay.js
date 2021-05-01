const Razorpay = require("razorpay");

const RazorpayConfig = {
  key_id: "",
  Key_secret: "",
};

const instance = new Razorpay(RazorpayConfig);

module.exports.confing = RazorpayConfig;
module.exports.instance = instance;
