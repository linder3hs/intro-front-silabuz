let i = 0;

// tradicional
function saludar(nombre) {
  return `Hola ${nombre} como estas`;
}

// funcion anonima
const saludar2 = function (nombre) {
  return `Hola ${nombre} como estas`;
};

// arrow function no se puede usar this
const saludar3 = (nombre) => {
  return `Hola ${nombre} como estas`;
};

// Esto soporta solo 1 linea
const saludar4 = (nombre) => `Hola ${nombre} como estas`;

// Problema 2
const numero = 100; //Number(prompt("Ingresa un numero"));

const message =
  numero % 2 === 0
    ? `Par y el número ingresado es ${numero}`
    : `Impar y el número ingresado es ${numero}`;

console.log(message);

/*
Dada la siguiente lista ["Hola", "Amigos", "Hoy", True] , escriba un programa 
que pida al usuario una palabra, dicha palabra debe ser agregada al final y al inicio de la lista.
*/

const palabras = ["Hola", "Amigos", "Hoy", true, 1, 1.3];
const nuevaPalabra = "test"; //prompt("Escribe una palabra");
palabras.push(nuevaPalabra);

console.log("Palabras", palabras);

// array of objects movies

