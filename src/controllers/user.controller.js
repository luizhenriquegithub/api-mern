const userService = require("../services/user.services");
const mongoose = require("mongoose");

const create = async (req, res) => {
  const { name, username, email, password, avatar, background } = req.body;

  if (!name || !username || !email || !password || !avatar || !background) {
    res.status(400).send({ message: "Sumit all fields for registration" });
  }

  const user = await userService.create(req.body);

  if (!user) {
    return res.status(400).send({ message: "Error creating User" });
  }

  res.status(201).json({
    message: "user created success !!!",
    user: {
      id: user._id,
      name,
      username,
      email,
      password,
      avatar,
      background,
    },
  });
};

const getAll = async (req, res) => {
  const users = await userService.getAll();

  if (users.length === 0) {
    return res.status(400).send({ message: "There are not registered users" });
  }

  res.send(users);
};

const getById = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "invalid Id" });
  }

  const user = await userService.getById(id);

  if (!user) {
    return res.status(400).send({ message: "user not found" });
  }

  res.send(user);
};

const update = async (req, res) => {
  const { name, username, email, password, avatar, background } = req.body;

  if (!name && !username && !email && !password && !avatar && !background) {
    res.status(400).send({ mesage: "submit at least one field for update" });
  }

  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "invalid id" });
  }

  const user = await userService.getById(id);

  if (!user) {
    return res.status(400).send({ message: "user not found" });
  }

  await userService.update(
    id,
    name,
    username,
    email,
    password,
    avatar,
    background
  );

  res.send({ message: "user successfull update!" });
};

module.exports = { create, getAll, getById, update };
