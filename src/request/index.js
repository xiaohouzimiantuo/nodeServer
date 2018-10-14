const myReq = require('./req');
const myRes = require('./res');

module.exports = (req, res, next) => {
    Object.assign(req, myReq);
    Object.assign(res, myRes);
    next();
};