const express = require('express');
const User = require('../models/user.js');
const router = express.Router();

router.post('/cadastro', async (req,res) =>{
    try{
        const user = await User.create(req.body);
        res.send({user});
    }
    catch(err){
        res.status(400).send({error: 'Houve uma falha no cadastro.'});
    }
})

module.exports = router;
