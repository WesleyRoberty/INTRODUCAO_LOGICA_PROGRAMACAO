//ATIVIDADE 9- CONDIÇÃO TERNÁRIA SEPARANDO IMPAR E PAR

var numero = parseInt(prompt("Informe um número"))
var resultado = numero%2 ==0 ? "Par" : "impar" // O PONTO DE INTERROGAÇÃO COMPARA DUAS CONDIÇÕES , A PRIMEIRA ESCRITA NAS "IF" E A SEGUNDA "ELSE"
    document.write(resultado)

//ATIVIDADE 10- CONDIÇÃO TERNÁRIA SEPARANDO  POSITIVO,NEGATIVO OU NEUTRO

var numero = parseInt(prompt("Informe um numero: "));
numero > 0 ? console.log("Positivo") : numero < 0 ? console.log("Negativo") : console.log("Neutro");

//ATIVIDADE 11- EXTRAIR AS INFORMAÇÕES DO TENÁRIO PASSANDO PRO IF E ELSE 

let age = parseInt(prompt("Informe sua idade: "))

if(age >=18){
    document.write("Maior de idade. ")
}

else{ document.write("Menor de idade. ")}