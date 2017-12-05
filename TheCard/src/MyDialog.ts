/**
 * 弹出框
 */
class MyDialog extends ui.MyDialogUI {
    constructor(txt: string, callback: Function) {
        super();
        this.context.text = txt;        
        // 关闭按钮事件
        this.btn_close.on(Laya.Event.CLICK, this, this.close);
        // 确定按钮事件
        this.confim.on(Laya.Event.CLICK, this, callback);
    }
}