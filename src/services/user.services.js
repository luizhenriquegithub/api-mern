import User from "../models/Users.js";

const create = (body) => {
  return User.create(body);
};

const getAll = () => User.find();

const getById = (id) => User.findById(id);

const update = (id, name, username, email, password, avatar, background) =>
  User.findOneAndUpdate(
    { _id: id },
    { name, username, email, password, avatar, background }
  );

export default {
  create,
  getAll,
  getById,
  update,
};
