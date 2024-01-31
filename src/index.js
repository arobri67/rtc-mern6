const express = require("express");
require("./config/db");
const { seedDataInitDB } = require("./repositories/seedFunctions");
const mouseRoutes = require("./routes/mouseRoutes");
const cageRoutes = require("./routes/cageRoutes");
const baseRoutes = require("./routes/baseRoutes");

const app = express();
app.use(express.json());

// Inital DATA Seeding
seedDataInitDB();

// ENDPOINTS
app.use("/mice", mouseRoutes);
app.use("/cages", cageRoutes);
app.use("/", baseRoutes);

//GENERAL error handeling
app.use("*", (req, res) => {
  res.status(404).send("Error 404, wrong URL request");
});
app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).send("500 Internal server error");
});

// PORT and server initialization
const PORT = 4001;
app.listen(PORT, () => {
  console.log(`[***] Server listening on http://localhost:${PORT} [***]`);
});
