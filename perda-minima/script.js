const perdaMinima = (precos) => {
  let menorDiferenca = 100;

  for (i = 0; i < precos.length; i++) {
    for (j = i + 1; j < precos.length; j++) {
      let diferenca = precos[i] - precos[j];

      if (diferenca > 0 && diferenca < menorDiferenca) {
        menorDiferenca = diferenca;
      }
    }
  }

  return menorDiferenca;
}

const precosDaCasa1 = [20, 15, 8, 2, 12];
const precosDaCasa2 = [5, 10, 3];
const precosDaCasa3 = [30, 10, 54, 76, 1, 4, 35];
const precosDaCasa4 = [50, 8, 107, 46, 5, 12, 7, 33, 28];
console.log(perdaMinima(precosDaCasa1));
console.log(perdaMinima(precosDaCasa2));
console.log(perdaMinima(precosDaCasa3));
console.log(perdaMinima(precosDaCasa4));