import {inicio} from "./coverage/paginaInicio.js";
import {galeria} from "./coverage/galeria.js";

export const changeRoute = (hash) => {
    if(hash==="#/"){
        return vistaPagina(hash)
} else if (hash==="#/galeria"){
    return vistaPagina(hash)
}
}

const vistaPagina = (hash) => {
  const containerRoot = document.getElementById("root");
  containerRoot.innerHTML=menu();

  switch(hash) {
      case "#/":
          containerRoot.appendChild(inicio());
          break;
          case "#/galeria":
              containerRoot.appendChild(galeria());
              break;
  }

}