const mongoose = require("mongoose");

const referralSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, match: /.+\@.+\..+/ },
    referralCode: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Referral", referralSchema);
