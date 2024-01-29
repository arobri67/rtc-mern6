const express = require("express");
const {
  getAllCages,
  getCageById,
  createCage,
  updateCage,
  deleteCage,
} = require("../controllers/cageControllers");
const router = express.Router();

//GET ALL
router.get("/", getAllCages);
router.get("/:id", getCageById);

//POST
router.post("/", createCage);

//PUT
router.put("/:id", updateCage);

//DELETE
router.delete("/:id", deleteCage);

module.exports = router;
