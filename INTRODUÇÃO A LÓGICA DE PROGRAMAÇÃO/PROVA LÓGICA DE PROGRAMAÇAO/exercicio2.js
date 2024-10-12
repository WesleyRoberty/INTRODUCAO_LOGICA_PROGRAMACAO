/*Elabore um programa em Javascript que leia a velocidade permitida em uma estrada e a velocidade de um condutor. Se a velocidade for i
nferior ou igual à permitida, exiba “Sem Multa”. Se a velocidade for de até 20% maior que a permitida, exiba “Multa Leve”. E, se a velocidade
 for superior a 20% da velocidade permitida, exiba “Multa Grave”. Considerar os valores/tempos da tabela a seguir:*/

    var velocidadePermitida = parseInt(prompt("Velocidade permetida é de: "))

    var VelocidadeCondutor = parseInt(prompt("Velocidade registrada é de: "))

    if(VelocidadeCondutor<=velocidadePermitida){
    document.write("Sem Multa")

     }

    else if(VelocidadeCondutor<= velocidadePermitida*1.2){
    document.write("Multa Leve")

     }

    else{
    document.write("Multa Grave")

     }