const mongoose = require('mongoose');

const url = "mongodb+srv://8dmarii:ecNIWmFx1g16m1Ww@cluster0-ak8dc.mongodb.net/test?retryWrites=true&w=majority";
const mongoDB = process.env.MONGODB_URI || url;

mongoose.connect(mongoDB, {useNewUrlParser: true, poolSize: 5, useUnifiedTopology: true, useCreateIndex: true});
mongoose.Promise = global.Promise;

module.exports =  mongoose;
