/**
 * 弹出框
 */
class MyDialog extends ui.MyDialogUI {
    private context: any;
    constructor(_w: number, _h: number) {
        super();

        this.width = _w;
        this.height = _h;
        // this.context = _context;

        this.init();

        this.btn_close.on(Laya.Event.CLICK, this, this.close);
    }
    init():void {
        // this.pos((Laya.stage.width - this.width) / 2, (Laya.stage.height - this.height) / 2);
    }
}