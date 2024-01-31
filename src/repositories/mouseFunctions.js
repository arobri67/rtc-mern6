const { Cage } = require("../models/cages");
const { Mouse } = require("../models/mice");

//GET ALL mice from the DB
const getAllMiceDB = async () => {
  const mouse = Mouse.find({});
  return mouse;
};

//GET a mouse by id
const getMouseByIdDB = async (id) => {
  const mouse = Mouse.findById(id);
  return mouse;
};

//GET the cage of a mouse
const getCageOfMouseDB = async (id) => {
  const cage = await Mouse.findById(id).populate("cage_id");
  return cage.cage_id;
};

//POST create a new mouse
const createMouseDB = async (payload) => {
  const newMouse = new Mouse(payload);
  await newMouse.save();
  return newMouse;
};

//PUT update a mouse
const updateMouseDB = async (id, payload) => {
  const updatedMouse = Mouse.findByIdAndUpdate(id, payload, { new: true });
  return updatedMouse;
};

//PUT update/delete the cage from a mouse
const updateMouseCageDB = async (id, action, cageId) => {
  const updatedMouse = await Mouse.findById(id);
  const cage = await Cage.findById(cageId);
  if (action === "add") {
    updatedMouse.cage_id = cageId;
    cage.mice.push({ _id: id });
  } else if (action === "delete") {
    updatedMouse.cage_id = null;
    cage.mice = cage.mice.filter(
      (currentMouse) => currentMouse._id.toString() !== id.toString()
    );
  }
  await updatedMouse.save();
  await cage.save();
  return updatedMouse;
};

//DELETE a mouse
const deleteMouseDB = async (id) => {
  await Mouse.findByIdAndDelete(id);
};

module.exports = {
  getAllMiceDB,
  getMouseByIdDB,
  createMouseDB,
  updateMouseDB,
  deleteMouseDB,
  getCageOfMouseDB,
  updateMouseCageDB,
};
