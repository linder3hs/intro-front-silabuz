const url = "http://127.0.0.1:8000/api/v3/todo/";

const container = document.querySelector(".row");

async function getTasks() {
  const response = await fetch(url);
  const data = await response.json();
  data.results.forEach((task) => {
    container.innerHTML += renderTask(task);
  });
}

getTasks();

// const getTasks = async () => {}

function renderTask(task) {
  return `
    <div class="card col-md-3">
      <div class="card-body">
        <h3 class="text-center">${task.title}</h3>
        <p>${task.body}</p>
        <p>${task.created_at}</p>
        <p>${task.status}</p>
        <div class="d-grid">
          <a href="./detail.html?id=${task.id}" class="btn btn-outline-primary">
            Ver detalle
          </a>
        </div> 
      </div>
    </div>
  `;
}
