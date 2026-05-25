const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hii Akash Kannan Github Action is completely workign properly");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
