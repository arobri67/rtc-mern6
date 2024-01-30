const {
  getAllMiceDB,
  getMouseByIdDB,
  createMouseDB,
  updateMouseDB,
  deleteMouseDB,
  getCageOfMouseDB,
} = require("../repositories/mouseFunctions");

//GET ALL
const getAllMice = async (req, res) => {
  const mouse = await getAllMiceDB();
  res
    .status(200)
    .json({ data: mouse.sort((a, b) => a.identifier - b.identifier) });
};

//GET by ID

const getMouseById = async (req, res) => {
  const { id } = req.params;
  const mouse = await getMouseByIdDB(id);
  res.status(200).json({ data: mouse });
};

//GET cage of a mouse
const getCageOfMouse = async (req, res) => {
  const { id } = req.params;
  const cage = await getCageOfMouseDB(id);
  const { mice, ...rest } = cage.toObject();
  res.status(200).json({ data: rest });
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
  getCageOfMouse,
};
