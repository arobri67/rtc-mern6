const express = require("express");
const router = express.Router();
const {
  getAllMice,
  getMouseById,
  createMouse,
} = require("../controllers/mouseControllers");

//GET ALL
router.get("/", getAllMice);
router.get("/:id", getMouseById);

//POST
router.post("/", createMouse);

module.exports = router;
