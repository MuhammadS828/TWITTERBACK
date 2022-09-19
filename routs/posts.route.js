const { Router } = require("express");
const { postsController } = require("../controllers/posts.controller");

const router = Router();

router.post("/posts", postsController.addPost),
  router.get("/posts", postsController.getAllPost),
  router.delete("/posts/:id", postsController.deletePost),
  router.patch("/posts/:id", postsController.updatePost),
  router.patch("/posts/:id/likes", postsController.likes);

module.exports = router;
