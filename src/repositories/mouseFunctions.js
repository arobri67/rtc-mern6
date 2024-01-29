const { Mouse } = require("../models/mice");

const getAllMiceDB = async () => {
  const mouse = Mouse.find({});
  return mouse;
};

const getMouseByIdDB = async (id) => {
  const mouse = Mouse.findById(id);
  return mouse;
};

module.exports = { getAllMiceDB, getMouseByIdDB };
