saldoDisponivel = 1000;
valorDoSaque = prompt("Informe o valor que deseja sacar")

if (valorDoSaque <= saldoDisponivel) {
saldoDisponivel = saldoDisponivel - valorDoSaque
document.write("Seu saque é de: ",valorDoSaque , " R$ ")

}else {

document.write("Saldo indisponível")
}

document.write("Saldo atual disponível: ", saldoDisponivel, " R$ ")