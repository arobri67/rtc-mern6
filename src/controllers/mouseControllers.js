const {
  getAllMiceDB,
  getMouseByIdDB,
  createMouseDB,
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

module.exports = { getAllMice, getMouseById, createMouse };
