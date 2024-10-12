//ATIVIDADE 6 -RECIBO DE COMPRAS


//FUNÇÃO PRINCIPAL
function caixaDeMercado(){

let totalGeral = 0;
let numProdutos = parseInt(prompt("Quantos produtos você está comprando? "));
let recibo ="";

//ESTRUTURA DE REPETIÇÃO PARA CAPTURAR INFORMAÇÕES DE CADA PRODUTO 
for (let i =0; i < numProdutos; i++){
     let nomeProduto = prompt(`Informe o produto ${i+1}:`)
let quantidade = parseInt(prompt(`quantidade de ${nomeProduto}: `));
let valorUnitario = parseFloat(prompt(`valor unitário de ${nomeProduto}: `));

//CALCULAR O VALOR TOTAL DO PRODUTO

let valorTotalProduto = quantidade * valorUnitario;
totalGeral += valorTotalProduto;

//ADICIONA INFORMAÇÕES AO RECIBO

recibo += `${nomeProduto}: ${quantidade} x R$ ${valorUnitario.toFixed(2)} = R$ ${valorTotalProduto.toFixed(2)}\n`

}

recibo += `\nTotal geral: R$ ${totalGeral.toFixed(2)}` 
alert(recibo);

}

caixaDeMercado();