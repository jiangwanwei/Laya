
class NormalDialog extends ui.NormalDialogUI {
    constructor(context: string) {
        super();

        this.context.text = context;

        this.btn_close.on(Laya.Event.CLICK, this, this.close);
        this.btn_ok.on(Laya.Event.CLICK, this, this.close);
    }
}