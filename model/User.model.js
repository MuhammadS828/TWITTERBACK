const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    default: "Здравстуйте, Тимур",
  },
  DateOfBirth: {
    type: String,
    default: "01.02.2000",
  },
  privateAcc: {
    type: Boolean,
    default: false,
  },
  saves: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
