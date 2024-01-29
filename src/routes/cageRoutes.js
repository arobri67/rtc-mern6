const express = require("express");
const { getAllCages, getCageById } = require("../controllers/cageControllers");
const router = express.Router();

//GET ALL
router.get("/", getAllCages);
router.get("/:id", getCageById);

module.exports = router;
