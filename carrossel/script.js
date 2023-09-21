function carrossel(sequencia) {
  let imagem = 0;

  for (let i = 0; i < sequencia.length; i++) {
    if (sequencia[i] === '>') {
      imagem++
    } else if (sequencia[i] === '<') {
      imagem--
    }

    if (imagem < 0) {
      imagem = 6;
    }

    if (imagem > 6) imagem = 0;
  }

  return imagem;
}

console.log(carrossel(">>><>"));
console.log(carrossel(">"));
console.log(carrossel("<"));
console.log(carrossel(">>>>>>>>>"));