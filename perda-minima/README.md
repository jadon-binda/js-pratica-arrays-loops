# Perda Mínima

Letícia tem um gráfico de preços projetados para uma casa nos próximos anos. 
Ela deve comprar a casa em um ano e vendê-la em outro, e deve fazê-lo com prejuízo. 
Ela quer minimizar suas perdas financeiras.

Por exemplo, a casa é avaliada em **preço = [20, 15, 8, 2, 12]** nos próximos 5 anos. 
Ela pode comprar a casa em qualquer ano, mas deve revendê-la com prejuízo em um dos anos seguintes. 
Sua perda mínima seria incorrida comprando no 2º ano em __preço[1] = 15__ e revendendo no 5º ano em __preço[4] = 12__.

Encontre e imprima a quantidade mínima de dinheiro que Letícia deve perder se comprar a casa e revendê-la nos próximos anos.

> #### Input Format
A entrada será sempre um array de inteiros de tamanho variado contendo o preço da casa nos próximos anos.

> #### Output Format
A saída sempre será um inteiro representando a perda mínima que Letícia terá.