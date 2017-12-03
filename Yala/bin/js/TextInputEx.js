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
var TextInputEx = /** @class */ (function (_super) {
    __extends(TextInputEx, _super);
    function TextInputEx() {
        var _this = _super.call(this) || this;
        _this.on(Laya.Event.FOCUS, _this, _this.onFocus);
        _this.on(Laya.Event.BLUR, _this, _this.onBlur);
        return _this;
    }
    // 获取焦点
    TextInputEx.prototype.onFocus = function () {
        // 缓存初次文字和颜色
        if (!this.initText) {
            this.initText = this.textField.text;
            this.initColor = this.textField.color;
        }
        // 如果是提示字符串  设置为空和颜色
        if (this.initText === this.textField.text) {
            this.textField.text = '';
            this.textField.color = '#000000';
        }
    };
    // 失去焦点
    TextInputEx.prototype.onBlur = function () {
        if (this.textField.text === '') {
            this.textField.text = this.initText;
        }
        if (this.initText === this.textField.text) {
            this.textField.text = this.initText;
            this.textField.color = this.initColor;
        }
    };
    return TextInputEx;
}(Laya.TextInput));
//# sourceMappingURL=TextInputEx.js.map