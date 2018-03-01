var conexion = require('./dbs');
// var bcrypt = require('bcrypt');

var schema = conexion.Schema;

var userSchema = new schema({
  usuario: 'string',
  password: 'string',
  role: 'string',
  tiempo: 'string',
  creado: Date,
  update: Date,
  limite: Number
});

userSchema.methods.generatedHash = function(password){
  return password;//bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};
userSchema.methods.validPassword = function(password){
  if(password == this.password)
    return true;
  return false;//bcrypt.compareSync(password, this.password);
};

var User = conexion.model('users', userSchema);
module.exports = User;
