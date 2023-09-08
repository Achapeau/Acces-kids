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

const readTenRandomly = async (req, res) => {
  try {
    const [result] = await AnimalInstance.findTenRandomly();
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json;
  }
};

const readOneImage = async (req, res) => {
  try {
    const [result] = await AnimalInstance.findOneImage();
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json;
  }
};

const readRandomOneImage = async (req, res) => {
  try {
    const [result] = await AnimalInstance.findThreeImageAndLetter();
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json;
  }
};

const readThreeImageAndLetter = async (req, res) => {
  try {
    const [result] = await AnimalInstance.findThreeImageAndLetter();
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json;
  }
};

module.exports = {
  browse,
  getImages,
  readTenRandomly,
  readOneImage,
  readThreeImageAndLetter,
  readRandomOneImage,
};
