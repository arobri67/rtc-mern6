const {
  getAllCagesDB,
  getCageByIdDB,
  createCageDB,
  updateCageDB,
  deleteCageDB,
  getAllMiceInACageDB,
} = require("../repositories/cageFunctions");

//GET ALL
const getAllCages = async (req, res) => {
  const cage = await getAllCagesDB();
  res.status(200).json({ data: cage.sort((a, b) => a.type - b.type) });
};

//GET by ID
const getCageById = async (req, res) => {
  const { id } = req.params;
  const cage = await getCageByIdDB(id);
  res.status(200).json({ data: cage });
};

//GET all mouse in a cage
const getAllMiceInACage = async (req, res) => {
  const { id } = req.params;
  const mice = await getAllMiceInACageDB(id);
  res.status(200).json({ data: mice });
};

//POST
const createCage = async (req, res) => {
  const payload = req.body;
  const newCage = await createCageDB(payload);
  res.status(201).json({ data: newCage });
};

//PUT
const updateCage = async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  const updatedCage = await updateCageDB(id, payload);
  res.status(201).json({ data: updatedCage });
};

//DELETE
const deleteCage = async (req, res) => {
  const { id } = req.params;
  deleteCageDB(id);
  res.status(201).send("Cage deleted successfully");
};

module.exports = {
  getAllCages,
  getCageById,
  createCage,
  updateCage,
  deleteCage,
  getAllMiceInACage,
};
