const mongoose = require('../database');

const TarefaSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    prioridade:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
})

const Tarefa = mongoose.model('tarefa', TarefaSchema);
module.exports = Tarefa;