const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (req,res) =>{
    res.send("Olá");
})
console.log("servidor funcionando")
require('./controllers/authController.js')(app);

app.listen(process.env.PORT || 4000);