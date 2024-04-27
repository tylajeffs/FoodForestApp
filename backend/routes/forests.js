const express = require("express");
const {
  getForests,
  getForest,
  createForest, 
  deleteForest,
  updateForest
} = require('../controllers/forestController')
const requireAuth = require('../middleware/requireAuth')

//require auth for all forest routes
const router = express.Router();

router.use(requireAuth)

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
