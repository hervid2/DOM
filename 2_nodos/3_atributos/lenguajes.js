//convertir archivo json a datos primitivos JS
export const lenguajes = async (formulario) => {
    const data = await fetch("lenguajes.json");
    const lenguajes = await data.json();
    const pregunta = document.createElement("h3");
    pregunta.textContent = "Elija los lenguajes de su preferencia:";


    const opciones = document.createDocumentFragment();
    lenguajes.forEach(({ nombre, id }) => {
      const option = document.createElement("option");
      option.textContent = nombre;
      option.value = id;
      const clon = document.importNode(option, true);
      opciones.append(clon);
    });
    combo.append(opciones);
    formulario.insertAdjacentElement("afterbegin", combo);
  };