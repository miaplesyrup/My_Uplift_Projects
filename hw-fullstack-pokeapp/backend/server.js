const express = require("express");
const dotenv = require("dotenv").config();
// const connectDB = require("./config/db.js");
const PORT = process.env.PORT || 4000;
const mongoose = require("mongoose");

// connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/pokemon", require("./routes/pokerouter"));

const dbOptions = {useNewUrlParser:true, useUnifiedTopology:true}
mongoose.connect(process.env.DB_URI)
.then(() => console.log('DB Connected'))
.catch(err => console.log(err))


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
























// Set up a connection to your MongoDB database using Mongoose. You can do this by creating a mongoose instance and using the connect() method:

// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true })
//   .then(() => console.log('MongoDB connected...'))
//   .catch(err => console.log(err));

// //   Define a schema for your pokemon collection using Mongoose. You can define a schema using the Schema class provided by Mongoose:
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const PokemonSchema = new Schema({
//   name: String,
//   type: [String],
//   hp: Number,
//   attack: Number,
//   defense: Number,
//   speed: Number,
//   spAtk: Number,
//   spDef: Number,
//   total: Number,
//   moves: [String]
// });

// const Pokemon = mongoose.model('Pokemon', PokemonSchema);

// module.exports = Pokemon;

// Import the Pokemon data from pokemon.json into your MongoDB database. You can do this using the mongoimport command-line tool:
// css
//  mongoimport --db mydatabase --collection pokemon --file pokemon.json


// // Implement the queries needed by the backend endpoints:
// // Get a list of all pokemons:
// const Pokemon = require('./models/Pokemon');

// app.get('/pokemons', (req, res) => {
//   Pokemon.find()
//     .then(pokemons => res.json(pokemons))
//     .catch(err => res.status(404).json({ nopokemonsfound: 'No pokemons found' }));
// });

// // Get a rate-limited number of pokemons:
// const Pokemon = require('./models/Pokemon');

// app.get('/pokemons/:limit', (req, res) => {
//   const limit = parseInt(req.params.limit);

//   Pokemon.find().limit(limit)
//     .then(pokemons => res.json(pokemons))
//     .catch(err => res.status(404).json({ nopokemonsfound: 'No pokemons found' }));
// });


// // Get a pokemon given a name:
// const Pokemon = require('./models/Pokemon');

// app.get('/pokemons/:name', (req, res) => {
//   const name = req.params.name;

//   Pokemon.findOne({ name })
//     .then(pokemon => res.json(pokemon))
//     .catch(err => res.status(404).json({ nopokemonfound: 'No pokemon found with that name' }));
// });


// To confidently do queries in MongoDB using Mongoose, you can follow the steps below:

// Set up a connection to your MongoDB database using Mongoose. You can do this by creating a mongoose instance and using the connect() method:
// javascript
// Copy code
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true })
//   .then(() => console.log('MongoDB connected...'))
//   .catch(err => console.log(err));
// Define a schema for your pokemon collection using Mongoose. You can define a schema using the Schema class provided by Mongoose:
// javascript
// Copy code
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const PokemonSchema = new Schema({
//   name: String,
//   type: [String],
//   hp: Number,
//   attack: Number,
//   defense: Number,
//   speed: Number,
//   spAtk: Number,
//   spDef: Number,
//   total: Number,
//   moves: [String]
// });

// const Pokemon = mongoose.model('Pokemon', PokemonSchema);

// module.exports = Pokemon;
// Import the Pokemon data from pokemon.json into your MongoDB database. You can do this using the mongoimport command-line tool:
// css
// Copy code
// mongoimport --db mydatabase --collection pokemon --file pokemon.json
// Implement the queries needed by the backend endpoints:
// Get a list of all pokemons:
// javascript
// Copy code
// const Pokemon = require('./models/Pokemon');

// app.get('/pokemons', (req, res) => {
//   Pokemon.find()
//     .then(pokemons => res.json(pokemons))
//     .catch(err => res.status(404).json({ nopokemonsfound: 'No pokemons found' }));
// });
// Get a rate-limited number of pokemons:
// javascript
// Copy code
// const Pokemon = require('./models/Pokemon');

// app.get('/pokemons/:limit', (req, res) => {
//   const limit = parseInt(req.params.limit);

//   Pokemon.find().limit(limit)
//     .then(pokemons => res.json(pokemons))
//     .catch(err => res.status(404).json({ nopokemonsfound: 'No pokemons found' }));
// });
// Get a pokemon given a name:
// javascript
// Copy code
// const Pokemon = require('./models/Pokemon');

// app.get('/pokemons/:name', (req, res) => {
//   const name = req.params.name;

//   Pokemon.findOne({ name })
//     .then(pokemon => res.json(pokemon))
//     .catch(err => res.status(404).json({ nopokemonfound: 'No pokemon found with that name' }));
// });
// Get all pokemons that match a type:
// typescript
// Copy code
// const Pokemon = require('./models/Pokemon');

// app.get('/pokemons/type/:type', (req, res) => {
//   const type = req.params.type;

//   Pokemon.find({ type })
//     .then(pokemons => res.json(pokemons))
//     .catch(err => res.status(404).json({ nopokemonsfound: 'No pokemons found with that type' }));
// });
// // These are just some examples of queries you can do with Mongoose in MongoDB. There are many other types of queries you can perform, so make sure to consult the Mongoose documentation for more information.