var mongoose = require('mongoose');


//LOCALHOST
mongoose.connect('mongodb://localhost/isoMetrics');

//OPENSHIFT

/*var connection_string = '127.0.0.1:27017/nodejs';

if(process.env.OPENSHIFT_MONGO_DB_PASSWORD){
  connection_string = process.env.OPENSHIFT_MONGO_DB_USERNAME + ':' +
    process.env.OPENSHIFT_MONGO_DB_PASSWORD + '@' +
    process.env.OPENSHIFT_MONGO_DB_HOST + ':' +
    process.env.OPENSHIFT_MONGO_DB_PORT + '/' +
    process.env.OPENSHIFT_APP_NAME;
}

mongoose.connect('mongodb://'+ connection_string);*/

///MODULUS
//mongoose.connect('mongodb://admin:admin@apollo.modulusmongo.net:27017/Zexis9ym');


//mongoose.connect('mongodb://admin:admin@apollo.modulusmongo.net:27017/Zexis9ym');

//mongoose.connect('mongodb://adolfo:adolfo@jello.modulusmongo.net:27017/boP6edet');
//mongodb://<user>:<pass>@jello.modulusmongo.net:27017/boP6edet


module.exports = mongoose;
