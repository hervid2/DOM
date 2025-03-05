import { ciudades } from "./ciudades.js";
import {generos} from "./generos.js";
import { cargarLenguajes } from "./lenguajes.js";
import is_valid from "./validar.js";

const body = document.querySelector("body");
const formulario = document.querySelector("#formulario");
const nombre = document.getElementById("nombre");
const apellido = document.querySelector("#apellido");
const telefono = document.querySelector("#telefono");
const documento = document.querySelector("#documento");
const usuario = document.querySelector("#usuario");
const contrasena = document.querySelector("#contrasena");
const btn = document.querySelector("button");
const terminos = document.createElement("input");
terminos.setAttribute("type", "checkbox");
terminos.id = 'checkbox';
btn.disabled = true;
btn.insertAdjacentElement("beforebegin", terminos);
const label = document.createElement("label");
label.textContent = "Acepto los términos y condiciones";
label.setAttribute("for", "terminos");
terminos.insertAdjacentElement("afterend",label);



ciudades(formulario);
generos(formulario);
cargarLenguajes(formulario);
is_valid(event,string);



// validar un formulario
const validar = (event) => {
  // detenemos el evento
  event.preventDefault();

  // validamos los campos
  // if (nombre.value == "") {
  //   alert("El nombre es obligatorio");
  //   nombre.focus();
  // }
  // if (apellido.value == "") {
  //   alert("El apellido es obligatorio");
  //   apellido.focus();
  // }
  // if (telefono.value == "") {
  //   alert("El telefono es obligatorio");
  //   telefono.focus();
  // }
  // if (documento.value == "") {
  //   alert("El documento es obligatorio");
  //   documento.focus();
  // }
  // if (usuario.value == "") {
  //   alert("El usuario es obligatorio");
  //   usuario.focus();
  // }
  // if (contrasena.value == "") {
  //   alert("La contraseña es obligatoria");
  //   contrasena.focus();
  // }
};
const contextMenu = () => {
//   alert("?"); 
};
const dblclick = () => {
//   alert("doble click"); 
};
const mousedown = () => {
//   alert(
//     "El evento funciona cuando se mantiene presiono cualquier click sobre el elemento"
//   );
}; 
const keydown = (event) => {
//   alert(`Presionaste la tecla ${event.key}`);
}; 


//Validar checkbox
const validar_terminos = () => {
//   if (terminos.checked) {
//     btn.removeAttribute("disabled", "");
//   } else {
//     btn.setAttribute("disabled", "");
//   }
(terminos.checked) ? btn.removeAttribute("disabled"): btn.setAttribute("disabled");
};
nombre.addEventListener("keydown",keydown);
terminos.addEventListener("change",validar_terminos);
// btn.addEventListener("click", validar);
terminos.addEventListener("submit", validar);
