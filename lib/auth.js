var bcrypt = require('bcryptjs');
var Promise = require('bluebird');
var basicauth = require('basic-auth');
var username = process.env.API_USERNAME_POLICY;
var password = process.env.API_PASSWORD_POLICY;

module.exports.authorize = function (request, response, next) {
    var credentials = basicauth(request);

    if (!credentials || credentials.name !== username || credentials.pass !== password) {
        response.statusCode = 401
        response.setHeader('WWW-Authenticate', 'Basic realm="example"')
        response.end('Access denied')
    } else {
        console.log('Access granted')
        next();
    }
};

module.exports.hash_password = function (password) {
    return new Promise(function (resolve, reject) {
        bcrypt.genSalt(10, function (error, salt) {
            if(error) return reject(error);

            bcrypt.hash(password, salt, function (error, hash) {
                if(error) return reject(error);
                return resolve(hash);
            });
        });
    });
};

module.exports.authenticate = function (password, hash) {
    return new Promise(function (resolve, reject) {
        bcrypt.compare(password, hash, function (error, response) {
            if(error) return reject(error);
            return resolve(response);
        });
    });
};
