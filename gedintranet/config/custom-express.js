var express = require('express');
var home = require('../app/routes/home');
var consign = require('consign');
var bodyParser = require('body-parser');

module.exports = function() {

  var app = express();


  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static('./public'))
  app.set('view engine', 'ejs');
  app.set('views','./app/views');

  //
  // consign()
  // .include('controllers')
  // .then('persistencia')

  // .into(app);

  home(app);
  return app;
}
