var mongoose = require('mongoose');
var schema = mongoose.Schema;

var Modelo = new schema({

latitud :{type : Number, unique : true},
longitud :{type : Number, unique : true},
nombre : String,
encargado : String,
telefono : Number

});

var Site =  mongoose.model("Site",Modelo);

module.exports = Site;
