const express = require("express");
const router = express.Router();
const {
  getAllMice,
  getMouseById,
  createMouse,
  updateMouse,
  deleteMouse,
} = require("../controllers/mouseControllers");

//GET ALL
router.get("/", getAllMice);
router.get("/:id", getMouseById);

//POST
router.post("/", createMouse);

//PUT
router.put("/:id", updateMouse);

//DELETE
router.delete("/:id", deleteMouse);

module.exports = router;
