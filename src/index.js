var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var config = require('./app/config/config');
var cors = require('cors');
var app = express();
var auth = require('./app/middlewares/authentication').auth;

app.use(morgan('dev'));                                         
app.use(cors());
app.use(bodyParser.urlencoded({'extended':'true'}));            
app.use(bodyParser.json());                                     
app.use(auth);
require('./app/routes/routes')(app);

mongoose.connect(config.db);
        app.listen(config.port, function(err){
	  if(err) throw err;
	  console.log("App listening on port "+config.port);
});


mongoose.connection.on('connected', function () {
  console.log('Mongoose connection open to ' + config.db);
});

module.exports = app;
