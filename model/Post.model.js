const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  _userId: {
    ref: "User",
    type: mongoose.SchemaTypes.ObjectId,
    default: null,
  },
  tittle: {
    type: String,
    default: "JS",
  },
  text: {
    type: String,
    default: "Ничего ты не знаешь о JS",
  },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
