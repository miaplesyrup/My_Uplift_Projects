import React, { useState, useEffect, useRef } from "react";
import { PokemonList } from "./components/PokemonList";
import { LoadBtn } from "./components/LoadBtn";

import "./App.css";

function App() {

  const effectRan = useRef(false);

  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
  );

  const getAllPokemons = async () => {
    const response = await fetch(loadMore);
    const data = await response.json();
    console.log(data);

    setLoadMore(data.next);
  

    const createPokemonObject = (result) => {
      result.forEach(async (pokemon) => {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await response.json();

        setAllPokemons((currentList) => [...currentList, data]);
      });
    };

    createPokemonObject(data.results);
  };

  useEffect(() => {
    if (effectRan.current === true) {
      getAllPokemons();
    }
    return () => {
      effectRan.current = true;
    };
  }, []);

  return (
    <div>
      <h1>Pokedex</h1>
      <div className="container">
        <div className="pokedex">
          {allPokemons.map((pokemon, index) => (
            <PokemonList pokemon={pokemon} key={index} />
          ))}
        </div>
      </div>
      <LoadBtn loadPokemons={getAllPokemons} />
    </div>
  );
  };

export default App;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const PokemonList = () => {
//   const [pokemonList, setPokemonList] = useState([]);
//   const [nextUrl, setNextUrl] = useState('');
//   const [loading, setLoading] = useState(true);

//   const fetchPokemonList = async (url) => {
//     setLoading(true);
//     const res = await axios.get(url);
//     setPokemonList(prevList => [...prevList, ...res.data.results]);
//     setNextUrl(res.data.next);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchPokemonList('https://pokeapi.co/api/v2/pokemon');
//   }, []);

//   const handleLoadMore = () => {
//     fetchPokemonList(nextUrl);
//   };

//   return (
//     <div>
//       <ul>
//         {pokemonList.map(pokemon => (
//           <li key={pokemon.name}>{pokemon.name}</li>
//         ))}
//       </ul>
//       {loading && <p>Loading...</p>}
//       {nextUrl && !loading && (
//         <button onClick={handleLoadMore}>Load More</button>
//       )}
//     </div>
//   );
// };

// export default PokemonList;


// export const Main = () => {
  // const effectRan = useRef(false);

  // const [allPokemons, setAllPokemons] = useState([]);
  // const [loadMore, setLoadMore] = useState(
  //   "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
  // );

  // const getAllPokemons = async () => {
  //   const response = await fetch(loadMore);
  //   const data = await response.json();

  //   setLoadMore(data.next);

  //   const createPokemonObject = (result) => {
  //     result.forEach(async (pokemon) => {
  //       const response = await fetch(
  //         `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
  //       );
  //       const data = await response.json();

  //       setAllPokemons((currentList) => [...currentList, data]);
  //     });
  //   };
  //   createPokemonObject(data.results);
  // };

  // useEffect(() => {
  //   if (effectRan.current === true) {
  //     getAllPokemons();
  //   }
  //   return () => {
  //     effectRan.current = true;
  //   };
  // }, []);

//   return (
//     <div>
//       <h1>Pokedex</h1>
//       <div className="container">
//         <div className="pokedex">
//           {allPokemons.map((pokemon, index) => (
//             <PokemonList pokemon={pokemon} key={index} />
//           ))}
//         </div>
//       </div>
//       <LoadBtn loadPokemons={getAllPokemons} />
//     </div>
//   );
// };


// function App() {
//   return (
//   ≈

// export const Main = () => {
//   const effectRan = useRef(false);

//   const [allPokemons, setAllPokemons] = useState([]);
//   const [loadMore, setLoadMore] = useState(
//     "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
//   );

//   const getAllPokemons = async () => {
//     const response = await fetch(loadMore);
//     const data = await response.json();

//     setLoadMore(data.next);

//     const createPokemonObject = (result) => {
//       result.forEach(async (pokemon) => {
//         const response = await fetch(
//           `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
//         );
//         const data = await response.json();

//         setAllPokemons((currentList) => [...currentList, data]);
//       });
//     };
//     createPokemonObject(data.results);
//   };

//   useEffect(() => {
//     if (effectRan.current === true) {
//       getAllPokemons();
//     }
//     return () => {
//       effectRan.current = true;
//     };
//   }, []);

//   return (
//     <div>
//       <h1>Pokedex</h1>
//       <div className="container">
//         <div className="pokedex">
//           {allPokemons.map((pokemon, index) => (
//             <PokemonList pokemon={pokemon} key={index} />
//           ))}
//         </div>
//       </div>
//       <LoadButton loadPokemons={getAllPokemons} />
//     </div>
//   );
// };
// Main.js
// 2 KB
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


