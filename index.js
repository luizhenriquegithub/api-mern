import express from "express";
import connectDataBase from "./src/database/db.js";
import userRoute from "./src/routes/user.route.js";

const app = express();
app.use(express.json());
app.use("/user", userRoute);

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

/** conexao com o bonco mongoose */
connectDataBase();
