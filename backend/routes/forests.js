const express = require("express");
const {
  getForests,
  getForest,
  createForest
} = require('../controllers/forestController')

const router = express.Router();

//GET all forests
router.get("/", getForests);

//GET a single forest
router.get("/:id", getForest);

//POST a new forest
router.post("/", createForest);

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
