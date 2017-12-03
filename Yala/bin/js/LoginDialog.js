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
var LoginDialog = /** @class */ (function (_super) {
    __extends(LoginDialog, _super);
    function LoginDialog() {
        var _this = _super.call(this) || this;
        _this.pos((Laya.stage.width - _this.width) / 2, (Laya.stage.height - _this.height) / 2);
        _this.btn_close.on(Laya.Event.CLICK, _this, _this.onCLose);
        _this.btn_ok.on(Laya.Event.CLICK, _this, _this.onCLose);
        return _this;
    }
    LoginDialog.prototype.onCLose = function () {
        this.removeSelf();
        this.destroy();
    };
    return LoginDialog;
}(ui.LoginDialogUI));
//# sourceMappingURL=LoginDialog.js.map