const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello, world");
});

app.get("/quotes", (req, res) => {
  res.json({ data: "get" });
});

app.post("/quotes", (req, res) => {
  res.json({ data: "post" });
});

app.put("/", (req, res) => {
  res.json({ data: "update" });
});

app.delete("/quotes", (req, res) => {
  res.json({ data: "delete" });
});

app.listen(8000, () => {
  console.log("Server running in http://localhost:8000/");
});
