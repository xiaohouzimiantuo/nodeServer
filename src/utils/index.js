const path = require('path');
const fs = require('fs');
module.exports.type = data => Object.prototype.toString.call(data).slice(8, -1);

module.exports.RandomNumBoth = (Min, Max) => {
    const Range = Max - Min;
    const Rand = Math.random();
    const num = Min + Math.round(Rand * Range); //四舍五入
    return num;
}

/**整理文件夹，递归转成一个对象 */
const formateDir = (directoryPath) => {
    if (!directoryPath) return;
    let obj = new Object;
    const files = fs.readdirSync(directoryPath);

    files.forEach(item => {
        const itemPathInfo = path.parse(item);
        const fileName = itemPathInfo.name;
        const filePath = path.join(directoryPath, item);
        try {
            const stat = fs.lstatSync(filePath);
            if (stat.isFile()) {
                obj[fileName] = require(filePath);
            } else if (stat.isDirectory()) {
                obj[fileName] = formateDir(filePath);
            }
        } catch (ex) {
            console.log(ex);
            return `${filePath} is not a directory or file`;
        }
    });
    return obj;
};

module.exports.formateDir = formateDir;


/**层层找路由的方法 */
module.exports.getRoute = (routeObject, controllerArray) => {
    let route = routeObject;
    for (let i = 0; i < controllerArray.length; i++) {
        route = route[controllerArray[i]];
    }
    return route;
};