import { resData } from '../res';

export function checkCommonParams(req, res) {
    let data = req.body;
    if (!req.body.token || !req.body.ver || !req.body.client) {
        resData({ code: 4, msg: '缺少必须的参数token、client、ver！' }, res);
        return false;
    }

    return true;
}