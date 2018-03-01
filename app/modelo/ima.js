var conexion = require('./dbs');

var schema = conexion.Schema;

//var usuario = conexion.model('users');

var imagenSchema = new schema({
  ruta: 'string'
});

var ImagenDB = conexion.model('imagenes', imagenSchema);
module.exports = ImagenDB;