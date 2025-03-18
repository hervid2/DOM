// Cargar géneros desde un archivo JSON y agregarlos como radio buttons en el formulario
export const generos = async (formulario) => {
  const data = await fetch("generos.json");
  const generos = await data.json();
  const div = document.createElement("div");
  div.classList.add("radios");

  // Crear radio buttons para cada género
  generos.forEach(({ id, tipo }) => {
    const label = document.createElement("label");
    const input = document.createElement("input");

    label.setAttribute("for", `genero_${id}`);
    label.textContent = tipo;
    input.setAttribute("id", `genero_${id}`);
    input.setAttribute("type", "radio");
    input.setAttribute("name", "genero");
    input.value = id;
    div.append(label, input);
  });

  // Insertar los radio buttons antes del botón de enviar
  const btn = formulario.querySelector("button");
  btn.insertAdjacentElement("beforebegin", div);
};