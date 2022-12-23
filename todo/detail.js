const titleElement = document.querySelector("#title");
const desc = document.querySelector("#desc");
const created = document.querySelector("#created");
const statusElement = document.querySelector("#status");
const btnDelete = document.querySelector("#btn-delete");

const getTask = async () => {
  // Paso1: Obtener los datos de la url
  const response = await fetch(`http://127.0.0.1:8000/api/v3/todo/${getId()}/`);
  const { title, body, created_at, status } = await response.json();
  titleElement.textContent = title;
  desc.textContent = body;
  dayjs.extend(dayjs_plugin_relativeTime);
  created.textContent = `Hace ${dayjs(created_at).fromNow()}`;
  statusElement.textContent = status;
};

getTask();

btnDelete.onclick = async function () {
  const { value } = await Swal.fire({
    title: "Esta seguro de eliminar este registro?",
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: "Si",
    denyButtonText: `No`,
  });

  if (value) {
    try {
      await fetch(`http://127.0.0.1:8000/api/v1/todo/${getId()}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      location.href = "/todo";
    } catch (error) {
      Swal.fire({
        text: error,
        icon: "error",
      });
    }
  }
};

function getId() {
  const params = new URLSearchParams(location.search);
  return params.get("id");
}
