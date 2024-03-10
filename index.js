require("dotenv").config();
const express = require("express");
const app = express();
const dinRouter = require("./routes/dins");
const postRouter = require("./routes/posts");
const { apps } = require("firebase-admin");
// const { initializeFirebaseApp } = require("./config");

const port = 3000;
// initializeFirebaseApp();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/dins", dinRouter);
app.use("/posts", postRouter);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server running at PORT:${port}`);
});
