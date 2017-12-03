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
var Hammer = /** @class */ (function (_super) {
    __extends(Hammer, _super);
    function Hammer() {
        return _super.call(this) || this;
    }
    // 开始使用
    Hammer.prototype.star = function () {
        Laya.Mouse.hide();
        this.visible = true;
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
        this.onMouseMove();
    };
    // 结束使用
    Hammer.prototype.end = function () {
        this.visible = false;
        Laya.Mouse.show();
    };
    Hammer.prototype.onMouseDown = function () {
        this.hit.play(1, false);
    };
    Hammer.prototype.onMouseMove = function () {
        this.pos(Laya.stage.mouseX - this.width / 2, Laya.stage.mouseY - this.height / 2);
    };
    return Hammer;
}(ui.HammerUI));
//# sourceMappingURL=Hammer.js.map