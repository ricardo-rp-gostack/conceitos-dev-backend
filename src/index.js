const express = require("express");

const app = express();

app.get("/projects", (req, res) => {
  return res.json({ message: "Hello world." });
});

app.listen(3333);
