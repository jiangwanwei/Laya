/**
 * 循环游戏背景
 */
class Background extends Laya.Sprite {
    private bg1: Laya.Sprite;
    private bg2: Laya.Sprite;

    constructor() {
        super();

        this.init();    }

    init():void {
        this.bg1 = new Laya.Sprite();
        this.bg1.loadImage('war/background.png');
        this.addChild(this.bg1);

        this.bg2 = new Laya.Sprite();
        this.bg2.loadImage('war/background.png');
        this.bg2.pos(0, -852);
        this.addChild(this.bg2);
        Laya.timer.frameLoop(1, this, this.onLoop);
        
    }

    onLoop():void {
        this.y += 1;

        if (this.y + this.bg1.y >= 852) {
            this.bg1.y -= 852 * 2;
        }

        if (this.y + this.bg2.y >= 852) {
            this.bg2.y -= 852 * 2;
        }
    }
}