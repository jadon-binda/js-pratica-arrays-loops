const calcularPontosNoBrasileirao = (resultados) => {
  let pontuacaoFinal = 0;

  for (const resultado of resultados) {
    if (resultado === 'V') {
      pontuacaoFinal += 3;
    } else if (resultado === 'E') {
      pontuacaoFinal++;
    }
  }

  return pontuacaoFinal;
}

const resultadosClube1 = ['V', 'E', 'V', 'E', 'V', 'E', 'V', 'D', 'E', 'V', 'E'];
const resultadosClube2 = ['V', 'E', 'V', 'E', 'D', 'E', 'E', 'V', 'V', 'V', 'D'];
const resultadosClube3 = ['D', 'V', 'V', 'V', 'D', 'V', 'V', 'E', 'V', 'D', 'V'];

console.log(calcularPontosNoBrasileirao(resultadosClube1));
console.log(calcularPontosNoBrasileirao(resultadosClube2));
console.log(calcularPontosNoBrasileirao(resultadosClube3));