function promocao(precos) {
  let total = 0;

  if (precos.length >= 5) {
    let menorPreco;

    for (let i = 0; i < precos.length; i++) {
      if (i === 0) {
        menorPreco = precos[i];
      }

      if (precos[i] < menorPreco) {
        menorPreco = precos[i];
      }

      total += precos[i];
    }

    total -= menorPreco;

  } else {
    for (let preco of precos) {
      total += preco;
    }
  }

  return total;
}

const primeiraCompra = [100, 500, 100, 200, 50];
const segundaCompra = [100, 100, 100, 50];
const terceiraCompra = [200, 1000, 7500, 500, 450];

console.log(promocao(primeiraCompra));
console.log(promocao(segundaCompra));
console.log(promocao(terceiraCompra));