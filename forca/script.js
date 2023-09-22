const forca = (palpite, palavra) => {
  let acertos = 0;

  for (const letra of palavra) {
    if (letra === palpite) acertos++;
  }

  return acertos;
}

const letraDoPalpite = 'a';
const palavraEscondida = 'abelha';

console.log(forca(letraDoPalpite, palavraEscondida));