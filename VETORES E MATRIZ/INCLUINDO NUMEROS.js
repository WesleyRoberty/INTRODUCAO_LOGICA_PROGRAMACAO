
let numero = []
while(true){
let n1 = prompt(" entre com um numero")
if (n1 ===''){
break;
}
let n2 = Number(n1)
if (isNaN(n2)){
prompt("digite um numero valido" )
continue;

}
if (!numero.includes(n2)){
numero.push(n2)
document.write("lista atualizada: " + numero +"<br>")

}else{
document.write("o numero:  " + numero + " está na lista" + "<br>")
}
}
document.write ("lista autalizada :  " + numero)