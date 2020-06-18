const express = require("express");
const MongoClient = require("mongodb");
require("dotenv").config();

const dbUrl = process.env.DB_URL;

MongoClient.connect(
  dbUrl,
  {
    useUnifiedTopology: true,
  },
  (err, database) => {
    if (err) return console.log(err);
    console.log("Connected to Database");
  }
);

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
