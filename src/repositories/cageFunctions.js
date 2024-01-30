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
const addMouseToCageDB = async (id, mouseId) => {
  const updatedCage = await Cage.findById(id);
  const mouse = await Mouse.findById(mouseId);
  const isMousePresentInCage = updatedCage.mice.some(
    (currentMouse) => currentMouse._id.toString() === mouse._id.toString()
  );
  if (!isMousePresentInCage) {
    updatedCage.mice.push({
      identifier: mouse.identifier,
      _id: mouse._id,
      earPunch: mouse.earPunch,
      sex: mouse.sex,
    });
    mouse.cage_id = updatedCage._id;
  } else {
    updatedCage.mice = updatedCage.mice.filter(
      (currentMouse) => currentMouse._id.toString() !== mouse._id.toString()
    );
    mouse.cage_id = null;
  }
  await updatedCage.save();
  await mouse.save();
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
  addMouseToCageDB,
};
