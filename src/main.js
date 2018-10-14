const app = require('express')();
const bodyParser = require('body-parser');
const route = require('./router');
const requestMiddleWare = require('./request');

//POST配置
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// 请求中间件
app.use(requestMiddleWare);

//路由配置
route(app);

const server = app.listen(8085, () => {
    const port = server.address().port;
    console.log(`node server start at localhost:${port}`);
});