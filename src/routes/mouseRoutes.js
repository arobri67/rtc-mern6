const express = require("express");
const router = express.Router();
const {
  getAllMice,
  getMouseById,
  createMouse,
  updateMouse,
  deleteMouse,
  getCageOfMouse,
} = require("../controllers/mouseControllers");

//GET
//ALL mice
router.get("/", getAllMice);
//mouse by id
router.get("/:id", getMouseById);
// cage from a mouse
router.get("/cage/:id", getCageOfMouse);

//POST create a new mouse
router.post("/", createMouse);

//PUT update a mouse
router.put("/:id", updateMouse);

//DELETE a mouse
router.delete("/:id", deleteMouse);

module.exports = router;
