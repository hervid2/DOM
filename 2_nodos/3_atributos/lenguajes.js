// Cargar lenguajes desde un archivo JSON y agregarlos como checkboxes en el formulario
export async function cargarLenguajes(formulario) {
  try {
    const data = await fetch("lenguajes.json");
    const lenguajesData = await data.json();
    const checkboxContainer = document.createElement("div");
    checkboxContainer.setAttribute("class", "container-lenguajes");

    // Crear checkboxes para cada lenguaje
    lenguajesData.forEach((lenguaje) => {
      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.setAttribute("name", "lenguaje");
      checkbox.setAttribute("id", `lenguajes-${lenguaje.id}`);
      checkbox.setAttribute("value", `${lenguaje.lenguaje}`);

      const checkboxLabel = document.createElement("label");
      checkboxLabel.setAttribute("id", `lenguajes-${lenguaje.id}`);
      checkboxLabel.textContent = lenguaje.nombre;
      checkboxContainer.append(checkbox, checkboxLabel);
    });

    // Insertar los checkboxes antes del campo de teléfono
    const input = formulario.querySelector("#telefono");
    input.insertAdjacentElement("beforebegin", checkboxContainer);
  } catch (error) {
    console.log("Error al cargar los datos", error);
  }
}