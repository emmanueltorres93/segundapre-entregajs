//generador de numero aleatorio entre 1 y 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

const intentosAnteriores = [];

let numeroAdivinado;

let numero;

let juegoTerminado = false;

while (!juegoTerminado) {
  
  numeroAdivinado = parseInt(prompt("Adivina el número (entre 1 y 100):"));

  
  intentosAnteriores.push(numeroAdivinado);

do {
  numero = prompt("Por favor, ingresa un número:");
} while (!numero);


  if (numeroAdivinado === numeroAleatorio) {
    alert(`¡Felicitaciones! ¡Adivinaste el número en ${intentosAnteriores.length} intentos!`);
    juegoTerminado = true;
  } else if (numeroAdivinado < numeroAleatorio) {
    alert("El número es mayor. Intenta nuevamente.");
  } else {
    alert("El número es menor. Intenta nuevamente.");
  }
}
