//convertir archivo json a datos primitivos JS y agregando elementos del radioButton con el DOM
export const generos = async (formulario) => {
    const data = await fetch("generos.json");
    const generos = await data.json();
    const div = document.createElement("div");
    div.classList.add("radios");
    generos.forEach(({id,tipo}) => {
      const label = document.createElement("label");
      const input = document.createElement("input");

      //agregar los atributos
      label.setAttribute("for", `genero_${id}`);
      label.textContent = tipo;
      input.setAttribute("id",`genero_${id}`);
      input.setAttribute("type", "radio");
      input.setAttribute("name", "genero");
      input.value = id;
      div.append(label,input);
      
    });

    const btn = formulario.querySelector("button");
    btn.insertAdjacentElement("beforebegin",div);

  
    // const contenedor = document.createElement("div");
    // contenedor.id= "contenedor";

    // const seleccione = document.createElement("h3");
    // seleccione.textContent = " selecione su sexo:";

    // const labelM = document.createElement("label");
    // labelM.textContent = "Masculino";
    // labelM.setAttribute("for", "masculino")

    // const radioButtonM = document.createElement("input");
    // radioButtonM.type = "radio";
    // radioButtonM.id = "masculino";
    // radioButtonM.name = "genero";
    // radioButtonM.value = "masculino";

    // const labelF = document.createElement("label");
    // labelF.textContent = "Femenino";
    // labelF.setAttribute("for", "femenino");
    
    // const radioButtonF = document.createElement("input");
    // radioButtonF.type = "radio";
    // radioButtonF.id = "femenino";
    // radioButtonF.name = "genero";
    // radioButtonF.value = "femenino";

    // const labelO = document.createElement("label");
    // labelO.textContent = "otro";
    // labelO.setAttribute("for","otro");
    
    // const radioButtonO = document.createElement("input");
    // radioButtonO.type = "radio";
    // radioButtonO.id = "otro";
    // radioButtonO.name = "genero";
    // radioButtonO.value = "otro";

    // contenedor.append(seleccione,labelM,radioButtonM,labelF,radioButtonF,labelO,radioButtonO)

    // contrasena.insertAdjacentElement("afterend",contenedor);
    
  };
  