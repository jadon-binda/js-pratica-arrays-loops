const calculaNotasManobra = (notas) => {
  let media = 0, maiorNota = 0, menorNota = 100, qtdNotas = 0;

  for (const nota of notas) {
    if (nota > maiorNota) maiorNota = nota;
    if (nota < menorNota) menorNota = nota;
    media += nota;
    qtdNotas++;
  }

  media -= maiorNota;
  media -= menorNota;
  media /= (qtdNotas - 2);

  return Number(media.toFixed(2));
}

const notas1 = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100];
const notas2 = [100, 50, 86, 34, 73, 99, 98, 75];
const notas3 = [10, 100, 100, 80, 70, 64, 25, 88, 67];
console.log(calculaNotasManobra(notas1));
console.log(calculaNotasManobra(notas2));
console.log(calculaNotasManobra(notas3));