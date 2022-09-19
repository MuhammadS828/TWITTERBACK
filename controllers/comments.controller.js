const Comment = require("../model/Comment");
module.exports.commentsController = {
  addComment: async (req, res) => {
    const { _userId, text, _postId } = req.body;
    try {
      const comments = await Comment.create({
        _userId,
        text,
        _postId,
      });
      res.json(comments);
    } catch (error) {
      res.json(error.message);
    }
  },
  deleteComment: async (req, res) => {
    try {
      await Comment.findByIdAndDelete(req.params.id);
      res.json("added comment");
    } catch (error) {
      res.json(error.message);
    }
  },
  commentsByPostsId: async (req, res) => {
    try {
      const comments = await Comment.find({ _postId: req.params.id }).populate(
        "_userId _postId",
        "name tiitle"
      );
      res.json(comments);
    } catch (error) {
      res.json(error.message);
    }
  },
};
