const express = require("express");
const router = express.Router();
const dins = require("../config");
const { uploadProcessedData } = require("../config");
const { db } = require("../admin");

router.post("/addPost", async (req, res) => {
  const { dinName, content, createdBy, title } = req.body;
  const dinsRef = db.collection("dins");
  try {
    const din = await dinsRef.doc(dinName).get();
    if (!din.exists) {
      res.status(400).send({ msg: "Din does not exist" });
      return;
    }
    const newPost = await dinsRef.doc(dinName).collection("posts").add({
      content,
      createdBy,
      title,
      createdAt: new Date(),
      growths: 0,
      plucks: 0,
    });
    res.status(200).send({ msg: "Post added successfully" });
  } catch (error) {
    res.status(500).send({ msg: "Error adding post" });
  }
});

module.exports = router;
