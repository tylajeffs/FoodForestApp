const express = require("express");
const Forest = require("../models/ForestModel");

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
router.post("/", async (req, res) => {
  const {
    title,
    ecoregion,
    canopy,
    subCanopy,
    shrub,
    herb,
    groundCover,
    underground,
    vine,
    fungi,
  } = req.body;

  try {
    const forest = await Forest.create({
      title,
      ecoregion,
      canopy,
      subCanopy,
      shrub,
      herb,
      groundCover,
      underground,
      vine,
      fungi
    });

    res.status(200).json(forest);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
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
