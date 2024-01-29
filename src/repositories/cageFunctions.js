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

const updateCageDB = async (id, payload) => {
  const updatedCage = await Cage.findByIdAndUpdate(id, payload, { new: true });
  return updatedCage;
};

module.exports = { getAllCagesDB, getCageByIdDB, createCageDB, updateCageDB };
