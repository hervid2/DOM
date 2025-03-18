// Cargar ciudades desde un archivo JSON y agregarlas a un select en el formulario
export const ciudades = async (formulario) => {
  const data = await fetch("data.json");
  const ciudades = await data.json();
  const combo = document.createElement("select");
  combo.name = "ciudad_id";
  combo.id = "ciudad_id";
  combo.setAttribute("data-required", true); // Marcar como campo obligatorio

  // Opción por defecto
  const defecto = document.createElement("option");
  defecto.textContent = "Seleccione ciudad...";
  combo.append(defecto);

  // Crear opciones para cada ciudad
  const opciones = document.createDocumentFragment();
  ciudades.forEach(({ nombre, id }) => {
    const option = document.createElement("option");
    option.textContent = nombre;
    option.value = id;
    opciones.append(option);
  });

  combo.append(opciones);
  formulario.insertAdjacentElement("afterbegin", combo); // Insertar el select en el formulario
};