const User = require("../models/Users");

const create = (body) => {
  return User.create(body);
};

const getAll = () => User.find();

const getById = (id) => User.findById(id);

module.exports = {
  create,
  getAll,
  getById,
};
