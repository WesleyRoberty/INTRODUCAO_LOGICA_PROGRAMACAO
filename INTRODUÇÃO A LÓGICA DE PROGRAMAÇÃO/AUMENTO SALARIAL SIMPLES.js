//ATIVIDADE 13- AUMENTO SALARIAL

var salario = parseInt(prompt("Informe seu salário: "))
var A = 1.15
var B = 1.125
var C = 1.1
if(salario <=500){
    document.write("Seu salário será de: "+salario*A+" R$")
}

    else if(salario <=1000 && salario >500){
    document.write("Seu salário será de: "+salario*B+" R$")
  
    }

    else{
        document.write("Seu salário será de: "+salario*C+" R$")  
    }