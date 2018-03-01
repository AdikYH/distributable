var conexion = require('./dbs');

var schema = conexion.Schema;

var instalacion = conexion.model('Instalacion');

var isometricoSchema = new schema({
  myPointData: [],
  myGradosData: [],
  myDistanciaData: [],
  myTubData: [],
  myTagData: [],
  myComponentesData: [],
  instalacion: {type: schema.ObjectId, ref: 'Instalacion'}
});

var Isometrico = conexion.model('isometricos', isometricoSchema);
module.exports = Isometrico;