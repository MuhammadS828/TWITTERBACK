const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  _userId: {
    type: mongoose.SchemaTypes.ObjectId,
    default: null,
    ref: "User",
  },
  text: {
    type: String,
    default: "ту может быть всякое",
  },
  _postId: {
    type: mongoose.SchemaTypes.ObjectId,
    default: null,
    ref: "Post",
  },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
