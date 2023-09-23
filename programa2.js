const primerNumero = parseInt(prompt("Ingresa el primer número entre 1 y 50:"));
const segundoNumero = parseInt(prompt("Ingresa el segundo número entre 1 y 50:"));

for (let i = 1; i <= 50; i++) {
  if (i === primerNumero || i === segundoNumero) {
    console.log(i + " ¡Lotería!");
  } else {
    console.log(i);
  }
}
