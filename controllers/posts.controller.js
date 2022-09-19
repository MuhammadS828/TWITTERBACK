const Post = require("../model/Post.model");

module.exports.postsController = {
  addPost: async (req, res) => {
    const { _userId, tittle, text, likes } = req.body;
    try {
      const posts = await Post.create({
        _userId,
        tittle,
        text,
        likes,
      });
      res.json(posts);
    } catch (error) {
      res.json(error.message);
    }
  },
  deletePost: async (req, res) => {
    try {
      await Post.findByIdAndDelete(req.params.id);
      res.json("post added");
    } catch (error) {
      res.json(error.message);
    }
  },
  updatePost: async (req, res) => {
    const { _userId, tittle, text, likes } = req.body;
    try {
      const posts = await Post.findByIdAndUpdate(req.params.id, {
        _userId,
        tittle,
        text,
        likes,
      });
      res.json(posts);
    } catch (error) {
      res.json(error.message);
    }
  },
  getAllPost: async (req, res) => {
    try {
      const posts = await Post.find().populate("userId", "name");
      res.json(posts);
    } catch (error) {
      res.json(error.message);
    }
  },
  likes: (req, res) => {
    if (Post.findById(req.params.id).likes.includes(req.body._userId)) {
      return res.json("Уже есть");
    } else {
      Post.findByIdAndUpdate(req.params.id, {
        $push: { likes: req.body._userId },
      });
    }
  },
};
