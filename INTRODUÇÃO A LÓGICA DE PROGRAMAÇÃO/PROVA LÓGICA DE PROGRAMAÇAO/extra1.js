/*[Questão extra]: Elabore um programa que solicite ao usuário um número inteiro positivo e exiba uma contagem regressiva de 10 até esse
 número (em decrementos de 1). Caso o valor digitado seja menor que 10, exiba uma mensagem de erro.*/

var num = parseInt(prompt("Insira um número positivo"));

cont = 10

while(cont<=10 && cont>=num){

    if(num<=10 && num>0){
        console.log(cont)
        cont --;
        }  

        else{
            console.log("erro")   
        }
               
    }





    
