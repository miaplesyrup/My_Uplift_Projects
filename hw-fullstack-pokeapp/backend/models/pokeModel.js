const mongoose = require('mongoose')

const pokemonSchema = mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
  type: [{ type: String, required: true }],
  stats: {
    hp: { type: String, required: true },
    attack: { type: String, required: true },
    defense: { type: String, required: true },
    spattack: { type: String, required: true },
    spdefense: { type: String, required: true },
    speed: { type: String, required: true }
  },
  damages: {
    normal: { type: String, required: true },
    fire: { type: String, required: true },
    water: { type: String, required: true },
    electric: { type: String, required: true },
    grass: { type: String, required: true },
    ice: { type: String, required: true },
    fight: { type: String, required: true },
    poison: { type: String, required: true },
    ground: { type: String, required: true },
    flying: { type: String, required: true },
    psychic: { type: String, required: true },
    bug: { type: String, required: true },
    rock: { type: String, required: true },
    ghost: { type: String, required: true },
    dragon: { type: String, required: true },
    dark: { type: String, required: true },
    steel: { type: String, required: true }
  },
  misc: {
    classification: { type: String, required: true },
    height: { type: String, required: true },
    weight: { type: String, required: true },
    happiness: { type: String, required: true }
  }
});

module.exports = mongoose.model('Pokemon', pokemonSchema);
