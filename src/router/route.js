import fs from 'fs';
import path from 'path';

let routeObj = new Object();
const directoryPath = path.join(__dirname, '../', 'controller');

const files = fs.readdirSync(directoryPath);
files.forEach(item => {
    const fileName = path.parse(item).name;
    const filePath = path.join(directoryPath, path.parse(item).base);
    routeObj[fileName] = require(filePath).default;
});

export default routeObj;