const express = require("express");
const port = 3333;

const app = express();

app.get("/projects", (req, res) => {
  return res.json({ message: "Hello world." });
});

app.listen(port, () => {
  console.log(` 🚀️ Server running in localhost:${port}`);
});

