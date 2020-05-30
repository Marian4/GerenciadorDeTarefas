const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/OrganizadorDeTarefas', {useNewUrlParser: true, poolSize: 5, useUnifiedTopology: true});
mongoose.Promise = global.Promise;

module.exports =  mongoose;