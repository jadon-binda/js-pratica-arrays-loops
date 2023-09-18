const nomeCorrompido = "*Canis %lupus )familiaris";
const caracteresSujos = ["!", "@", "#", "$", "%", "&", "*", "(", ")"];

function removeCaracteresEspeciais(nomeCorrompido) {
  let nomePurificado = "";
  for (const caractere of nomeCorrompido) {
    if (caractere !== "!" && caractere !== "@" && caractere !== "#" && caractere !== "$" && caractere !== "%" && caractere !== "&" &&
      caractere !== "*" && caractere !== "(" && caractere !== ")") {
      nomePurificado += caractere;
    }
  }
  return nomePurificado;
}

console.log(removeCaracteresEspeciais(nomeCorrompido));