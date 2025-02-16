//objeto padre para el navegador global
const win = window;
const dom = document;
const head = dom.head;
const body = dom.body;
const title = dom.title;
// const header = dom.header;
const header = dom.querySelector('header');
const paragraph = dom.querySelector('p');
let styles = dom.styleSheets;
const script = dom.scripts;
const links = dom.links;
const img = dom.images;
const form = dom.forms;
const documento = dom.getElementById('documento');
const api = dom.getElementById('apis');
const padre = dom.querySelector('ul');
const hermanos = dom.querySelectorAll(`ul.list > li.item`);

// const lista= dom.getElementsByClassName('.item');
// const lista = dom.querySelector('.item');
// const lista = dom.querySelectorAll(`.item`)

//console.log(win);
// console.log(dom);
// console.log(head);
// console.log(body);
//  console.log(title);
// console.log(header);
// console.log(paragraph);
// console.log(styles);
// console.log(script);
// console.log(links);
// console.log(img);
// console.log(form);
// console.log(documento);
// console.log(api);
// console.log(lista);
//  console.log(hermanos);
// documento.innerHTML = ('que es el dom');
// documento.innerText = ('¿QUÉ ES EL DOM?');

// for (let index = 0; index < lista.length; index++) {
//     console.log(lista[index].textContent );
// }

// console.log(padre);
// console.log(padre.childNodes);
// console.log(padre.childElementCount);
// console.log(padre.children);
// console.log(padre.firstChild);
// console.log(padre.lastChild);
// console.log(padre.firstElementChild);
// console.log(padre.lastElementChild);
// console.log(padre.previousSibling);
// console.log(padre.nextSibling);
// console.log(padre.nextElementSibling);
// console.log(padre.parentElement.parentElement);

// const $card = dom.querySelector('.card');
// console.log($card.classList.contains('card') );
// $card.classList.add('bg-dark');
// $card.classList.remove('bg-dark');
// $card.classList.toggle('bg-dark');

let texto = `Teatro como arte escénico 
El teatro es una rama de las artes escénicas que se relaciona con la actuación.
El teatro se representa frente a un público o frente a una cámara. ${2+2}
El teatro combina discurso, gestos, escenografía, música, sonido y espectáculo.
Teatro como edificio  <b>HTML</b>  <b>Javascript</b>
El teatro es un edificio o sitio destinado a la representación de obras dramáticas o a otros espectáculos públicos`;
const elementos = dom.querySelector('#elementos');
// console.log(elementos);
elementos.textContent = texto;
elementos.innerHTML= texto;


body.style.background = "#151515";

setTimeout(() => {
    body.style.background = "";
},3000);

