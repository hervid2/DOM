const dom = document;
const is_valid = (event, formulario) =>{
    event.preventDefault();
    const lista = dom.querySelectorAll(formulario);

    
    let bandera = true;
    lista.forEach((elemento) => {
        if (elemento.value === "") {
            elemento.classList.toggle("error");
            return false;
        }
    })
    return bandera;
};

export default is_valid;