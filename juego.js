function jugar(usuario) {
    // Generar elección de la computadora de forma aleatoria
    var opciones = ['piedra', 'papel', 'tijera'];
    var computadora = opciones[Math.floor(Math.random() * opciones.length)];
  
    // Calcular el resultado utilizando la función switch
    var resultado;
    switch (usuario) {
      case 'piedra':
        switch (computadora) {
          case 'piedra':
            resultado = 'Empate';
            break;
          case 'papel':
            resultado = 'Perdiste';
            break;
          case 'tijera':
            resultado = 'Ganaste';
            break;
        }
        break;
      case 'papel':
        switch (computadora) {
          case 'piedra':
            resultado = 'Ganaste';
            break;
          case 'papel':
            resultado = 'Empate';
            break;
          case 'tijera':
            resultado = 'Perdiste';
            break;
        }
        break;
      case 'tijera':
        switch (computadora) {
          case 'piedra':
            resultado = 'Perdiste';
            break;
          case 'papel':
            resultado = 'Ganaste';
            break;
          case 'tijera':
            resultado = 'Empate';
            break;
        }
        break;
    }
  
    // Mostrar el resultado en la página
    document.getElementById("resultado").innerHTML = "Elegiste " + usuario + ", la computadora eligio " + computadora + ". " + resultado;
  }
