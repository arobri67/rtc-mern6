const { Cage } = require("../models/cages");
const { Mouse } = require("../models/mice");

//GET all cages
const getAllCagesDB = async () => {
  const cage = Cage.find({});
  return cage;
};

// GET cage by id
const getCageByIdDB = async (id) => {
  const cage = await Cage.findById(id);
  return cage;
};

//GET all mice in a cage
const getAllMiceInACageDB = async (id) => {
  const cage = await Cage.findById(id);
  //console.log(cage.mice[0]._id.toString());
  const miceList = [];
  for (i = 0; i < cage.mice.length; i++) {
    const mouse = cage.mice[i];
    miceList.push(await Mouse.findById(mouse._id.toString()));
  }
  return miceList;
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

const deleteCageDB = async (id) => {
  await Cage.findByIdAndDelete(id);
};

module.exports = {
  getAllCagesDB,
  getCageByIdDB,
  createCageDB,
  updateCageDB,
  deleteCageDB,
  getAllMiceInACageDB,
};
