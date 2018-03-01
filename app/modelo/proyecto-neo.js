var conexion = require('./dbs');

var schema = conexion.Schema;

var proyectoSchema = new schema({
  proyecto: 'string',
  autor: 'string'/*,
  excel: {}*/
});

var Proyecto = conexion.model('proyectos', proyectoSchema);
module.exports = Proyecto;