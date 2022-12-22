const titulo = document.getElementById("titulo");
// document.getElementsByClassName("")
// document.getElementsByTagName("")
console.log(titulo);
// querySelector: busca por tag, class, id
// para usar querySelector debemos saber que tenemos que usar ciertas reglas
// para el id: #id
// para la clase: .class
// para el tag: tag

// buscar el body tag
const body = document.querySelector("body");
// buscar la lista-ordenada por id
const listaOrdenada = document.querySelector("#lista-ordenada");
// buscar la lista-no-ordenada por class
const listaNoOrdenada = document.querySelector(".lista-no-ordenada");

const url = "https://pokeapi.co/api/v2/pokemon/";

// para que una funcion pueda consumir una API es necesario que esta
// sea async, esto permite usar await dentro de la funcion

// Nota: async, await siempre van junto

// fetch: Es una funcion native de JS la cual nos aceptar como primer parametro una URL y como segundo los headers

// Nota: fetch puede usado para GET, POST, PUT, DELETE, PATCH
// Nota: Por defecto fetch siempre es un GET

const pokemonsContainer = document.querySelector("#pokemons");

async function getPokemons() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    data.results.forEach((pokemon) => {
      pokemonsContainer.innerHTML += `<p>${pokemon.name}</p>`;
    });
  } catch (error) {
    console.log(error);
  }
}

getPokemons();
