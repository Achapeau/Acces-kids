const express = require("express");

const router = express.Router();

const animalControllers = require("./controllers/animalControllers");

router.get("/alphabetgame", animalControllers.readTenRandomly);

module.exports = router;
