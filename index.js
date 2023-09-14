const express = require("express");
const connectDataBase = require("./src/database/db");
const userRoute = require("./src/routes/user.route");

const app = express();
const port = 3000;

/** conexao com o bonco mongoose */
connectDataBase();

app.use("/user", userRoute);
app.use(express.json());

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
