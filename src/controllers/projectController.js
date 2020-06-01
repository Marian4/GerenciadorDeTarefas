const express = require('express');
const authMiddleware = require('../middlewares/auth.js');
const Task = require('../models/task.js');
const router = express.Router();

router.use(authMiddleware);

router.get('/', async(req,res) =>{
    try{
        const tasks = await Task.find().populate('user');
        return res.status(200).send({tasks});
    }
    catch(err){
        return res.status(400).send({error: 'Error loading tasks.'});
    }
})

router.get('/:taskId', async(req,res) =>{
    try{
        const task = await Task.findById(req.params.taskId).populate('user');
        return res.status(200).send({task});
    }
    catch(err){
        return res.status(400).send({error: 'Error loading task.'});
    }
})

router.post('/create', async(req,res) =>{
    try{
        const task = await Task.create(req.body);
        return res.status(200).json({task});
    }
    catch(err){
        console.log(err);
        return res.status(400).send({error: 'Creation failed.'});
    }
})

router.put('/:taskId', async(req,res) =>{
    res.send({user: req.userId});
})

router.delete('/:taskId', async(req,res) =>{
    try{
        const task = await Task.findByIdAndRemove(req.params.taskId);
        return res.status(200).send('Task deleted.');
    }
    catch(err){
        return res.status(400).send({error: 'Error deleting task.'});
    }
})

module.exports = router;

/*As rotas deste controler funcionam após o login*/

