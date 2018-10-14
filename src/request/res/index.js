const type = require('../../utils').type;


module.exports.resData = function(data) {
    const responseData = {
        code: 0,
        msg: '请求成功',
        info: {}
    };
    if (type(data) == 'Object')
        Object.assign(responseData, data);
    this.json(responseData);
    return responseData;
};