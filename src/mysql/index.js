const mysql = require('mysql');
const mysqlConfing = require('../config').mysql;

const connection = mysql.createConnection(mysqlConfing);

module.exports.query = function(sql, values) {
    return new Promise((resolve, reject) => {
        connection.query(sql, values, (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        })
    });
};
module.exports.format = mysql.format;