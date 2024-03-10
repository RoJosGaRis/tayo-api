const express = require("express");
const app = express();
const dinRouter = require("./routes/dins");

const port = 3000;

app.use("/dins", dinRouter);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server running at PORT:${port}`);
});
