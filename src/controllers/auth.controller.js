import bcrypt from "bcrypt";
import { loginService } from "../services/auth.services.js";

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await loginService(email);

    if (!user) {
      return res.status(404).send({ message: "user not found !!" });
    }

    const passwordIsValid = await bcrypt.compare(password, user.password);

    if (!passwordIsValid) {
      return res.status(400).send({ message: "invalid password !!" });
    }

    res.send({ message: "user login ok !!" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export { login };
