
const tarefas = ["Estudar JavaScript", "Fazer exercícios", "Ler um livro"];


function listarTarefas() {
    console.log("Tarefas:");
    for (let i = 0; i < tarefas.length; i++) {
        console.log((i + 1) + ". " + tarefas[i]);
    }
}


function adicionarTarefa(novaTarefa) {
    tarefas.push(novaTarefa);
    console.log(`Tarefa adicionada: "${novaTarefa}"`);
    listarTarefas(); 
}


function removerTarefa(indice) {
    if (indice >= 0 && indice < tarefas.length) {
        const tarefaRemovida = tarefas.splice(indice, 1);
        console.log(`Tarefa removida: "${tarefaRemovida}"`);
        listarTarefas();
    } else {
        console.log("Índice inválido! Tente novamente por favor.");
    }
}


listarTarefas(); 
adicionarTarefa("Estudar IA"); 
removerTarefa(2); 