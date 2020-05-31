const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan("dev"))
app.use(cors())

/*app.get('/', (req,res) =>{
    res.send("Olá");
});*/

app.use(require('./controllers/authController.js'));
app.use(require('./controllers/projectController.js'));
console.log("servidor funcionando")

app.listen(process.env.PORT || 3001);