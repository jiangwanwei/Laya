class Hammer extends ui.HammerUI {
    constructor() {
        super();
    }

    // 开始使用
    star():void {
        Laya.Mouse.hide();
        this.visible = true;
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
        this.onMouseMove();
    }
    // 结束使用
    end():void {
        this.visible = false;
        Laya.Mouse.show();
    }
    onMouseDown():void {
        this.hit.play(1, false);
    }
    onMouseMove():void {
        this.pos(Laya.stage.mouseX - this.width / 2, Laya.stage.mouseY - this.height / 2);
    }
}