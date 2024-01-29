const {
  getAllCagesDB,
  getCageByIdDB,
  createCageDB,
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

const createCage = async (req, res) => {
  const payload = req.body;
  console.log(payload);
  const newCage = await createCageDB(payload);
  res.status(201).json({ data: newCage });
};

module.exports = { getAllCages, getCageById, createCage };
