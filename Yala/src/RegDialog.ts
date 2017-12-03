class RegDialog extends ui.RegDialogUI {
    constructor() {
        super();

        this.btn_submit.on(Laya.Event.CLICK, null, () => {
            var msg: NormalDialog = new NormalDialog('注册成功');

            msg.popup(true);  // 居中

            Laya.stage.addChild(msg);

            this.close();
        })

        this.btn_close.on(Laya.Event.CLICK, this, this.close);
    }
}