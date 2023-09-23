while (true) {
    const dia = prompt("Ingresa un día de la semana:");
    
    if (dia === "domingo") {
      alert("Ve a descansar");
      break;
    } else if (dia === "lunes") {
      alert("Es el comienzo de una nueva semana");
    } else if (dia === "martes") {
      alert("¡Ánimo, ya es martes!");
    } else if (dia === "miércoles") {
      alert("Estamos en la mitad de la semana");
    } else if (dia === "jueves") {
      alert("Casi es viernes");
    } else if (dia === "viernes") {
      alert("¡Viernes al fin!");
    } else if (dia === "sábado") {
      alert("Día de relajarse");
    } else {
      alert("Día no válido, intenta de nuevo");
    }
  }
  