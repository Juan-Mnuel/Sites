var mongoose = require('mongoose');
var schema = mongoose.Schema;

var Modelo = new schema({

nombre : String,
apellido_p : String,
apellido_m : String,
usuario :{type : String, unique : true},
contraseña : String,
correo : String,
puesto : String,
edad : Number,
telefono : Number

});

var Usuario =  mongoose.model("Usuario",Modelo);

module.exports = Usuario;
