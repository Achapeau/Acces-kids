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

const getImages = async (req, res) => {
  const number = parseInt(req.params.number);

  try {
    const [result] = await AnimalInstance.findImages(number);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json;
  }
};

module.exports = { browse, getImages };
