import express from "express";
import connectDataBase from "./src/database/db.js";
import dotenv from "dotenv";

import userRoute from "./src/routes/user.route.js";
import authRoute from "./src/routes/auth.route.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/user", userRoute);
app.use("/auth", authRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

/** conexao com o bonco mongoose */
connectDataBase();
