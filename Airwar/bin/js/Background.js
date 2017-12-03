var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * 循环游戏背景
 */
var Background = /** @class */ (function (_super) {
    __extends(Background, _super);
    function Background() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    Background.prototype.init = function () {
        this.bg1 = new Laya.Sprite();
        this.bg1.loadImage('war/background.png');
        this.addChild(this.bg1);
        this.bg2 = new Laya.Sprite();
        this.bg2.loadImage('war/background.png');
        this.bg2.pos(0, -852);
        this.addChild(this.bg2);
        Laya.timer.frameLoop(1, this, this.onLoop);
    };
    Background.prototype.onLoop = function () {
        this.y += 1;
        if (this.y + this.bg1.y >= 852) {
            this.bg1.y -= 852 * 2;
        }
        if (this.y + this.bg2.y >= 852) {
            this.bg2.y -= 852 * 2;
        }
    };
    return Background;
}(Laya.Sprite));
//# sourceMappingURL=Background.js.map