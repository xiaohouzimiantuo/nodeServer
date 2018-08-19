// let resData = (res, code = 0, msg = '请求成功', info = {}) => {
//     res.send({ code, msg, info });
// };

let resData = (data) => {
    let responseData = {
        code: 0,
        msg: '请求成功',
        info: {}
    };

    Object.assign(responseData, data);
    return responseData;
}

global.ive = { resData };
// console.log(resData);