const numeroUsuario = parseInt(prompt("Por favor, ingresa un número:"));

for (let i = 1; i <= numeroUsuario; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}
