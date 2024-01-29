const express = require("express");
const {
  getAllCages,
  getCageById,
  createCage,
} = require("../controllers/cageControllers");
const router = express.Router();

//GET ALL
router.get("/", getAllCages);
router.get("/:id", getCageById);

//POST
router.post("/", createCage);

module.exports = router;
