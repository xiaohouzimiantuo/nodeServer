// let resData = (res, code = 0, msg = '请求成功', info = {}) => {
//     res.send({ code, msg, info });
// };

export function resData(data, res) {
    let responseData = {
        code: 0,
        msg: '请求成功',
        info: {}
    };

    Object.assign(responseData, data);

    if (res) {
        res.send(responseData);
    }
    return responseData;
}