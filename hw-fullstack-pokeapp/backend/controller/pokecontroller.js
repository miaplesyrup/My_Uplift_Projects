const asyncHandler = require("express-async-handler")
const Pokemon = require("../models/pokeModel.js");

// Get pokemon
const getPokemon = asyncHandler(async (req, res) => {
  const pokemons = await Pokemon.find().sort({ name: 1 })

  res.status(200).json(pokemons);
});

const setPokemon = asyncHandler(async (req, res) => {
  if (!req.body.name){
    res.status(400);
    throw new Error('Please add a text field')
  }

  const pokemon = await Pokemon.create({
    name: req.body.name,
    img: req.body.img,
    type: req.body.type,
    stats: req.body.stats,
    damages: req.body.damages,
    misc: req.body.misc,
  });

  res.status(200).json(pokemon);
});

// GET limited pokemon
const limitPokemon = asyncHandler(async (req, res) => {
  const limit = parseInt(req.params.limit);

  if (isNaN(limit)) {
    res.status(400);
    throw new Error("Invalid limit parameter");
  }

  const pokemons = await Pokemon.find().limit(limit);

  res.status(200).json(pokemons);
});

// GET pokemon by name
const getPokemonbyName = asyncHandler(async (req, res) => {
  const pokemonName = req.params.name;
  const pokemon = await Pokemon.find({
    name: { $regex: new RegExp(pokemonName, "i") },
  });
  if (pokemon) {
    res.send(pokemon);
  } else {
    res
      .status(404)
      .send({ error: `Pokemon with name ${pokemonName} not found` });
  }
});

// GET pokemon by type
const getPokemonByType = asyncHandler(async (req, res) => {
  const pokemonType = req.params.type;
  const pokemon = await Pokemon.find({
    type: { $in: [new RegExp(pokemonType, "i")] },
  });
  if (pokemon.length > 0) {
    res.send(pokemon);
  } else {
    res
      .status(404)
      .send({ error: `Pokemon with type ${pokemonType} not found` });
  }
});


module.exports = {
  getPokemon,
  limitPokemon,
  getPokemonbyName,
  getPokemonByType,
  setPokemon,
};
