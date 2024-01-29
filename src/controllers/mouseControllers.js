const {
  getAllMiceDB,
  getMouseByIdDB,
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

module.exports = { getAllMice, getMouseById };
