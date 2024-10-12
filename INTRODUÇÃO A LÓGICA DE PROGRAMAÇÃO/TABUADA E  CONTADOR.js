  










   







ATIVIDADE 7 TABUADA DE 1



function contar(){

for(var count =0; count  <=10; count++){
document.write(count+"<br />"+);
}
}

ATIVIDADE 8-  SOMAR DE 1 A 1000

let n = 1;
let soma = 0;

while(n<=1000){
soma += n;
n++;
}
console.log("A soma dos números de 1 a 1000 é: "+soma);

ATIVIDADE 9-UTILIZANDO FOR PARA CRIAR COLUNAS

 function exibir(){
for(var a=0, b=10;  a<=10 && b>=0; a++, b-- )
console.log(a+ "-" +b+"\n");

}

ATIVIDADE 10- ESCRITA EM JAVASCRIPT  DE H1 A H6


function exibir(){

    for(var x=1; x<=6 ;x++)
    document.write("<h"+x+">Oi, sou H"+x+"</h"+x+">");
}

exibir()


ATIVIDADE 11- CONTADOR 

let contador = 0;
for(let i=0; i<10;i++){
    if(i===3){
        continue;
    }

    if(i===7){
        break;
    }
    contador++
    console.log(`i: ${i}, contador: ${contador}`);
}


var a = 100;

var x = 10;



x += a++ + --x;



console.log(x);

function somar(){

for( var soma=0, count=1; count<=200; count++)
soma += count;

document.writeIn("soma"+ soma)
}*/
