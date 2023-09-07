const AnimalManager = require("../models/AnimalManager");

const AnimalInstance = new AnimalManager();

const browse = async (req, res) => {
  try {
    const [result] = await AnimalInstance.findAll();
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json;
  }
};

const readTenRandomly = async (req, res) => {
  try {
    const [result] = await AnimalInstance.findTenRandomly();
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json;
  }
};

module.exports = { browse, readTenRandomly };
