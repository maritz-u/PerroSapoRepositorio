/* Función que simula el cambio de pantalla */

const move = (close, open) => {
  document.getElementById(close).style.display = "none";
  document.getElementById(open).style.display = "block";
};

/* Función que lleva a la segunda pantalla */

const sapear = document.getElementById("btn-nav");
sapear.addEventListener("click", () => {
  move("primeraPantalla", "empezar-a-sapear");
});

/* Función para volver */

const botonVolver = document.getElementById("botonVolver");
botonVolver.addEventListener("click", () => {
  move("empezar-a-sapear", "primeraPantalla");
});
