/*

//TESTAR QUANTOS ELEMENTOS TEM EM UM VETOR

let numeros = [10,20,30,40,50];
console.log(numeros.length);

//TESTAR QUANTOS ELEMENTOS TEM EM UM VETOR E ESCRE-VELOS

let idades = [25,30,35,40,45]
console.log("Elementos do Array idades: ", idades , "\n" , "Tamanho do Array idades: " , idades.length);

//LER UM ARRAY E ESCREVER SOMENTE OS NUMEROS PARES DENTRO DOS ELEMENTOS

let numeros = [1,2,3,4,5,6,7,8,9,10]
for(let i= 0; i<numeros.length; i++){

if(numeros[i]%2 == 0){
    console.log(numeros[i])
}

}

//TESTAR O MAIOR VALOR DENTRO DE UM ARRAY SEM USAR BLOCOS 

var num = [1,2,18,40,89,35,50];
var maior = Math.max(...num);
console.log(maior);

//TESTAR O MAIOR VALOR DENTRO DE UM ARRAY SEM USANDO BLOCOS FOR E IF

let num = [1,2,18,40,89,35,50];
let maiorNumero = num[0];

for(let i= 1; i<num.length; i++){
if(num[i] > maiorNumero){
maiorNumero = num[i];

}
}
console.log(maiorNumero);


//INVERTER A POSIÇÃO DE UM ARRAY 

let num = [1,2,3,4,5]

num.reverse();
console.log(num)

CRIAR  UM ARRAY QUE CONTE QUANTOS SÃO MAIORES QUE 50


let num = [1,2,18,40,89,35,50,60,90,100];
let maiorQueCinquenta = 0;

for(let i= 0; i<num.length; i++){
if(num[i] > 50){
maiorQueCinquenta++;
}
}

console.log(maiorQueCinquenta);   


FIBONACCI
const fibonacci = []
fibonacci [1] = 1; 
fibonacci [2] = 2;

for(let i=3; i<20 ; i++ ){
    fibonacci[i]= fibonacci[i-1] + fibonacci[i- 2];
    
}

for (let i=1; i<fibonacci.length; i++){
 console.log(fibonacci[i]);   
}

 
USO DAS FERRAMENTAS PUSH,SPLICE E SHIFT

let numeros = [0,1,2,3,4,5,6,7,8,9];
numeros[numeros.length] =10;
numeros.shift();
numeros.splice(2,1);
numeros.push(11);
// numeros.shift(); remover o primerio elemento do vetor
//numeros.splice(5,3) o numero 5 se trata da posição onde se quer excluir e o numero 3 se trata de elementos que deseja excluir
//numeros.push() adiciona elementos ao final do vetor
console.log(numeros);


USANDO STRING NO ARRAY TRANSFORMANDO EM TEXTO


let frutas =["maça ", " banana", " laranja "]
let stringFrutas = frutas.join(",")
console.log(stringFrutas)


USO DA FERRAMENTA SORT- PARA COLOCAR STRINGS EM ORDEM ALFABÉTICA

let frutas =["maça","banana","laranja","pera","morango"];
let stringFrutas = frutas.sort();
console.log(stringFrutas);

USO DA FERRAMENTA SORT- PARA COLOCAR NUMEROS EM ORDEM NUMÉRICOS

let numeros =["1","5","3","2","9"];
let stringNumeros = numeros.sort();
console.log(stringNumeros);



let matriz = [
[1, 2, 3],
[4, 5, 6]

];

console.log(matriz[0][1]);
matriz[1][2]=10
console.log(matriz[1][2]);

for(let i=0; i<matriz.length; i++){

for(let j=0; j<matriz[i].length;j++){
console.log(`elemento na posição [${i}][${j}]= ${matriz[i][j]}`);

}    
}


MATRIZ 3D

//definindo uma matriz tridimensional 2x2x2
let matrix3D = [
    [  
     [1,2],
     [3,4]  
   ],
   [
       [5,6],
       [7,8]
   ] 
   ];
   // acessando um elemento na matriz 3D
   console.log(matrix3D[0][1][0]); //saida: 3(primeira "camada" , segunda linha , primeira coluna)
   //varifica a posição da matriz , veridica a linha ,
   // depois verifica a posição do vetor
   
   FATORIAL*/
   function fatorial(n){

if(n===0 || n===1){
return 1;
   }
   return n * fatorial(n-2);
}
   console.log(fatorial(8));



