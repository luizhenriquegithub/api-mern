const mongoose = require("mongoose");
const userService = require("../services/user.services");

const validId = (req, res, next) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "invalid id !" });
  }

  next();
};

const validUser = async (req, res, next) => {
  const id = req.params.id;

  const user = await userService.getById(id);

  if (!user) {
    return res.status(400).send({ message: "user not found !" });
  }

  req.id = id;
  req.user = user;

  next();
};

module.exports = { validId, validUser };
