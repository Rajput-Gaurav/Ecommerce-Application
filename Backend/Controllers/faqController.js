const FAQ = require("../Models/faq");

// CREATE
exports.create = (req, res) => {
  const faqObj = {
    question: req.body.question,
    answer: req.body.answer,
    isDeleted: false,
  };

  FAQ.create(faqObj, function (err, result) {
    if (err) {
      res.json({
        status: "fail",
        message: "fail to create faq!",
        err: err,
      });
    }
    res.json({
      status: "success",
      message: "faq created successfully!!!",
      data: result,
    });
  });
};

// GET ALL FAQ:
exports.findAll = (req, res) => {
  FAQ.find({ isDeleted: false })
    .then((faq) => {
      if (!faq) {
        res.json({ status: "fail", message: "fail to find faq!", err: err });
      }
      res.json({
        status: "success",
        message: "faq found successfully!!!",
        data: faq,
      });
    })
    .catch((err) => {
      res.json({ status: "fail", message: err.message || "some other error!" });
    });
};

// GET FAQ BY ID:
exports.findById = (req, res) => {
  if (!req.params.Id) {
    return res.send({
      status: "fail",
      message: "faq not found with id!" + req.params.Id,
    });
  }
  FAQ.findById(req.params.Id)
    .then((faq) => {
      if (!faq) {
        res.json({
          status: "fail",
          message: "fail to found data with Id!",
          err: err,
        });
      }
      res.json({
        status: "success",
        message: "faq found with id!!!",
        data: faq,
      });
    })
    .catch((err) => {
      res.json({ status: "fail", message: err.message || "some other errors" });
    });
};

// UPDATE FAQ BY ID:
exports.update = (req, res) => {
  if (!req.params.Id) {
    res.json({
      status: "fail",
      message: "faq not found with Id!" + req.params.Id,
    });
  }

  FAQ.findByIdAndUpdate(
    req.params.Id,
    { $set: req.body },
    { new: false },
    function (err, result) {
      if (err) {
        res.json({
          status: "fail",
          message: "fail to found faq with id!",
          err: err,
        });
      }
      res.json({
        status: "success",
        message: "faq updated with id",
        data: result,
      });
    }
  );
};

// DELETE FAQ BY ID:
exports.dalete = (req, res) => {
  if (!req.params.Id) {
    res.json({ status: "fail", message: "faq not with Id!" + req.params.Id });
  }
  FAQ.findByIdAndDelete(req.params.Id, { new: false }, function (err, result) {
    if (err) {
      res.json({ status: "fail", message: "faq not found with Id", err: err });
    }
    res.json({ status: "success", message: "faq deleted successfully!!!" });
  });
};
