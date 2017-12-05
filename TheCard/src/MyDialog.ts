/**
 * 弹出框
 */
class MyDialog extends ui.MyDialogUI {
    // 提示的文章
    private tipTxt: string;
    // 按钮回调
    private btnCallbackHd: Function;

    constructor(txt: string, callback: Function) {
        super();
        this.tipTxt = txt;
        this.btnCallbackHd = callback;

        // 关闭按钮事件
        this.btn_close.on(Laya.Event.CLICK, this, this.close);
        // 确定按钮事件
        this.confim.on(Laya.Event.CLICK, this, this.btnCallbackHd);
    }
}