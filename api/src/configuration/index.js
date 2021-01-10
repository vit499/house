module.exports.port = process.env.PORT || 3003;
module.exports.host = process.env.HOST || "d02--";
module.exports.dbUrl = process.env.MONGO_URL || "mongodb://localhost:27017/db02";
//module.exports.dbUrl = "mongodb://localhost:27017/db02";
module.export.jwtsec = process.env.JWTSEC || 'secret';


