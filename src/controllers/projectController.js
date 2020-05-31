const express = require('express');
const authMiddleware = require('../middlewares/auth.js');
const router = express.Router();

router.use(authMiddleware);

router.get('/', (req,res) =>{
    res.send('ok');
})
router.get('/tarefas', (req,res) =>{
    res.send('tarefas');
})

module.exports = router;

/*As rotas deste controler funcionam após o login*/

