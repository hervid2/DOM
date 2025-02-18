// const padre = document.querySelector(`.container`);
// console.log(padre);
// const nodo = document.createElement("h2");
// padre.appendChild(nodo);

// identificar el id list
const list = document.querySelector("#list");

// crear una nueva lista
let html = document.createElement("li");

// agregar nuevo item
html.textContent = "Item Nuevo";

// agregar el nuevo texto
html.classList.add("item");
list.appendChild(html);


let html1 = document.createElement("li");
let css = document.createElement("li");
let js = document.createElement("li");

html.textContent = "HTML";
css.textContent = "CSS";
js.textContent = "JS";

html.classList.add("item");
css.classList.add("item");
js.classList.add("item");

list.appendChild(html);
list.appendChild(css);
list.appendChild(js);


const card = document.querySelector(".card");
const final = document.querySelector("#list");
const titulo = document.createElement("h2");
// titulo.textContent = "Soy el titulo nuevo";
// card.appendChild(titulo);
card.insertBefore(titulo, final);

const afterbegin = document.createElement("li")
afterbegin.classList.add("item");
afterbegin.textContent = "al inicio";
// antes de la lista
final.insertAdjacentElement("afterbegin", afterbegin)
// fuera de la lista
final.insertAdjacentElement("afterend", afterbegin)


const dias = [
    {
      id: 1,
      name: "Lunes",
      img: "https://picsum.photos/640/360",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, consectetur.",
    },
    {
      id: 2,
      name: "Martes",
      img: "https://picsum.photos/640/360",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, consectetur.",
    },
    {
      id: 3,
      name: "Miercoles",
      img: "https://picsum.photos/640/360",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, consectetur.",
    },
    {
      id: 4,
      name: "Jueves",
      img: "https://picsum.photos/640/360",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, consectetur.",
    },
    {
      id: 5,
      name: "Viernes",
      img: "https://picsum.photos/640/360",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, consectetur.",
    },
    {
      id: 6,
      name: "Sabado",
      img: "https://picsum.photos/640/360",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, consectetur.",
    },
    {
      id: 7,
      name: "Domingo",
      img: "https://picsum.photos/640/360",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, consectetur.",
    },
  ];


  console.log(dias);

  const $dias = document.querySelector("#dias");
 

$fragmen = document.createDocumentFragment();
  dias.map( ({name,img,paragraph}) => {
    const $card = document.createElement("div");
    const $card_header = document.createElement("div");
    const $card_h2 = document.createElement("h2");
    const $card_body = document.createElement("div");
    const $card_img = document.createElement("img");
    const $card_paragraph = document.createElement("p");
    const $card_button = document.createElement("a");
    const $card_button_span = document.createElement("span");
    const $card_button_icon = document.createElement("i");

    // agregar los estilos

    $card.classList.add("card");
    $card_header.classList.add("card_header");
    $card_h2.classList.add("carde_title");
    $card_body.classList.add("card_body");
    $card_img.classList.add("card_img");
    $card_paragraph.classList.add("card_paragraph");
    $card_button.classList.add("button", "button--outline");
    $card_button_span.classList.add("button_text");
    $card_button_icon.classList.add("bx", "bxs-chevro-right", "button_icon");

// agregamos los valores del objeto a los elementos

$card_h2.textContent = name;
$card_paragraph.textContent = paragraph;
$card_button_span.textContent = "saber mas";

// agregar los atributos

$card_img.setAttribute("src", img);
$card_img.setAttribute("alt", name);
$card_button.setAttribute("href", "#");

// agregamos los elementos hijos

$card_body.appendChild($card_img);
$card_body.appendChild($card_paragraph);
$card_header.appendChild($card_h2);
$card.appendChild($card_header);
$card_button.appendChild($card_button_span);
$card_body.appendChild($card_button);
$card.appendChild($card_body);
// $dias.appendChild($card);
$fragmen.append($card);
  } )
  
$dias.append($fragmen);


