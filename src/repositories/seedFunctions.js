const seedData = require("../seedData");
const { Mouse } = require("../models/mice");
const { Cage } = require("../models/cages");

const clearDataDB = async () => {
  await Cage.collection.drop();
  await Mouse.collection.drop();
  console.log("Database cleared!!");
};

const seedCagesDB = async () => {
  try {
    const cages = await Cage.create(seedData.cages);
    return cages;
  } catch (err) {
    "Error while adding cage data DB", err;
  }
};

const seedMiceDB = async (cages) => {
  try {
    const mice = await Mouse.create(
      seedData.mice.map((mouse) => ({
        identifier: mouse.identifier,
        earPunch: mouse.earPunch,
        strain: mouse.strain,
        sex: mouse.sex,
        dateOfBirth: mouse.dateOfBirth,
        genotype: mouse.genotype,
        fatherId: mouse.fatherId,
        motherId: mouse.motherId,
        cage_id: cages[mouse.cageID]._id,
      }))
    );
    return mice;
  } catch (err) {
    console.log(" Error while adding data with cage Id to DB", err);
  }
};

const addMiceToCageDB = async (cages, mice) => {
  for (let i = 0; i < cages.length; i++) {
    const cage = cages[i];
    const cageMice = [];
    for (let j = 0; j < mice.length; j++) {
      const mouse = mice[j];
      if (String(mouse.cage_id) === String(cage._id)) {
        cageMice.push({
          _id: mouse._id,
          identifier: mouse.identifier,
          earPunch: mouse.earPunch,
          sex: mouse.sex,
        });
      }
    }
    cage.mice = cageMice;
    await cage.save();
  }
};

module.exports = { clearDataDB, seedMiceDB, seedCagesDB, addMiceToCageDB };
