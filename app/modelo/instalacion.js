var conexion = require('./dbs');

var schema = conexion.Schema;

var proyecto = conexion.model('Proyecto');

var instalacionSchema = new schema({
  
  'Nro' : 'string',
  'DIST' : 'string',
  'ZONA' : 'string',
  'MANZ' : 'string',
  'PREDIO' : 'string',
  'PISO/DPTO' : 'string',
  'APELLIDO PATERNO' : 'string',
  'APELLIDO MATERNO' : 'string',
  'NOMBRES' : 'string',
  'CARNET' : 'string',
  'AVDA/ CALLE' : 'string',
  'TEL/CEL' : 'string',
  'OBSERVACIONES' : 'string',
  proyecto: {type: schema.ObjectId, ref: 'Proyecto'}
  
});

var Instalacion = conexion.model('instalacion', instalacionSchema);
module.exports = Instalacion;