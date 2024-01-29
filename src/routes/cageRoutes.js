const express = require("express");
const {
  getAllCages,
  getCageById,
  createCage,
  updateCage,
} = require("../controllers/cageControllers");
const router = express.Router();

//GET ALL
router.get("/", getAllCages);
router.get("/:id", getCageById);

//POST
router.post("/", createCage);

//PUT
router.put("/:id", updateCage);

module.exports = router;
