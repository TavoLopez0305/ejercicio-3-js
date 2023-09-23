let resultado = "";

while (true) {
  const entrada = prompt("Ingresa una palabra o letra (Presiona Enter para terminar):");
  if (entrada === "") {
    break;
  }
  resultado += entrada;
}

console.log("Concatenación de palabras capturadas:", resultado);
