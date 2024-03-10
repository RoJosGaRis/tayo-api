const express = require("express");
const router = express.Router();
const dins = require("../config");
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
    console.log(din.get("cantPosts") + 1);
    addPost(dinName, din.get("cantPosts") + 1);
    res.status(200).send({ msg: "Post added successfully" });
  } catch (error) {
    res.status(500).send({ msg: "Error adding post" });
  }
});

router.post("/getPosts", async (req, res) => {
  const { dinName } = req.body;
  const dinsRef = db.collection("dins");
  try {
    const posts = await dinsRef.doc(dinName).collection("posts").get();
    const data = posts.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt.toDate().toLocaleString(),
    }));
    res.send({ dinPostList: data });
  } catch (error) {
    res.status(500).send({ msg: "Error getting posts" });
  }
});

const addPost = async (dinName, cant) => {
  try {
    const dinsRef = db.collection("dins");
    const din = await dinsRef.doc(dinName).update({
      cantPosts: cant,
    });
  } catch (error) {
    return error;
  }
  return;
};

module.exports = router;
