/*Exercícios | Revisão
Questão 1: Implemente um loop for que imprima os números de 1 a 10.
Questão 2: Crie um loop for que imprima os números pares entre 1 e 20.
Questão 3: Escreva um loop for que some os números de 1 a 100 e exiba o 
resultado.
Questão 4: Use um loop for para imprimir os elementos de um array.
Questão 5: Escreva um loop for que percorra de 1 a 10 e, se o número for 
divisível por 3, exiba "Fizz", caso contrário, exiba o número.
Questão 6: Escreva um loop while que imprima os números de 10 a 1.
Questão 7: Crie um loop while que conte de 1 a 20 e exiba apenas os números 
ímpares.
Questão 8: Implemente um loop while que continue pedindo para o usuário 
inserir um número até que ele digite um número maior que 100.
Questão 9: Escreva um loop while que calcule a soma dos números de 1 a 50.
Questão 10: Use um loop while para percorrer os caracteres de uma string e 
exibi-los um a um.
Questão 11: Implemente um loop do while que imprima os números de 1 a 5.
Questão 12: Escreva um loop do while que execute pelo menos uma vez e peça 
ao usuário para inserir um número até que ele insira um valor negativo.
Questão 13: Crie um loop do while que conte de 10 a 1 e exiba os números.
Questão 14: Utilize um loop do while que continue pedindo ao usuário para 
digitar "sim" até que ele digite algo diferente.
Questão 15: Implemente um loop do while que percorra um array e exiba seus 
elementos, mas deve parar se encontrar o valor "parar"

QUESTÃO 1

for(var x=1; x<=10 ;x++)
    console.log(x)

QUESTÃO 2

for(let i=1; i<=20;i++){
    if(i%2 ==0){

  console.log(i)}
}

QUESTÃO 3


let somar = 0;

for(let i=1; i<=100;i++){
somar += i;
}

console.log(somar);

QUESTÃO 4 

const array = [3,5,7,9];
for(let i=0; i <vetor.length; i++){

console.log(vetor[i]);
}

QUESTÃO 5 

for(let i=1; i<=10;i++){
    if(i%3 ==0){

  console.log("FIZZ")}

  else{
    console.log(i)

  }
}

QUESTÃO 6

cont = 10

while(cont<=10 && cont>=1){
console.log(cont);
cont --;}

QUESTÃO 7

cont = 1

while(cont<=20 && cont>=1){

if(cont %2 ==1)  
console.log(cont);
cont ++;}

QUESTÃO 8

let num =0;
while(num<=100){
num = parseInt(prompt("Insira um número: "))

}

console.log(num)

/*QUESTÃO 9

let n = 1;
let soma = 0;

while(n<=50){
soma += n;
n++;


}
console.log("A soma dos números de 1 a 50 é: "+soma);

QUESTÃO 10

let str = "CO.DE School | VWCO"
let i=0;
while(i<str.length)
{

  console.log(str[i]);
  i++
}

QUESTÃO 11

let i = 1;
do{
  console.log(i);
  i++

}
while (i<=5);

QUESTÃO 12

let i =1;
do{
console.log(i);
i++
}

while(i<=0)

  let num =0;
do{
  num = parseInt(prompt("Insira um número: "))
}
  while(num>=0){
  }
  console.log(num)

 QUESTÃO 13 

 let i =10;

 do{
console.log(i);
i--
 }
 while(i<=10 && i>0);

QUESTÃO 14

let str ="sim";

do{
  str= (prompt("Você confirma não ser umm robô? "))

}
while(str.toLowerCase()=="sim"){
//toUpperCase() faz colocar o nome todo em maiusculo
//toLowerCase() faz colocar o nome todo em minusculo
}

console.log(str)

QUESTÃO 15

let nomes = ["Diana","Fabio","Alan","Saulo","Fernando","Luis","parar","Wesley","Stephanie"];
let i=0;

do{
console.log(nomes[i]);
i++;
if (nomes[i] === "parar"){
  break;
}

}

while( i < nomes.length )

 */
