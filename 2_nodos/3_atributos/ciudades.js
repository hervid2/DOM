//convertir archivo json a datos primitivos JS
export const ciudades = async (formulario) => {
  const data = await fetch("data.json");
  const ciudades = await data.json();
  const combo = document.createElement("select");
  combo.name = "ciudad_id";
  combo.id = "ciudad_id";
  const defecto = document.createElement("option");
  defecto.textContent = "Seleccione ciudad...";
  combo.append(defecto);
  const opciones = document.createDocumentFragment();
  ciudades.forEach(({ nombre, id }) => {
    const option = document.createElement("option");
    option.textContent = nombre;
    option.value = id;
    const clon = document.importNode(option, true);
    opciones.append(clon);
  });
  combo.append(opciones);
  formulario.insertAdjacentElement("afterbegin", combo);
};