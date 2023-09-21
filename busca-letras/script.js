const entrada = {
  "primeiraLetra": "a",
  "segundaLetra": "v",
  "palavras": [
    "aveia",
    "manha",
    "ave"
  ]
}

function buscarLetras(entrada) {
  const primeiraLetra = entrada.primeiraLetra;
  const segundaLetra = entrada.segundaLetra;
  const resultado = [];

  for (const palavra of entrada.palavras) {
    if (palavra[0] === primeiraLetra && palavra[1] === segundaLetra) {
      resultado.push(palavra);
    }
  }

  if (resultado.length === 0) {
    return "NENHUMA";
  } else {
    return resultado;
  }
}

console.log(buscarLetras(entrada));