var express = require('express');
var router = express.Router();

var Modelo = require('../models/modeloS');

router.get('/', function(req,res,next){
	Modelo.find({},function(err1,data){
		if(err1)
                console.log(err1);
		res.json(data);
	});
});
router.get('/id:', function(req,res,next){//este sirve para buscar en "id"
	var id = req.params.id;
	Modelo.findOne({'nombre':id},function(err1,data){
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
		objeto.longitud = Date(req.body.longitud);
		objeto.latitud = Date(req.body.latitud);
		objeto.nombre = Date(req.body.nombre);
		objeto.encargado = Date(req.body.encargado);
		objeto.telefono = Date(req.body.telefono);
		res.json(data);
	});
});

router.put('/:id',function(req,res,next){ //Haces modificacione por el id 
	var id = req.params.id;
	Modelo.findById(id, function(err, data){
			if(err)
				console.log(err);
			data.longitud = req.body.longitud;//especificas el campo a modificar
			data.latitud = req.body.latitud;
			data.nombre = req.body.nombre;
			data.encargado = req.body.encargado;
			data.telefono = req.body.telefono;
			Modelo.update(id,data,function(err1, newdata){
				if(err1)
					console.log(err1);
				res.json(newdata);
			});
	});
});

router.delete('/:id', function(req, res, next) {//elimino uno solo de los registros
	var id = req.params.id;
	Modelo.findByIdAndRemove(id,function(err,data){
		if(err)
			console.log(err1);
		res.json(data);
		});
	});



module.exports = router;
