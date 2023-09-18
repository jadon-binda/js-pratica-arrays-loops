function removeCaracteresEspeciais(nomeCorrompido) {
  let nomePurificado = "";
  for (const caractere of nomeCorrompido) {
    if (caractere !== "!" && caractere !== "@" && caractere !== "#" &&
      caractere !== "$" && caractere !== "%" && caractere !== "&" &&
      caractere !== "*" && caractere !== "(" && caractere !== ")") {
      nomePurificado += caractere;
    }
  }
  return nomePurificado;
}

console.log(removeCaracteresEspeciais("*Canis %lupus )familiaris)"));
console.log(removeCaracteresEspeciais("Felis) silvestris *catus&"));
console.log(removeCaracteresEspeciais("$Ailuropoda@ melanoleuca!"));