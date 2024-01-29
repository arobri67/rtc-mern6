const { Cage } = require("../models/cages");

const getAllCagesDB = async () => {
  const cage = Cage.find({});
  return cage;
};

const getCageByIdDB = async (id) => {
  const cage = Cage.findById(id);
  return cage;
};

const createCageDB = async (payload) => {
  const newCage = new Cage(payload);
  await newCage.save();
  return newCage;
};

module.exports = { getAllCagesDB, getCageByIdDB, createCageDB };
