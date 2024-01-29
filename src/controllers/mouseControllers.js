const { updateCageDB } = require("../repositories/cageFunctions");
const {
  getAllMiceDB,
  getMouseByIdDB,
  createMouseDB,
  updateMouseDB,
} = require("../repositories/mouseFunctions");

//GET ALL
const getAllMice = async (req, res) => {
  const mouse = await getAllMiceDB();
  res.status(200).json({ data: mouse });
};

//GET by ID

const getMouseById = async (req, res) => {
  const { id } = req.params;
  const mouse = await getMouseByIdDB(id);
  res.status(200).json({ data: mouse });
};

//POST
const createMouse = async (req, res) => {
  const payload = req.body;
  const newMouse = await createMouseDB(payload);
  res.status(201).json({ data: newMouse });
};

//PUT
const updateMouse = async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  const updatedMouse = await updateMouseDB(id, payload);
  res.status(201).json({ data: updatedMouse });
};

module.exports = { getAllMice, getMouseById, createMouse, updateMouse };
