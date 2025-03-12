const dom = document;

const is_valid = (event, formulario) => {
  event.preventDefault(); // Evita que el formulario se envíe
  const lista = dom.querySelector(formulario);

  // select (Recorre todos los hijos del formulario)
  for (const child of lista.children) {
    // Se recorre cada hijo (child) del formulario (lista.children). Esto permite inspeccionar cada elemento dentro del formulario.
    if (child.tagName == "select") {
      for (const name of child.getAttributeNames()) { // getAttributeNames(), Retorna todos los atributos del elemento "select"
        // Se obtienen todos los nombres de los atributos del elemento <select> y se recorren.
        const value = child.dataset.required;
        if ((name === "data-required") & (value == "true")) {
          if (child.selectedIndex == 0) {
            child.classList.add("error");
          } else {
            child.classList.remove("error");
          }
        }
      }
    }
  }

  //input
  //radio
  //checkbox
  return bandera;
};

export default is_valid;
