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
var LoginView = /** @class */ (function (_super) {
    __extends(LoginView, _super);
    // regDlg: RegDialog;
    // loginDlg: LoginDialog;
    function LoginView() {
        var _this = _super.call(this) || this;
        _this.btn_reg.on(Laya.Event.CLICK, null, function () {
            var reg = new RegDialog();
            reg.popup(true);
            Laya.stage.addChild(reg);
        });
        _this.btn_login.on(Laya.Event.CLICK, null, function () {
            var list = new ServerListView();
            Laya.stage.addChild(list);
        });
        return _this;
        // this.btn_reg.on(Laya.Event.CLICK, null, () => {
        //     if (this.regDlg) {
        //         this.regDlg.removeSelf();
        //         this.regDlg.destroy();
        //     }
        //     this.regDlg = new RegDialog();
        //     Laya.stage.addChild(this.regDlg);
        // })
        // this.btn_login.on(Laya.Event.CLICK, null, () => {
        //     if (this.loginDlg) {
        //         this.loginDlg.removeSelf();
        //         this.loginDlg.destroy()
        //     }
        //     this.loginDlg = new LoginDialog();
        //     Laya.stage.addChild(this.loginDlg);
        // })
    }
    LoginView.prototype.showDialog = function (context) {
        return function () {
            var dlg = new NormalDialog(context);
            // dlg.popupEffect = null;    // 显示动画
            dlg.popup(true); // 模式对话框 （居中显示，且不能点击其他地方）true：只显示一个
            // dlg.show(true);    // 非模式对话框 （居中显示，但能点击其他地方）true：只显示一个
            Laya.stage.addChild(dlg);
        };
    };
    return LoginView;
}(ui.LoginUI));
//# sourceMappingURL=LoginView.js.map