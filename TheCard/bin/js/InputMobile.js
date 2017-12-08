var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * 添加电话号码弹窗
 */
var InputMobile = /** @class */ (function (_super) {
    __extends(InputMobile, _super);
    function InputMobile() {
        var _this = _super.call(this) || this;
        _this.setInputProps();
        // 绑定提交按钮事件
        _this.mobile_confim.on(Laya.Event.CLICK, _this, _this.confimHandle);
        return _this;
    }
    // 设置输入框参数
    InputMobile.prototype.setInputProps = function () {
        this.mobile_input.restrict = '0123456789';
        this.mobile_input.maxChars = 11;
        this.mobile_input.align = Laya.Stage.ALIGN_CENTER;
        this.mobile_input.fontSize = 28;
        this.mobile_input.color = '#272626';
        this.mobile_input.prompt = '请输入您的手机号码';
    };
    // 提交电话
    InputMobile.prototype.confimHandle = function () {
        var _this = this;
        if (!/^(0?(13|15|18|14|17)[0-9]{9})$/.test(this.mobile_input.text)) {
            alert('请输入正确的手机号码');
            return;
        }
        var loading = new Loading();
        loading.hide();
        Laya.stage.addChild(loading);
        new Http({
            url: API.BIND_USER,
            data: {
                mobile: this.mobile_input.text,
                wx_openid: GameMain.OPPEN_ID,
            }
        }, function (data) {
            GameMain.TOKEN = data;
            loading.removeSelf();
            loading.destroy();
            _this.close();
        }, function (a) {
            loading.removeSelf();
            loading.destroy();
        });
    };
    return InputMobile;
}(ui.inputMobileUI));
//# sourceMappingURL=InputMobile.js.map