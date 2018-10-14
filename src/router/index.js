const path = require('path');
const routers = require('./routes');
const { formateDir, getRoute } = {...require('../utils') };


const directoryPath = path.join(__dirname, '../', 'controller');

// 将controller文件夹整理成一个对象
const routeObject = formateDir(directoryPath);


/**将路由对象配置在express的路由上 */
module.exports = function(app) {
    routers.forEach(item => {
        let [routerPath, method, controller] = [
            item.path || '/error',
            item.method || 'post',
            item.controller || 'error'
        ];

        const conArr = controller.split('.');
        const route = getRoute(routeObject, conArr);

        app[method](routerPath, (req, res) => {
            if (route) {
                route(req, res);
            } else {
                res.send(`${item.controller}控制器找不到`);
            }
        });
    });
};