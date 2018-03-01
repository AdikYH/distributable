var conexion = require('./dbs');

var schema = conexion.Schema;

//var usuario = conexion.model('users');

var proyectoSchema = new schema({
  proyecto: 'string',
  autor: 'string',
  //////////////////////////////
  eRazonSocial : 'string',
  
  eImagenLogo : 'string',
  eTextoLogo : 'string',
  
  eResolucion : 'string',
  eDireccion : 'string',
  eTelefono : 'string',
  eProyectista : 'string',
  eRegistroP : 'string',
  eInstalador : 'string',
  eRegistroI : 'string',
  pNumero : 'string',
  pLocalidad : 'string',
  pDepartamento : 'string',
  pLocalidadC : 'string',
  pDepartamentoC : 'string',
  
  ////////////////////////////////////
  // VARIABLES DE PROYECTO
  ////////////////////////////////////
  
  vCaneria : 'string',
  vCodoPipa34 : [],
  vHexagonal34 : [],
  vCarburo1K : [],
  vMaterialExcedente : [],
  
  
  vPrecioMateriales: [],
  //vPagoYPFB: [],
  vPagoYPFB: {},
  pNombreZona: 'string',
  
  vSueldo12 : 'string',
  vSueldo34 : 'string',
  vSueldo01 : 'string',
  vSueldo14 : 'string',
  vCostoIn12 : 'string',
  vCostoOu12 : 'string',
  vCostoIn34 : 'string',
  vCostoOu34 : 'string',
  vCostoIn01 : 'string',
  vCostoOu01 : 'string',
  vCostoIn14 : 'string',
  vCostoOu14 : 'string',
  
  //////////////////////////////
  excel: {},
  creacion: Date,
  usuario: {type: schema.ObjectId, ref: 'User'}
});

var Proyecto = conexion.model('proyectos', proyectoSchema);
module.exports = Proyecto;