const { Cage } = require("../models/cages");

const getAllCagesDB = async () => {
  const cage = Cage.find({});
  return cage;
};

const getCageByIdDB = async (id) => {
  const cage = Cage.findById(id);
  return cage;
};

module.exports = { getAllCagesDB, getCageByIdDB };
