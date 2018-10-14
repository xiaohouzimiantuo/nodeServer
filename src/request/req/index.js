// 检查是否有少传参数
module.exports.checkUndefined = function(checkInfo) {
    let tip = '';
    let checkArry = [];
    if (typeof checkInfo === 'string') {
        let oArr = checkInfo.split(',');
        oArr.forEach(item => {
            checkArry.push(item.trim());
        });
    } else {
        checkArry = checkInfo;
    }
    checkArry.forEach(item => {
        if (this.body[item] === undefined) {
            tip += `${item},`;
        }
    });
    return tip ? `${tip.slice(0, -1)}是必传参数！` : tip;
};

//将所有的参数去除前后的空格
module.exports.trimParams = function() {
    let params = new Object;
    Object.keys(this.body).forEach(key => {
        if (typeof this.body[key] === 'string') {
            params[key] = this.body[key].trim();
        } else {
            params[key] = this.body[key];
        }
    });
    return params;
};


//所有参数不能为空
module.exports.refuseEmpty = function() {
    let tip = '';
    Object.keys(this.body).forEach(key => {
        if (!this.body[key]) {
            tip += `${key},`
        }
    });
    return tip ? `${tip.slice(0, -1)}不能为空值！` : tip;
};


/**
 * 缺少公共参数时拒绝服务
 */
module.exports.checkCommonParams = function() {
    let tip = '';
    if (this.body.token === undefined) tip += 'token,';
    if (this.body.client === undefined) tip += 'client,';
    if (this.body.ver === undefined) tip += 'ver,';
    return tip ? `${tip.slice(0, -1)}为必传参数！` : tip;
};