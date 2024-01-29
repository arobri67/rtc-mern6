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

module.exports = { getAllMiceDB, getMouseByIdDB, createMouseDB };
