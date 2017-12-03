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
var RegDialog = /** @class */ (function (_super) {
    __extends(RegDialog, _super);
    function RegDialog() {
        var _this = _super.call(this) || this;
        _this.btn_submit.on(Laya.Event.CLICK, null, function () {
            var msg = new NormalDialog('注册成功');
            msg.popup(true); // 居中
            Laya.stage.addChild(msg);
            _this.close();
        });
        _this.btn_close.on(Laya.Event.CLICK, _this, _this.close);
        return _this;
    }
    return RegDialog;
}(ui.RegDialogUI));
//# sourceMappingURL=RegDialog.js.map