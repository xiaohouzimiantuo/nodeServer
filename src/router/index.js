import routes from './routes';
import route from './route';

export default function(app) {
    routes.forEach((item) => {
        let [routerPath, method, controller] = [
            item.path || '/error',
            item.method || 'post',
            item.controller || 'error'
        ];
        app[method](routerPath, (req, res) => {
            if (route[controller]) {
                route[controller](req, res);
            } else {
                res.send(`${controller}控制器找不到`);
            }
        });
    });
}