/**
 * http 模块
 */
const codeState = {
    20000: '参数错误',
    21002: '用户已绑定',
}
class Http {
    constructor(_params:any, _complete:Function, _err: Function = () => {}) {
        var xhr:Laya.HttpRequest = new Laya.HttpRequest();
        xhr.once(Laya.Event.COMPLETE, null, (data:any) => {
            if (data.code) {
                alert(codeState[data.code] || data.code);
                _err(JSON.parse(data));
            } else {
                _complete(JSON.parse(data).data || JSON.parse(data)); 
            }                     
        });
        xhr.once(Laya.Event.ERROR, this, this.errHandle);
        // xhr.once('onloadstart', this, this.errHandle);
        var _q:string = '?';
        for (var k in _params.data) {
            _q += `${k}=${_params.data[k]}&`;
        }
        // _q += `token=${}`
        xhr.send(
            'http://' + API.HOST + '/game' + _params.url + _q, 
            // _params.data || '', 
            '',
            _params.type || 'get', 
            'text',
            [
                // "Content-Type", "application/json",
                "Authorization", GameMain.TOKEN,
            ]
        );
    }
    // 请求出错
    errHandle():void {
        alert('请求出错');
    }
}