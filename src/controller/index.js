// import path from 'path';


// let thisFile = path.parse(__filename);


// Object.assign(ive.resData, data);

export default function(req, res) {
    let resData = ive.resData({ msg: 'success', info: { data: 123456789 } }, res);
}