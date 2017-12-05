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
 * 弹出框
 */
var MyDialog = /** @class */ (function (_super) {
    __extends(MyDialog, _super);
    function MyDialog(txt, callback) {
        var _this = _super.call(this) || this;
        _this.tipTxt = txt;
        _this.btnCallbackHd = callback;
        // 关闭按钮事件
        _this.btn_close.on(Laya.Event.CLICK, _this, _this.close);
        // 确定按钮事件
        _this.confim.on(Laya.Event.CLICK, _this, _this.btnCallbackHd);
        return _this;
    }
    return MyDialog;
}(ui.MyDialogUI));
//# sourceMappingURL=MyDialog.js.map