const mongoose = require("mongoose");
//const { Mouse } = require("./mice");

const cageSchema = new mongoose.Schema({
  name: String,
  location: String,
  rack: String,
  type: String,
  diet: String,
  enrichement: String,
  mice: [
    {
      mouseId: { type: mongoose.Schema.Types.ObjectId, ref: "Mouse" },
      identifier: String,
      earPunch: String,
      sex: String,
    },
  ],
});

const Cage = mongoose.model("Cage", cageSchema);

module.exports = { Cage };
