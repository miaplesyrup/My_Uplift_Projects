import React from "react";
// import "./App.css";

export const PokemonList = ({ pokemon }) => {
  return (
    <div className="card">
      <div className="id">
        <small>#0{pokemon.id}</small>
      </div>
      <img
        src={pokemon.sprites.other.dream_world.front_default}
        alt={pokemon.name}
      ></img>
      <div className="details">
        <h3>{pokemon.name}</h3>
      </div>
      <div className="card-types">
        {pokemon.types.map((type) => (
          <span key={type.type.name} className={type.type.name}>
            {type.type.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonList;