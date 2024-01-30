const { Mouse } = require("../models/mice");

//GET all mice
const getAllMiceDB = async () => {
  const mouse = Mouse.find({});
  return mouse;
};

//GET mouse by ID
const getMouseByIdDB = async (id) => {
  const mouse = Mouse.findById(id);
  return mouse;
};

//GET cage of a mouse
const getCageOfMouseDB = async (id) => {
  const cage = await Mouse.findById(id).populate("cage_id");
  return cage.cage_id;
};

//POST create a mouse
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
};
