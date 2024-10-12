/*Escreva um programa que simule uma calculadora simples. 
O programa deve solicitar dois números e um operador matemático (adição, subtração, multiplicação ou divisão).
 Exiba o resultado da operação.*/

var A = prompt("Insira o primeiro número");
var B = prompt("Insira o segundo número");

var adicao = (A + B);
var subtracao = (A - B);
var multiplicacao = (A * B);
var divisao = (A / B);

console.log(`${adicao}\n${subtracao}\n${multiplicacao}\n${divisao}`);