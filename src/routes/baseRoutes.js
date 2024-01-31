const express = require("express");
const router = express.Router();

//GET welcome message
router.get("/", (req, res) => {
  res.status(200).send("Welcome to MERN6 Express Server!");
});

module.exports = router;
