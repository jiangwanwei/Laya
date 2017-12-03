var Mole = /** @class */ (function () {
    function Mole(normalState, hitState, scoreImg, downY, hitCallbancHd) {
        this.normalState = normalState;
        this.hitState = hitState;
        this.downY = downY;
        this.upY = this.normalState.y + 5;
        this.scoreImg = scoreImg;
        this.scoreY = this.scoreImg.y;
        this.hitCallbancHd = hitCallbancHd;
        this.reset();
        this.normalState.on(Laya.Event.MOUSE_DOWN, this, this.hit);
    }
    // 重置
    Mole.prototype.reset = function () {
        this.normalState.visible = false;
        this.hitState.visible = false;
        // this.isActive = false;
        this.isShow = false;
        this.isHit = false;
        this.scoreImg.visible = false;
    };
    // 显示
    Mole.prototype.show = function () {
        // if (this.isActive) return;
        // this.isActive = true;
        if (this.isShow)
            return;
        this.isShow = true;
        this.normalState.y = this.downY;
        this.type = Math.random() < 0.3 ? 1 : 2;
        this.normalState.skin = "ui/mouse_normal_" + this.type + ".png";
        this.hitState.skin = "ui/mouse_hit_" + this.type + ".png";
        this.scoreImg.skin = "ui/score_" + this.type + ".png";
        this.normalState.visible = true;
        Laya.Tween.to(this.normalState, { y: this.upY }, 500, Laya.Ease.backOut, Laya.Handler.create(this, this.showComplete));
    };
    // 停留
    Mole.prototype.showComplete = function () {
        if (this.isShow && !this.isHit) {
            Laya.timer.once(2000, this, this.hide);
        }
    };
    // 隐藏
    Mole.prototype.hide = function () {
        if (this.isShow && !this.isHit) {
            this.isShow = false;
            Laya.Tween.to(this.normalState, { y: this.downY }, 300, Laya.Ease.backIn, Laya.Handler.create(this, this.reset));
        }
    };
    // 受击
    Mole.prototype.hit = function () {
        if (this.isShow && !this.isHit) {
            this.isHit = true;
            this.isShow = false;
            Laya.timer.clear(this, this.hide);
            this.normalState.visible = false;
            this.hitState.visible = true;
            this.hitCallbancHd.runWith(this.type);
            Laya.timer.once(500, this, this.reset);
            this.showScore();
        }
    };
    // 显示得分数
    Mole.prototype.showScore = function () {
        this.scoreImg.y = this.scoreY + 30;
        this.scoreImg.scale(0, 0);
        this.scoreImg.visible = true;
        Laya.Tween.to(this.scoreImg, { y: this.scoreY, scaleY: 1, scaleX: 1 }, 300, Laya.Ease.backOut);
    };
    return Mole;
}());
//# sourceMappingURL=Mole.js.map