const {
  getAllCagesDB,
  getCageByIdDB,
} = require("../repositories/cageFunctions");

//GET ALL
const getAllCages = async (req, res) => {
  const cage = await getAllCagesDB();
  res.status(200).json({ data: cage });
};

//GET by ID
const getCageById = async (req, res) => {
  const { id } = req.params;
  const cage = await getCageByIdDB(id);
  res.status(200).json({ data: cage });
};

module.exports = { getAllCages, getCageById };
