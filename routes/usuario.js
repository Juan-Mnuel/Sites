var express = require('express');
var router = express.Router();

var Modelo = require('../models/modeloU');

router.get('/', function(req,res,next){
	Modelo.find({},function(err1,data){
		if(err1)
                console.log(err1);
		res.json(data);
	});
});
router.get('/id', function(req,res,next){//busco por usuario
	var id = req.params.id;
	Modelo.findOne({'usuario':id},function(err1,data){
		if(err1)
                console.log(err1);
		res.json(data);
	});
});

	router.get('/id', function(req,res,next){//Busco por nombre
	var id = req.params.id;
	Modelo.findOne({'usuario':id},function(err1,data){
		if(err1)
                console.log(err1);
		res.json(data);
	});
});

	router.post('/',function(req,res,next){
		Modelo.create(req.body, function(err1,data){
		if(err1)
                console.log(err1);
		var objeto = req.body;
		objeto.nombre = Date(req.body.nombre);
		objeto.apellido_p = Date(req.body.apellido_p);
		objeto.apellido_m = Date(req.body.apellido_m);
		objeto.usuario = Date(req.body.usuario);
		objeto.contraseña = Date(req.body.contraseña);
		objeto.correo = Date(req.body.correo);
		objeto.puesto = Date(req.body.puesto);
		objeto.edad = Date(req.body.edad);
		objeto.telefono = Date(req.body.telefono);
		res.json(data);
	});
});


router.put('/:id',function(req,res,next){ //Haces modificacione por el id 
	var id = req.params.id;
	Modelo.findById(id, function(err, data){
			if(err)
				console.log(err);
			data.nombre = req.body.nombre;//especificas el campo a modificar
			data.apellido_p = req.body.apellido_p;
			data.apellido_m = req.body.apellido_m;
			data.usuario = req.body.usuario;
			data.contraseña = req.body.contraseña;
			data.correo = req.body.correo;
			data.puesto = req.body.puesto;
			data.edad = req.body.edad;
			data.telefono = req.body.telefono;
			Modelo.update(id,data,function(err1, newdata){
				if(err1)
					console.log(err1);
				res.json(newdata);
			});
	});
});

router.delete('/:id', function(req, res, next) { //elimino solo uno de los registros
	var id = req.params.id;
	Modelo.findByIdAndRemove(id,function(err,data){
		if(err)
			console.log(err1);
		res.json(data);
		});
	});


module.exports = router;
