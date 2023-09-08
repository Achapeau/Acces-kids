const express = require("express");

const router = express.Router();

const animalControllers = require("./controllers/animalControllers");

router.get("/alphabetgame", animalControllers.readTenRandomly);
router.get("/iacompter", animalControllers.readRandomOneImage);
router.get("/iaalphabet", animalControllers.readThreeImageAndLetter);

router.get("/numbers/:number", animalControllers.getImages);

module.exports = router;
