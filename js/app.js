
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
const intentosAnteriores = [];

let juegoTerminado = false;

while (!juegoTerminado) {
  const numeroAdivinado = parseInt(prompt("Adivina el número (entre 1 y 100):"));
  intentosAnteriores.push(numeroAdivinado);

  if (numeroAdivinado === numeroAleatorio) {
    const mensaje = `¡Felicitaciones! ¡Adivinaste el número en ${intentosAnteriores.length} intentos!`;
    document.getElementById("mensaje").textContent = mensaje;
    juegoTerminado = true;
  } else if (numeroAdivinado < numeroAleatorio) {
    const mensaje = "El número es mayor. Intenta nuevamente.";
    document.getElementById("mensaje").textContent = mensaje;
  } else {
    const mensaje = "El número es menor. Intenta nuevamente.";
    document.getElementById("mensaje").textContent = mensaje;
  }
}
