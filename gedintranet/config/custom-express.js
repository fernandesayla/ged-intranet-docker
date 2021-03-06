var express = require('express');

var consign = require('consign');
var bodyParser = require('body-parser');

module.exports = function() {

  var app = express();


  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  app.use(express.static('./public'))
  app.set('view engine', 'ejs');
  app.set('views','./app/views');


  app.use(bodyParser.urlencoded({extended:	true}));
	app.use(bodyParser.json());
	app.use(require('method-override')());


  consign({cwd: 'app'})
  .include('models')
  .then('persistencia')
  .then('controllers')
  .then('routes')

  .into(app);

  return app;
}
