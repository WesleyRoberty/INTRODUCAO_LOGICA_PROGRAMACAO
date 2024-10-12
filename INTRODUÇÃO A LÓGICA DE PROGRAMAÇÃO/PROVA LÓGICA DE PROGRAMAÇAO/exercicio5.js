/*Faça um programa JavaScript que receba 3 números informados pelo usuário e em seguida apresente uma mensagem de alerta
 informando qual é o maior número dentre os números informados.*/
   
       var numero1    = parseInt(prompt("informe a primeiro número"));
        var numero2 = parseInt(prompt("informe a segundo número"));
        var numero3 = parseInt(prompt("informe a terceiro número"));

        if(numero1>numero2 && numero1>numero3){
        alert("numero1 é o maior! ")
        }
        else if(numero2>numero3){
        alert("numero2 é o maior! ") }

        else{
        alert("numero3 é o maior! ")
        }