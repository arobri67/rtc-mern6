const { Cage } = require("../models/cages");
const { Mouse } = require("../models/mice");

//GET ALL cages from the DB
const getAllCagesDB = async () => {
  const cage = Cage.find({});
  return cage;
};

//GET a cage by ID from DB
const getCageByIdDB = async (id) => {
  const cage = await Cage.findById(id);
  return cage;
};

//GET all mice from on cage grabbed by ID
const getAllMiceInACageDB = async (id) => {
  const cage = await Cage.findById(id).populate({
    path: "mice",
    model: "Mouse",
    select: "-cage_id -__v",
  });
  return cage.mice;
};

//POST create a cage
const createCageDB = async (payload) => {
  const newCage = new Cage(payload);
  await newCage.save();
  return newCage;
};

//PUT update a cage
const updateCageDB = async (id, payload) => {
  const updatedCage = await Cage.findByIdAndUpdate(id, payload, { new: true });
  return updatedCage;
};

//PUT add a mouse to a cage grabbed by ID (if it is already in the cage it will be removed). It will also change the cage_id in the corresponding mouse in the Mouse document

const addMouseToCageDB = async (id, mouseId) => {
  const updatedCage = await Cage.findById(id);
  const mouse = await Mouse.findById(mouseId);
  // check if the mouse id is present in the mice field of the Cage document
  const isMousePresentInCage = updatedCage.mice.some(
    (currentMouse) => currentMouse._id.toString() === mouse._id.toString()
  );
  //if not push the mouse id into the mice field of the Cage docuemnt
  if (!isMousePresentInCage) {
    updatedCage.mice.push({
      _id: mouse._id,
    });
    mouse.cage_id = updatedCage._id;
  }
  //if yes, remove the mouse id from mice field of the Cage document and remove the Cage Id in the corresponding mouse in the Mouse document
  else {
    updatedCage.mice = updatedCage.mice.filter(
      (currentMouse) => currentMouse._id.toString() !== mouse._id.toString()
    );
    mouse.cage_id = null;
  }
  await updatedCage.save();
  await mouse.save();
  return updatedCage;
};

//DELETE remove a cage
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
