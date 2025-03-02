//convertir archivo json a datos primitivos JS y agregando elementos del radioButton con el DOM
export const generos = async (contrasena) => {
    const data = await fetch("generos.json");
    console.log(contrasena);
    
    const generos = await data.json();

  
    const contenedor = document.createElement("div");
    contenedor.id= "contenedor";

    const seleccione = document.createElement("h3");
    seleccione.textContent = " selecione su sexo:";

    const labelM = document.createElement("label");
    labelM.textContent = "Masculino";
    labelM.setAttribute("for", "masculino")

    const radioButtonM = document.createElement("input");
    radioButtonM.type = "radio";
    radioButtonM.id = "masculino";
    radioButtonM.name = "genero";
    radioButtonM.value = "masculino";

    const labelF = document.createElement("label");
    labelF.textContent = "Femenino";
    labelF.setAttribute("for", "femenino");
    
    const radioButtonF = document.createElement("input");
    radioButtonF.type = "radio";
    radioButtonF.id = "femenino";
    radioButtonF.name = "genero";
    radioButtonF.value = "femenino";

    const labelO = document.createElement("label");
    labelO.textContent = "otro";
    labelO.setAttribute("for","otro");
    
    const radioButtonO = document.createElement("input");
    radioButtonO.type = "radio";
    radioButtonO.id = "otro";
    radioButtonO.name = "genero";
    radioButtonO.value = "otro";

    contenedor.append(seleccione,labelM,radioButtonM,labelF,radioButtonF,labelO,radioButtonO)

    contrasena.insertAdjacentElement("afterend",contenedor);
    
  };