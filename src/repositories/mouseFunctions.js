const { Mouse } = require("../models/mice");

const getAllMiceDB = async () => {
  const mouse = Mouse.find({});
  return mouse;
};

const getMouseByIdDB = async (id) => {
  const mouse = Mouse.findById(id);
  return mouse;
};

const createMouseDB = async (payload) => {
  const newMouse = new Mouse(payload);
  await newMouse.save();
  return newMouse;
};

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
};
