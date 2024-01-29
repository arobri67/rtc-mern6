const { updateCageDB, deleteCageDB } = require("../repositories/cageFunctions");
const {
  getAllMiceDB,
  getMouseByIdDB,
  createMouseDB,
  updateMouseDB,
  deleteMouseDB,
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

//DELETE
const deleteMouse = async (req, res) => {
  const { id } = req.params;
  deleteMouseDB(id);
  res.status(201).send("Mouse deleted successfully");
};

module.exports = {
  getAllMice,
  getMouseById,
  createMouse,
  updateMouse,
  deleteMouse,
};
