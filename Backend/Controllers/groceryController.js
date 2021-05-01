const Grocery = require("../Models/grocery");

// Create or Insert:
exports.create = (req, res) => {
  console.log(req.file);

  const grocery = {
    imagePath: "http://localhost:5000/public/grocery/" + req.file.filename,
    productName: req.body.productName,
    productCategory: req.body.productCategory,
    productRating: req.body.productRating,
    mrp: req.body.mrp,
    status: req.body.status,
    quantity: req.body.quantity,
    totalamount: req.body.totalamount,
    isDeleted: false,
  };
  console.log("Grocery: ", grocery);

  Grocery.create(grocery, function (err, result) {
    if (err)
      res.send({ status: "fail", message: "Fail to add Grocery!", err: err });
    else
      res.send({
        status: "success",
        message: "Grocery added successfully!",
        data: result,
      });
  });
};

// Get Product:
exports.findAll = (req, res) => {
  Grocery.find({ isDeleted: false })
    .then((grocery) => {
      if (!grocery) {
        res.json({ status: "Fail", message: "Failed to find grocery!" });
      }
      res.json({
        status: "Success",
        message: "Grocery found successfully!!!",
        data: grocery,
      });
    })
    .catch((err) => {
      res.json({
        status: "Fail",
        message: err.message || "Some other error occurred!",
      });
    });
};

// Get Product By Id:
exports.findById = (req, res) => {
  if (!req.params.Id) {
    return res.send({
      status: "Fail",
      message: "Grocery id not found!" + req.params.Id,
    });
  }
  Grocery.findById(req.params.Id)
    .then((grocery) => {
      if (!grocery) {
        res.json({
          status: "Fail",
          message: "Grocery data not found with id!",
          err: err,
        });
      }
      res.json({
        status: "Success",
        message: "Grocery data found with id!!!",
        data: grocery,
      });
    })
    .catch((err) => {
      res.json({
        status: "some other Error",
        message: err.message || "Some other error occurred!",
      });
    });
};

// Get Product & Show them through STATUS FILTER:
// Get Product By Filter:
exports.getFilterGrocery = (req, res) => {
  var query = {};
  query["isDeleted"] = false;
  if (req.body) {
    if (req.body.status && req.body.status !== "All") {
      query["status"] = req.body.status;
    }
  }
  console.log("query", query);
  Grocery.find(query)
    .then((grocery) => {
      if (!grocery || grocery <= 0)
        res.json({ status: "Fail", message: "Fail to get Grocery!" });
      else if (req.body.apiForm == "Admin") {
        res.json({
          status: "success",
          message: "Grocery found successfully!!!",
          data: grocery,
        });
      } else {
        res.json({
          status: "Fail",
          message: "Here no any data related to this status!",
        });
      }
    })
    .catch((err) => {
      res.send({
        status: "some other Error!",
        message: err.message || "Some error occurred!",
      });
    });
};

// Update Status:
exports.updateGroceryStatus = (req, res) => {
  if (!req.params.Id) {
    return res.send({
      status: "Fail",
      message: "Grocery not found with id!" + req.params.Id,
    });
  } else {
    Grocery.findByIdAndUpdate(
      req.params.Id,
      { $set: { status: req.body.status } },
      { new: false },
      function (err, result) {
        if (err) {
          res.json({
            status: "error",
            message: "Status not update!",
            err: err,
          });
        }
        res.json({
          status: "Success",
          message: "Grocery status is updated successfully!!!",
          data: result,
        });
      }
    );
  }
};

// Update Product:
exports.update = (req, res) => {
  if (!req.params.Id) {
    return res.send({
      status: "Fail",
      message: "Grocery not found with id" + req.params.Id,
    });
  }

  Grocery.findByIdAndUpdate(
    req.params.Id,
    { $set: req.body },
    { new: false },
    function (err, result) {
      if (err) {
        res.json({
          status: "error",
          message: "Grocery not updated!",
          err: err,
        });
      }
      res.json({
        status: "Success",
        message: "Grocery updated successfully!!!",
        data: result,
      });
    }
  );
};

// Delete Product:
exports.delete = (req, res) => {
  if (!req.params.Id) {
    return res.send({
      status: "Fail",
      message: "Grocery not found with id" + req.params.Id,
    });
  }

  Grocery.findByIdAndDelete(
    req.params.Id,
    { new: false },
    function (err, result) {
      if (err) {
        res.json({
          status: "Fail",
          message: "Grocery not deleted with id!",
          err: err,
        });
      }
      res.json({
        status: "Success",
        message: "Grocery deleted successfully!!!",
      });
    }
  );
};
