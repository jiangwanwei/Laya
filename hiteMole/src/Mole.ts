class Mole {
    private normalState: Laya.Image;     // 正常状态图
    private hitState: Laya.Image;        // 受击打状态图

    private upY: number;                 // 显示时候 y 值
    private downY: number;               // 隐藏时 y 值

    private isHit: boolean;              // 是否是被击打状态
    private isShow: boolean;             // 是否是显示状态
    // private isActive: boolean;           // 是否激活状态

    private type: number;                // 地鼠类型

    private hitCallbancHd: Laya.Handler; // 受击后回调函数

    private scoreImg: Laya.Image;        // 得分图片
    private scoreY: number;              // 得分图片最高点

    constructor(normalState: Laya.Image, hitState: Laya.Image, scoreImg: Laya.Image, downY: number, hitCallbancHd:Laya.Handler) {
        this.normalState = normalState;
        this.hitState = hitState;
        this.downY = downY;
        this.upY = this.normalState.y + 5;

        this.scoreImg = scoreImg;
        this.scoreY = this.scoreImg.y;

        this.hitCallbancHd = hitCallbancHd;

        this.reset();
        this.normalState.on(Laya.Event.MOUSE_DOWN,this,this.hit);
    }

    // 重置
    reset():void {
        this.normalState.visible = false;
        this.hitState.visible = false;
        // this.isActive = false;
        this.isShow = false;
        this.isHit = false;
        this.scoreImg.visible = false;
    }
    // 显示
    show():void {
        // if (this.isActive) return;
        // this.isActive = true;
        if (this.isShow) return;
        this.isShow = true;
        this.normalState.y = this.downY;
        this.type = Math.random() < 0.3 ? 1 : 2;
        this.normalState.skin = `ui/mouse_normal_${this.type}.png`;
        this.hitState.skin = `ui/mouse_hit_${this.type}.png`;
        this.scoreImg.skin = `ui/score_${this.type}.png`;
        this.normalState.visible = true;
        Laya.Tween.to( this.normalState, {y: this.upY}, 500, Laya.Ease.backOut, Laya.Handler.create(this, this.showComplete));
    }
    // 停留
    showComplete():void {
        if (this.isShow && !this.isHit) {
            Laya.timer.once(2000, this, this.hide);
        }
    }
    // 隐藏
    hide():void {
        if (this.isShow && !this.isHit) {
            this.isShow = false;
            Laya.Tween.to(this.normalState, {y: this.downY}, 300, Laya.Ease.backIn, Laya.Handler.create(this, this.reset));
        }
    }
    // 受击
    hit():void {
        if (this.isShow && !this.isHit) {
            this.isHit = true;
            this.isShow = false;
            Laya.timer.clear(this, this.hide)
            this.normalState.visible = false;
            this.hitState.visible = true;
            this.hitCallbancHd.runWith(this.type);
            Laya.timer.once(500, this, this.reset);
            this.showScore();
        }
    }
    // 显示得分数
    showScore():void {
        this.scoreImg.y = this.scoreY + 30;
        this.scoreImg.scale(0, 0);
        this.scoreImg.visible = true;
        Laya.Tween.to(this.scoreImg, {y: this.scoreY, scaleY: 1, scaleX: 1}, 300, Laya.Ease.backOut);
    }
}