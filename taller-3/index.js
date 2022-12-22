// Crear una lista desordenada en HTML con el siguieten arreglo ["Marcelo","Jorge","José","Linder"].

// Paso1: Obtener la lista creada en HTML
const lista = document.querySelector("#lista");
const listaProfes = document.querySelector(".lista-profes");

const personas = ["Marcelo", "Jorge", "José", "Linder"];

personas.forEach((persona) => {
  lista.innerHTML += `<li>${persona}</li>`;
});

const profesores = [
  {
    nombre: "Marcelo",
    edad: 20,
    email: "prueba1@mail.com",
  },
  {
    nombre: "Jorge",
    edad: 25,
    email: "prueba2@mail.com",
  },
  {
    nombre: "José",
    edad: 30,
    email: "prueb3@mail.com",
  },
  {
    nombre: "Marco",
    edad: 32,
    email: "prueba4@mail.com",
  },
];

// vamos a crear una lista
const ul = document.createElement("ul");

profesores.map((profesor) => {
  const li = document.createElement("li");
  li.textContent = profesor.nombre;
  li.innerHTML += `
    <ul>
      <li>${profesor.edad}</li>
      <li>${profesor.email}</li>
    </ul>
  `;
  ul.append(li);
});

listaProfes.append(ul);
