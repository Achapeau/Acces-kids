const express = require("express");

const router = express.Router();

const animalControllers = require("./controllers/animalControllers");

router.get("/alphabet", animalControllers.browse);

module.exports = router;
