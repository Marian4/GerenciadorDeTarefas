/*tarefas - lista de objetos (nome, prioridade)
funcionalidades - funções 

.filter e .reduce           return condicao ? true : false

function Tarefa (nome, prioridade) {
    this.nome = nome
    this.prioridade = prioridade
    this.renomear = function(novoNome){
        this.nome = novoNome
    }
}

tarefa = new Tarefa("estudar", "alta")
tarefa2 = new Tarefa("comer", "alta")
console.log(tarefa)
console.log(tarefa2) */

this._M = require('./Tarefa.js')
this._P = require('./Pessoa.js')
this.imprimir = this._P.imprimir