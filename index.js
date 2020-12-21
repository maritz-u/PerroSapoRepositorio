// función que simula el cambio de pantalla

const move = (close, open) => {
  document.getElementById(close).style.display = "none";
  document.getElementById(open).style.display = "block";
};

// función para botón que lleva a la segunda pantalla

const botonJuego = document.getElementById("botonJuego");
botonJuego.addEventListener("click", () => {
  move("container", "showResult");
});

/*función para botón que cierra la segunda pantalla 
  y vuelve al pantalla de inicio*/

const botonVolver = document.getElementById("botonVolver");
botonVolver.addEventListener("click", () => {
  move("showResult", "container");
});
