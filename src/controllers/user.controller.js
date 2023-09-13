const create = (req, res) => {
  const { name, username, email, password, avatar, background } = req.body;

  if (!name || !username || !email || !password || !avatar || !background) {
    res.status(400).send({ message: "Sumit all fields for registration" });
  }

  res.status(201).json({
    message: "user created success !!!",
    user: {
      name,
      username,
      email,
      password,
      avatar,
      background,
    },
  });
};

module.exports = { create };
