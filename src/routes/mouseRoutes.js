const express = require("express");
const router = express.Router();
const {
  getAllMice,
  getMouseById,
  createMouse,
  updateMouse,
} = require("../controllers/mouseControllers");

//GET ALL
router.get("/", getAllMice);
router.get("/:id", getMouseById);

//POST
router.post("/", createMouse);

//PUT
router.put("/:id", updateMouse);

module.exports = router;
