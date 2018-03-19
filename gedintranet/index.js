var app = require('./config/custom-express')();
const PORT = process.env.PORT;
app.listen((PORT||3000), function(){
  console.log("Servidor rodando!");
});
