const express = require("express");
const {
  getAllCages,
  getCageById,
  createCage,
  updateCage,
  deleteCage,
  getAllMiceInACage,
  addMouseToCage,
} = require("../controllers/cageControllers");
const router = express.Router();

//GET
//ALL
router.get("/", getAllCages);
//cage by id
router.get("/:id", getCageById);
//all mice in a cage
router.get("/mice-list/:id", getAllMiceInACage);

//POST create a cage
router.post("/", createCage);

//PUT update a cage
router.put("/:id", updateCage);
//add a mouse to a cage (if it is already in the cage it will be removed)
router.put("/add-mouse-to-cage/:id", addMouseToCage);

//DELETE remove a cage
router.delete("/:id", deleteCage);

module.exports = router;
