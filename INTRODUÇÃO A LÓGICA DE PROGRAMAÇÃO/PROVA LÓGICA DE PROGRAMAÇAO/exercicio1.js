/*Leia um número inteiro que representa um código de DDD para discagem interurbana. Em seguida, informe à qual cidade o DDD pertence, 
considerando a tabela abaixo:

Se a entrada for qualquer outro DDD que não esteja presente na tabela acima, o programa deverá informar:
DDD nao cadastrado

Entrada

A entrada consiste de um único valor inteiro.

Saída

Imprima o nome da cidade correspondente ao DDD existente na entrada. Imprima DDD nao cadastrado caso não existir DDD correspondente ao número digitado.*/

var DDD = parseInt(prompt("Insira um DDD: "));
   
    if (DDD === 61){
    document.write("Brasilia")
    }

   else if (DDD === 71){
    document.write("Salvador")
    }

   else if (DDD === 11){
    document.write("Sao Paulo")
    }

    else if (DDD === 21){
    document.write("Rio de Janeiro")
    }

    else if (DDD === 32){
    document.write("Juiz de Fora")
    }

   else if (DDD=== 19){
    document.write("Campinas")
    }

   else if (DDD === 27){
    document.write("Vitoria")
    }

   else if (DDD === 31){
    document.write("Belo Horizonte")
    }

    else{
    document.write("DDD nao cadastrado")
    }