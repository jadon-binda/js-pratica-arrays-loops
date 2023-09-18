const nomeCorrompido = "*Canis %lupus )familiaris";
let nomePurificado = "";

for (const caractere of nomeCorrompido) {
  if (caractere !== "!" && caractere !== "@" && caractere !== "#" && caractere !== "$" && caractere !== "%" && caractere !== "&" &&
    caractere !== "*" && caractere !== "(" && caractere !== ")") {
    nomePurificado += caractere;
  }
}

console.log(nomePurificado);