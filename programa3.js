const numeros = [];

while (true) {
  const numero = parseInt(prompt("Ingresa un número (0 para terminar):"));
  if (numero === 0) {
    break;
  }
  numeros.push(numero);
}

console.log("Números capturados:", numeros);
