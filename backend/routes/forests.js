const express = require("express");

const router = express.Router();

//GET all forests
router.get("/", (req, res) => {
  res.json({ mssg: "GET all forests" });
});

//GET a single forest
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET a single forest" });
});

//POST a new forest
router.post("/", (req, res) => {
  res.json({ mssg: "POST a new forest" });
});

//DELETE a forest
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a forest" });
});

//UPDATE a forest
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a forest" });
});

//export all routes
module.exports = router;
