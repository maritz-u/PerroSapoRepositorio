import { inicio } from "./coverage/paginaInicio";
import {galeria} from "./coverage/galeria";
import {changeRoute} from "./routing.js";

const app = () => {
document.getElementById('root').innerHTML= inicio()
    
     window.addEventListener('hashchange', () => {
       changeRoute(window.location.hash);
    })
}
window.addEventListener('load', app);