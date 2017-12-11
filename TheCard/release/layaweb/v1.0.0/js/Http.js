/**
 * http 模块
 */
var codeState = {
    20000: '参数错误',
    21002: '用户已绑定',
};
var Http = /** @class */ (function () {
    function Http(_params, _complete, _err) {
        if (_err === void 0) { _err = function () { }; }
        var xhr = new Laya.HttpRequest();
        xhr.once(Laya.Event.COMPLETE, null, function (data) {
            if (data.code) {
                alert(codeState[data.code] || data.code);
                _err(JSON.parse(data));
            }
            else {
                _complete(JSON.parse(data).data || JSON.parse(data));
            }
        });
        xhr.once(Laya.Event.ERROR, this, this.errHandle);
        // xhr.once('onloadstart', this, this.errHandle);
        var _q = '?';
        for (var k in _params.data) {
            _q += k + "=" + _params.data[k] + "&";
        }
        // _q += `token=${}`
        xhr.send('http://' + location.hostname.replace(/^game/, 'a') + '/game' + _params.url + _q, 
        // _params.data || '', 
        '', _params.type || 'get', 'text', [
            // "Content-Type", "application/json",
            "Authorization", GameMain.TOKEN,
        ]);
    }
    // 请求出错
    Http.prototype.errHandle = function () {
        alert('请求出错');
    };
    return Http;
}());
//# sourceMappingURL=Http.js.map