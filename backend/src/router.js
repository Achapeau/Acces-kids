const express = require("express");

const router = express.Router();

const animalControllers = require("./controllers/animalControllers");

router.get("/alphabetgame", animalControllers.readTenRandomly);
router.get("/iaimage", animalControllers.readOneImage);
router.get("/iaimageletter", animalControllers.readOneImageAndLetter);

module.exports = router;
