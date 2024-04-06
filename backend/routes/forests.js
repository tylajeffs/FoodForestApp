const express = require("express");
const {
  getForests,
  getForest,
  createForest, 
  deleteForest,
  updateForest
} = require('../controllers/forestController')

const router = express.Router();

//GET all forests
router.get("/", getForests);

//GET a single forest
router.get("/:id", getForest);

//POST a new forest
router.post("/", createForest);

//DELETE a forest
router.delete("/:id", deleteForest);

//UPDATE a forest
router.patch("/:id", updateForest);

//export all routes
module.exports = router;
