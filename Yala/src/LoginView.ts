
class LoginView extends ui.LoginUI {
    // regDlg: RegDialog;
    // loginDlg: LoginDialog;

    constructor() {
        super();

        this.btn_reg.on(Laya.Event.CLICK, null, () => {
            var reg:RegDialog = new RegDialog();
            reg.popup(true);
            Laya.stage.addChild(reg);
        });
        this.btn_login.on(Laya.Event.CLICK, null, () => {
            var list:ServerListView = new ServerListView();

            Laya.stage.addChild(list);
        });
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

    showDialog(context: string):Function {
        return () => {
            var dlg:NormalDialog = new NormalDialog(context);
            // dlg.popupEffect = null;    // 显示动画
            dlg.popup(true);   // 模式对话框 （居中显示，且不能点击其他地方）true：只显示一个
            // dlg.show(true);    // 非模式对话框 （居中显示，但能点击其他地方）true：只显示一个
            Laya.stage.addChild(dlg);
        }
        
    }
}