const express = require('express');
const bodyParser = require('body-parser'); 
const mongoose = require('mongoose');

//setting express app
const app = express();

//connect to mongoDB
var promise = mongoose.connect('mongodb://localhost/playersgo', {
    useMongoClient: true});
    mongoose.Promise = global.Promise;


//initaiate middleware  
app.use(bodyParser.json());

//initiate routes
app.use('/api', require('./routes/api'));

//error handling

app.use(function(err, req, res, next){

    //console.log(err);
    res.status(422).send({error: err.message});
});
// Listening to requests
app.listen(3000, function(){

    console.log('application running, listening to requests');

});

