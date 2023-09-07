const express = require("express");

const router = express.Router();

const animalControllers = require("./controllers/animalControllers");

router.get("/alphabet", animalControllers.browse);

router.get("/numbers/:number", animalControllers.getImages);

module.exports = router;
