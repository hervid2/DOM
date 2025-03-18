import { ciudades } from "./ciudades.js";
import { generos } from "./generos.js";
import { cargarLenguajes } from "./lenguajes.js";
import is_valid from "./validar.js";

// Seleccionar elementos del DOM
const body = document.querySelector("body");
const formulario = document.querySelector("#formulario");
const nombre = document.getElementById("nombre");
const apellido = document.querySelector("#apellido");
const telefono = document.querySelector("#telefono");
const documento = document.querySelector("#documento");
const usuario = document.querySelector("#usuario");
const contrasena = document.querySelector("#contrasena");
const btn = document.querySelector("button");

// Crear checkbox de términos y condiciones
const terminos = document.createElement("input");
terminos.setAttribute("type", "checkbox");
terminos.id = "checkbox";
btn.disabled = true; // Deshabilitar el botón inicialmente
btn.insertAdjacentElement("beforebegin", terminos);

// Crear label para los términos y condiciones
const label = document.createElement("label");
label.textContent = "Acepto los términos y condiciones";
label.setAttribute("for", "terminos");
terminos.insertAdjacentElement("afterend", label);

// Cargar dinámicamente ciudades, géneros y lenguajes
ciudades(formulario);
generos(formulario);
cargarLenguajes(formulario);

// Validar el formulario al enviar
formulario.addEventListener("submit", (event) => {
  is_valid(event, "#formulario");
});

// Validar términos y condiciones
const validar_terminos = () => {
  btn.disabled = !terminos.checked; // Habilitar o deshabilitar el botón según el checkbox
};

// Evento para validar términos y condiciones
terminos.addEventListener("change", validar_terminos);
