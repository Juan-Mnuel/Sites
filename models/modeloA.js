var mongoose = require('mongoose');
var schema = mongoose.Schema;

var Modelo = new schema({

nombre : String,
apellido_p : String,
apellido_m : String,
usuario :{type : String, unique : true},
contraseña	: String, 
puesto : String,
telefono : Number

});

var Administrador =  mongoose.model("Administrador",Modelo);

module.exports = Administrador;
