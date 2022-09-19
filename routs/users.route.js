const { Router } = require("express");
const { usersController } = require("../controllers/users.controller");

const router = Router();

router.post("/users", usersController.addUsers),
  router.get("/users", usersController.getUsers),
  router.delete("/users/:id", usersController.deleteUsers),
  router.patch("/users/:id", usersController.updateUsers),
  router.patch("/saves", usersController.saves);

module.exports = router;
