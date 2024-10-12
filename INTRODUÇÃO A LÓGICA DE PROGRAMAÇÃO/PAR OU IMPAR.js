
//ATIVIDADE 6-VERIFICA SE O NUMERO É PAR OU IMPAR

    var num = parseInt(prompt("Informe um numero: "))
    
    if(num%2 == 0){
        document.write("Par")
    }
    else{var num1 = parseInt(prompt("informe a primeiro número"));
        var num2 = parseInt(prompt("informe a segundo número"));
        var num3 = parseInt(prompt("informe a terceiro número"));

        if(num1>num2 && num1>num3){
        document.write("num1")
        }
        else if(num2>num3){
        document.write("num2") }

        else{
        document.write("num3")
        }
        document.write("Impar")
    }