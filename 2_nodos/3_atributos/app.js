const body = document.querySelector("body");
const formulario = document.querySelector("#formulario");
const nombre = document.getElementById("nombre");
const apellido = document.querySelector("#apellido");
const telefono = document.querySelector("#telefono");
const documento = document.querySelector("#documento");
const usuario = document.querySelector("#usuario");
const contrasena = document.querySelector("#contrasena");
const btn = document.querySelector("button");
const menuDesplegable = document.querySelector("#card");

const ciudades = async () => {
   const data = await fetch('data.json');
   const ciudades = await data.json();
//    console.log(ciudades); 
ciudades.array.forEach(element => {
    console.log(element);
});
};
ciudades();

formulario = document.createElement("div");
formulario = document.add("select");
formulario = document.append();


// validar un formulario
const validar = (event) => {
  // detenemos el evento
  event.preventDefault();

  // validamos los campos
  if (nombre.value == "") {
    alert("El nombre es obligatorio");
    nombre.focus();
  } 
  if (apellido.value == "") {
    alert("El apellido es obligatorio");
    apellido.focus();   
    }
    if (telefono.value == "") {
        alert("El telefono es obligatorio");
        telefono.focus();
        }
        if (documento.value == "") {
            alert("El documento es obligatorio");
            documento.focus();
            }
            if (usuario.value == "") {
                alert("El usuario es obligatorio");
                usuario.focus();
                }
                if (contrasena.value == "") {
                    alert("La contraseña es obligatoria");
                    contrasena.focus();
                    }
};
btn.addEventListener('click', validar);
// btn.removeEventListener('click',validar);

const  contextMenu = () => {
    alert("?");
}
// formulario.addEventListener('contextMenu',contextMenu);

const dblclick = () => {
    alert("doble click");
}
// body.addEventListener('dblclick',dblclick);


const mousedown = () => {
    alert("El evento funciona cuando se mantiene presiono cualquier click sobre el elemento")
}
// body.addEventListener('mousedown',mousedown);

const keydown = (event) => {
    alert(`Presionaste la tecla ${event.key}`);
}
//  nombre.addEventListener('keydown',keydown);
// formulario.addEventListener('',);

