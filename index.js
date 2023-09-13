const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello word luiz !!");
});

app.get("/soma", (req, res) => {
  res.send("soma teste string kkkkk");
});

app.listen(3000);
