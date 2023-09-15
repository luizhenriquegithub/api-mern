import Users from "../models/Users.js";

const loginService = (email) =>
  Users.findOne({ email: email }).select("+password");

export { loginService };
