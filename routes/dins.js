const express = require("express");
const router = express.Router();

// Define a simple GET endpoint
router.get("/", (req, res) => {
  res.send("Welcome to my API!");
});

module.exports = router;
