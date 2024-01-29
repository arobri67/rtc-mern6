const express = require("express");
const {
  seedMiceDB,
  seedCagesDB,
  clearDataDB,
  addMiceToCageDB,
} = require("./repositories/seedFunctions");

require("./config/db");
const app = express();
app.use(express.json());

const seedDataInitDB = async () => {
  try {
    await clearDataDB();
    const cages = await seedCagesDB();
    const mice = await seedMiceDB(cages);
    await addMiceToCageDB(cages, mice);
    console.log("Successfully seeded data!!");
  } catch (err) {
    console.error("Error while seeding data", err);
  }
};
seedDataInitDB();

const PORT = 4001;
app.listen(PORT, () => {
  console.log(`[***] Server listening on http://localhost:${PORT} [***]`);
});
