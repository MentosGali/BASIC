const table = document.getElementById("tareas");
const form = document.getElementById("task-form");
const STORAGE_KEY = "tasks-list";

function addRow(name, difficulty, date) {
  const row = table.insertRow();
  row.classList.add("task-row");

  // Agregar celdas con los datos
  row.insertCell().textContent = name;
  row.insertCell().textContent = difficulty;
  row.insertCell().textContent = date || "No date specified"; // Manejo de fecha vacía

  //make field checkbox
  // Celda para el checkbox de status
  const statusCell = row.insertCell();
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("status-checkbox");

  // Evento para cambiar el estilo al marcar/desmarcar
  // Evento para marcar/desmarcar la tarea
  checkbox.addEventListener("change", function () {
    const cells = row.cells;

    // Aplicar/remover estilo a todas las celdas excepto la del checkbox
    for (let i = 0; i < cells.length - 1; i++) {
      if (this.checked) {
        cells[i].style.textDecoration = "line-through";
        cells[i].style.opacity = "0.7";
        cells[i].style.color = "#888";
      } else {
        cells[i].style.textDecoration = "none";
        cells[i].style.opacity = "1";
        cells[i].style.color = "";
      }
    }
  });

  // Opcional: agregar un label para mejor usabilidad
  const label = document.createElement("label");
  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(" Completed"));
  statusCell.appendChild(label);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Obtener y limpiar valores
  const name = document.getElementById("task-name").value.trim();
  const difficultySelect = document.getElementById("task-difficulty");
  const difficulty =
    difficultySelect.options[difficultySelect.selectedIndex].text;
  const date = document.getElementById("task-date").value;

  // Validación mejorada
  if (!name || !difficulty || !date) {
    const missingFields = [];
    if (!name) missingFields.push("Task Name");
    if (!difficulty) missingFields.push("Difficulty");
    if (!date) missingFields.push("Due Date");

    // Mejor feedback al usuario
    alert(`Please fill in all required fields:\n${missingFields.join("\n")}`);

    return;
  }

  // Si la validación pasa
  addRow(name, difficulty, date);
  form.reset();
});
