const calcularDisparos = (disparos) => {
  let contador = 0;

  for (const disparo of disparos) {
    if (disparo > 70) contador++;
  }

  if (contador >= 3) return contador;
  else return "ELIMINADO";
}

const disparos = [0, 50, 90, 80, 100, 80, 40];
const disparos1 = [0, 10, 50, 70, 80, 30];
console.log(calcularDisparos(disparos));
console.log(calcularDisparos(disparos1));