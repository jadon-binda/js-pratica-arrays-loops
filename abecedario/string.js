function abecedario(arr) {
  let ganhou = 0;
  let perdeu = 0;

  for (const palavra of arr[0].palavras) {
    if (palavra[0] === arr[0].letra) {
      ganhou++;
    } else {
      perdeu++;
    }
  }

  const resultado = `
  - Quantidade de crianças que GANHARAM na rodada: ${ganhou}. 
  - Quantidade de crianças que PERDERAM na rodada: ${perdeu}.`

  return resultado;
}

const entrada = [
  {
    letra: "m",
    palavras: [
      "mamao",
      "maca",
      "melao",
      "melancia",
      "laranja",
    ]
  }
]

console.log(abecedario(entrada));