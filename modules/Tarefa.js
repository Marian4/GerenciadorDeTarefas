function Tarefa (nome, prioridade) {
    this.nome = nome
    this.prioridade = prioridade
    this.renomear = function(novoNome){
        this.nome = novoNome
    }
}