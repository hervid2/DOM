const dom = document;

const is_valid = (event, formulario) => {
  event.preventDefault(); // Evita que el formulario se envíe
  const lista = dom.querySelector(formulario);
  let bandera = true; // Variable para controlar si el formulario es válido

  // Función para mostrar errores
  function mostrarError(input, mensaje) {
    input.classList.add("error"); // Añadir clase .error al campo inválido
    const errorMessage = document.createElement("span");
    errorMessage.className = "error-message";
    errorMessage.textContent = mensaje;
    input.insertAdjacentElement("afterend", errorMessage); // Insertar mensaje después del campo
    bandera = false; // Marcar el formulario como inválido
  }

  // Función para limpiar errores
  function limpiarErrores() {
    const errores = lista.querySelectorAll(".error");
    errores.forEach((error) => error.classList.remove("error")); // Remover clase .error
    const mensajesError = lista.querySelectorAll(".error-message");
    mensajesError.forEach((mensaje) => mensaje.remove()); // Eliminar mensajes de error
  }

  // Limpiar errores previos
  limpiarErrores();

  // Validar campos del formulario
  const campos = [
    { id: "nombre", mensaje: "El nombre es obligatorio." },
    { id: "apellido", mensaje: "El apellido es obligatorio." },
    { id: "telefono", mensaje: "El teléfono debe tener al menos 7 dígitos." },
    { id: "documento", mensaje: "El documento es obligatorio." },
    { id: "usuario", mensaje: "El usuario es obligatorio." },
    { id: "contrasena", mensaje: "La contraseña debe tener al menos 6 caracteres." },
  ];

  campos.forEach((campo) => {
    const input = lista.querySelector(`#${campo.id}`);
    if (!input.value.trim()) {
      mostrarError(input, campo.mensaje);
    } else if (campo.id === "telefono" && input.value.length < 7) {
      mostrarError(input, campo.mensaje);
    } else if (campo.id === "contrasena" && input.value.length < 6) {
      mostrarError(input, campo.mensaje);
    }
  });

  // Validar select (ciudad)
  const ciudad = lista.querySelector("#ciudad_id");
  if (ciudad.selectedIndex === 0) {
    mostrarError(ciudad, "Debes seleccionar una ciudad.");
  }

  // Validar radio buttons (género)
  const generos = lista.querySelectorAll('input[name="genero"]');
  let generoSeleccionado = false;
  generos.forEach((genero) => {
    if (genero.checked) generoSeleccionado = true;
  });
  if (!generoSeleccionado) {
    const generoContainer = lista.querySelector(".radios");
    mostrarError(generoContainer, "Debes seleccionar un género.");
  }

  // Validar checkboxes (lenguajes)
  const lenguajes = lista.querySelectorAll('input[name="lenguaje"]:checked');
  if (lenguajes.length === 0) {
    const lenguajesContainer = lista.querySelector(".container-lenguajes");
    mostrarError(lenguajesContainer, "Debes seleccionar al menos un lenguaje.");
  }

  // Validar términos y condiciones
  const terminos = lista.querySelector("#checkbox");
  if (!terminos.checked) {
    mostrarError(terminos, "Debes aceptar los términos y condiciones.");
  }

  // Si el formulario es válido, enviar
  if (bandera) {
    alert("Formulario enviado correctamente.");
    lista.reset(); // Limpiar el formulario
  }
};

export default is_valid;