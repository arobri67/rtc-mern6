const express = require("express");
const router = express.Router();
const { getAllMice, getMouseById } = require("../controllers/mouseControllers");

//GET ALL
router.get("/", getAllMice);
router.get("/:id", getMouseById);

module.exports = router;
