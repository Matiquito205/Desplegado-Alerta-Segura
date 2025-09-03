const form = document.getElementById("emergencyForm");
const results = document.getElementById("results");
const counter = document.getElementById("counter");
const button = form.querySelector("button");
const btnText = button.querySelector(".btn-text");
const spinner = button.querySelector(".spinner");

let emergencyCount = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Mostrar spinner
  btnText.style.display = "none";
  spinner.style.display = "inline-block";
  button.disabled = true;

  setTimeout(() => {
    const nombre = document.getElementById("nombre").value.trim();
    const tipo = document.getElementById("tipo").value.trim();
    const lugar = document.getElementById("lugar").value.trim();

    // Crear item
    const div = document.createElement("div");
    div.classList.add("result-item");
    div.innerHTML = `
      <h4>⚠ ${tipo}</h4>
      <p>👤 Reportante: <strong>${nombre}</strong></p>
      <p>📍 Lugar: ${lugar}</p>
      <p>⏰ Hora: ${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
    `;
    results.prepend(div);

    // Actualizar contador
    emergencyCount++;
    counter.textContent = emergencyCount;

    // Reset form
    btnText.style.display = "inline";
    spinner.style.display = "none";
    button.disabled = false;
    form.reset();
  }, 1000);
});
