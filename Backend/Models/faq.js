const mongoose = require("mongoose");

const FaqSchema = new mongoose.Schema(
  {
    question: { type: String, trim: true },
    answer: { type: String, trim: true },
    isDeleted: false,
  },
  { timestamps: true }
);

module.exports = mongoose.model("FAQ", FaqSchema);
