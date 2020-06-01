const mongoose = require('../database');

const TaskSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    priority:{
        type: String,
        required: true,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
})

const Task = mongoose.model('task', TaskSchema);
module.exports = Task;