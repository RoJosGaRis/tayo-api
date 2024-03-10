const express = require("express");
const router = express.Router();
const dins = require("../config");
const { uploadProcessedData } = require("../config");
const { db } = require("../admin");

// Define a simple GET endpoint
router.get("/", (req, res) => {
  res.send("Welcome to my API!");
});

router.post("/getDins", async (req, res) => {
  const dinsRef = db.collection("dins");
  try {
    dinsRef.get().then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      res.send(data);
    });
  } catch (error) {
    res.status(500).send({ msg: "Error getting din" });
  }
});

router.post("/addDin", async (req, res) => {
  const { name, createdBy } = req.body;
  const dinsRef = db.collection("dins");
  try {
    const din = await dinsRef.doc(name).get();
    if (din.exists) {
      res.status(400).send({ msg: "Din already exists" });
      return;
    }
    const newDin = await dinsRef.doc(name).set({
      name,
      createdBy,
      cantPosts: 0,
    });
    res.status(200).send({ name: name, createdBy: createdBy });
  } catch (error) {
    res.status(500).send({ msg: "Error adding din" });
  }
});

router.post("/getDins", async (req, res) => {
  try {
    const dinsRef = db.collection("dins");
    dinsRef.get().then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      res.send(data);
    });
  } catch (error) {
    res.status(500).send({ msg: "Error getting dins" });
  }
});

module.exports = router;
