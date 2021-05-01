const Cart = require("../Models/cart");

// CREATE:
exports.create = (req, res) => {
  cartObj = {
    userId: req.userId,
    productImage: req.body.productImage,
    productName: req.body.productName,
    productMrp: req.body.productMrp,
    productQuantity: req.body.productQuantity,
    totalamount: req.body.totalamount,
    isDeleted: false,
  };

  Cart.create(cartObj, function (err, result) {
    if (err) {
      res.json({ status: "fail", message: "fail to create cart!", err: err });
    }
    res.json({
      status: "success",
      message: "cart created successfully!!!",
      data: result,
    });
  });
};

exports.findAll = (req, res) => {
  Cart.find({ isDeleted: false })
    .then((cart) => {
      if (!cart) {
        res.json({ status: "fail", message: "fail to found cart!" });
      }
      res.json({
        status: "success",
        message: "cart found successfully!!!",
        data: cart,
      });
    })
    .catch((err) => {
      res.json({ status: "fail", message: "some other error occurred!" });
    });
};

exports.findById = (req, res) => {
  if (!req.params.Id) {
    res.json({
      status: "fail",
      message: "fail to found cart Id" + req.params.Id,
    });
  }

  Cart.findById(req.params.Id)
    .then((cart) => {
      if (!cart) {
        res.json({ status: "fail", message: "fail to found cart with id!" });
      }
      res.json({
        status: "success",
        message: "cart found successfully!!!",
        data: cart,
      });
    })
    .catch((err) => {
      res.json({ status: "fail", message: "some other error!" });
    });
};

exports.update = (req, res) => {
  if (!req.params.Id) {
    res.json({
      status: "fail",
      message: "fail to found cart id" + req.params.Id,
    });
  }

  Cart.findByIdAndUpdate(
    req.params.Id,
    { $set: req.body },
    { new: true },
    function (err, result) {
      if (err) {
        res.json({
          status: "fail",
          message: "fail to update cart through id!",
          err: err,
        });
      }
      res.json({
        status: "success",
        message: "cart updated successfully!!!",
        data: result,
      });
    }
  );
};

exports.delete = (req, res) => {
  if (!req.params.Id) {
    res.json({
      status: "fail",
      message: "fail to found cart id" + req.params.Id,
    });
  }

  Cart.findByIdAndDelete(req.params.Id, { new: false }, function (err, result) {
    if (err) {
      res.json({
        status: "fail",
        message: "fail to delete cart through id!",
        err: err,
      });
    }
    res.json({ status: "success", message: "cart deleted successfully!!!" });
  });
};
