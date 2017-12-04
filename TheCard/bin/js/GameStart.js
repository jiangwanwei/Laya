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
 * 游戏开始界面
 */
var GameStart = /** @class */ (function (_super) {
    __extends(GameStart, _super);
    function GameStart() {
        var _this = _super.call(this) || this;
        // 绑定显示规则事件
        _this.btn_rule.on(Laya.Event.MOUSE_DOWN, _this, _this.setRuleState(true, _this.rule));
        // 绑定隐藏规则事件
        _this.btn_rule_close.on(Laya.Event.MOUSE_DOWN, _this, _this.setRuleState(false, _this.rule));
        _this.setDefaultProp(_this.rule);
        // 绑定显示我奖励事件
        _this.btn_my_award.on(Laya.Event.MOUSE_DOWN, _this, _this.setRuleState(true, _this.my_award));
        // 绑定隐藏我奖励事件
        _this.btn_close_award.on(Laya.Event.MOUSE_DOWN, _this, _this.setRuleState(false, _this.my_award));
        _this.setDefaultProp(_this.my_award);
        return _this;
    }
    // 设置规则默认属性
    GameStart.prototype.setDefaultProp = function (target) {
        target.scaleX = .5;
        target.scaleY = .5;
        target.alpha = 0;
        target.anchorX = .5;
        target.anchorY = .5;
        target.pos(Laya.stage.width / 2, Laya.stage.height / 2);
    };
    // 显示隐藏 规则
    GameStart.prototype.setRuleState = function (state, target) {
        var _this = this;
        return function () {
            if (state) {
                var prop = {
                    scaleX: 1,
                    scaleY: 1,
                    alpha: 1,
                };
                target.visible = state;
                Laya.Tween.to(target, prop, 200, Laya.Ease.backOut);
                return;
            }
            _this.setDefaultProp(target);
        };
    };
    return GameStart;
}(ui.IndexUI));
//# sourceMappingURL=GameStart.js.map