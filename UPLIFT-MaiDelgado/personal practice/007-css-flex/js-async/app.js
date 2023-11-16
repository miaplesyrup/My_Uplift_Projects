const pokedex = document.querySelector("#pokedex");

const getPokemon = (pokemon) => {
  const request = new XMLHttpRequest();
  request.open("GET", `https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  request.send();

  request.addEventListener("load", function () {
    const data = JSON.parse(request.responseText);
    //   console.log(data.sprites);

    //display pokemon
    const display = `
   <li class="card">
          <img src="${data.sprites.front_default}" alt="Pokemon Image">
          <h2 class="card-title">${data.name}</h2>
          <p class="card-types">${data.types.map((type) => {
            console.log(type.type.name);
            return type.type.name;
          })}</p>
        </li>
  `;
    pokedex.insertAdjacentHTML("beforeend", display);
  });
};

getPokemon("pikachu");
getPokemon("charizard");
getPokemon("bulbasaur");
console.log("Hey");

function generateNumber() {
  for (let i = 0; i < 20; i++) {
    getPokemon(Math.floor(Math.random() * 1280));
  }
}
generateNumber();







