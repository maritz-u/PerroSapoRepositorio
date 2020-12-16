import { inicio } from "./vistas/paginaInicio.js";
import {galeria} from "./vistas/galeria.js";
import {changeRoute} from "./routing.js";

const app = () => {
document.getElementById('root').innerHTML= inicio
    
     window.addEventListener('hashchange', () => {
       changeRoute(window.location.hash);
    })
}
window.addEventListener('load', app);