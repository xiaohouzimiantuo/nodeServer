import './init';
import express from 'express';
import bodyParser from 'body-parser';

import router from './router';

const app = express();


//POST配置
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


router(app);


const server = app.listen(3333, function() {
    // const host = server.address().address;
    const port = server.address().port;

    console.log(`node server start at localhost:${port}`);
});