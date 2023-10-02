const express = require("express");
const router = express.Router();
const {
  getPokemon,
  limitPokemon,
  getPokemonbyName,
  getPokemonByType,
  setPokemon,
} = require("../controller/pokeController.js");

router.route("/").get(getPokemon);
router.route("/").post(setPokemon);
router.route("/:limit").get(limitPokemon);
router.route("/name/:name").get(getPokemonbyName);
router.route("/type/:type").get(getPokemonByType);

module.exports = router;
