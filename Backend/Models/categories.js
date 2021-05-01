const mongoose = require("mongoose");

const Categories = new mongoose.Schema(
  {
    categoryName: String,
    isDeleted: false,
  },
  { timestamps: true }
);

module.exports = mongoose.model("categories", Categories);
