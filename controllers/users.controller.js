const User = require("../model/User.model");

module.exports.usersController = {
  addUsers: async (req, res) => {
    const { name, DateOfBirth, privateAcc, saves } = req.body;
    try {
      const users = await User.create({
        name,
        DateOfBirth,
        privateAcc,
        saves,
      });
      res.json(users);
    } catch (error) {
      res.json(error.message);
    }
  },
  getUsers: async (req, res) => {
    try {
      const users = await User.find({});
      res.json(users);
    } catch (error) {
      res.json(error.message);
    }
  },
  deleteUsers: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.json("added user");
    } catch (error) {
      res.json(error.message);
    }
  },
  updateUsers: async (req, res) => {
    try {
      const { name, DateOfBirth, privateAcc, saves } = req.body;
      const users = await User.findByIdAndUpdate({
        name,
        DateOfBirth,
        privateAcc,
        saves,
      });
      res.json(users);
    } catch (error) {
      res.json(error.message);
    }
  },
  saves: async (req, res) => {
    if (User.findById(req.params.id).saves.includes(req.body._postId)) {
      return res.json("Уже есть");
    } else {
      User.findByIdAndUpdate(req.params.id, {
        $push: { saves: req.body._postId },
      });
    }
  },
};
