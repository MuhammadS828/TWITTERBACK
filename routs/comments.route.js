const { Router } = require("express");
const { commentsController } = require("../controllers/comments.controller");

const router = Router();

router.post("/posts/comments", commentsController.addComment),
  router.get("/posts/comments/:id", commentsController.commentsByPostsId),
  router.delete("/posts/comments/:id", commentsController.deleteComment),
  (module.exports = router);
