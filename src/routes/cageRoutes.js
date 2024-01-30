const express = require("express");
const {
  getAllCages,
  getCageById,
  createCage,
  updateCage,
  deleteCage,
  getAllMiceInACage,
} = require("../controllers/cageControllers");
const router = express.Router();

//GET ALL
router.get("/", getAllCages);
router.get("/:id", getCageById);
router.get("/mice-list/:id", getAllMiceInACage);

//POST
router.post("/", createCage);

//PUT
router.put("/:id", updateCage);

//DELETE
router.delete("/:id", deleteCage);

module.exports = router;
