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
 * 游戏主界面
 */
var GameView = /** @class */ (function (_super) {
    __extends(GameView, _super);
    function GameView() {
        var _this = _super.call(this) || this;
        // 卡牌数量
        _this.cardNum = 9;
        // 奖励列表
        _this.awardData = { 2: '积分 x 1', 3: '积分 x 3', 4: '积分 x 5', 5: '百瑞蛋糕1榜', 6: '娜可露露蛋糕1榜', 7: '越慢玫瑰蛋糕1榜' };
        _this.updateChanceNum();
        _this.reset();
        // 卡牌绑定点击事件
        _this.cardList.mouseHandler = Laya.Handler.create(_this, _this.cardSelect, null, false);
        return _this;
    }
    // 重置界面
    GameView.prototype.reset = function () {
        // 设置舞台背景颜色
        Laya.stage.bgColor = '#ff5529';
        this.initCardListAnimate();
    };
    // 初始化卡牌 (发牌动画)
    GameView.prototype.initCardListAnimate = function () {
        var dataSource = [];
        for (var i = 0; i < this.cardNum; i++) {
            // 添加List数据源
            dataSource.push({ card: { skin: 'ui/card_init.jpg' } });
            // 初始化card属性
            this.cardList.getCell(i).x = 0;
            this.cardList.getCell(i).y = 0;
            this.cardList.getCell(i).skewY = 0;
            var _props = {};
            if ([0, 3, 6].indexOf(i) !== -1) {
                _props.x = 0;
            }
            else if ([1, 4, 7].indexOf(i) !== -1) {
                _props.x = 211;
            }
            else {
                _props.x = 422;
            }
            if ([0, 1, 2].indexOf(i) !== -1) {
                _props.y = 0;
            }
            else if ([3, 4, 5].indexOf(i) !== -1) {
                _props.y = 252;
            }
            else {
                _props.y = 504;
            }
            Laya.Tween.to(this.cardList.getCell(i), _props, 200, Laya.Ease.bounceInOut, null, i * 100);
        }
        // 所有动画执行完毕开启点击事件
        Laya.timer.once(this.cardNum * 100, null, function () {
            GameView.isAllow = true;
        });
        // 设置List数据源
        this.cardList.dataSource = dataSource;
    };
    // 更新次数
    GameView.prototype.updateChanceNum = function () {
        this.chanceNum.index = GameView.chanceNum;
    };
    // 开始翻盘
    GameView.prototype.cardSelect = function (e, index) {
        if (!GameView.isAllow)
            return;
        if (GameView.chanceNum <= 0) {
            // 显示机会用完
            return;
        }
        e.stopPropagation();
        if (e.type === 'mousedown') {
            GameView.isAllow = false;
            this.curIndex = index;
            Laya.Tween.to(this.cardList.getCell(index).getChildByName('card'), { skewY: 360 }, 300, Laya.Ease.bounceIn, Laya.Handler.create(this, this.setCurCardResult));
        }
    };
    // 设置选中翻盘结果
    GameView.prototype.setCurCardResult = function () {
        var r = Math.ceil(Math.random() * 100), type = r < 50 ? 1 : r < 35 ? 2 : r < 25 ? 3 : r < 20 ? 4 : 5;
        if (type === 5) {
            type = [5, 6, 7][Math.floor(Math.random() * 3)];
        }
        this.curAwardType = type;
        var _res = { card: { skin: "ui/award_" + type + ".png" } };
        this.cardList.setItem(this.curIndex, _res);
        // 次数-1
        GameView.chanceNum -= 1;
        this.updateChanceNum();
        Laya.timer.once(1000, this, this.setOtherCardResult);
    };
    // 设置其他牌结果
    GameView.prototype.setOtherCardResult = function () {
        var dataSource = [];
        for (var i = 0; i < this.cardNum; i++) {
            if (i === this.curIndex) {
                var _data = { card: { skin: "ui/award_" + this.curAwardType + ".png" } };
            }
            else {
                var r = Math.ceil(Math.random() * 100), type = r < 50 ? 4 : r < 35 ? 5 : r < 25 ? 3 : r < 20 ? 2 : 1;
                if (type === 5) {
                    type = [5, 6, 7][Math.floor(Math.random() * 3)];
                }
                var _data = { card: { skin: "ui/award_" + Math.ceil(Math.random() * 7) + ".png" } };
            }
            dataSource.push(_data);
        }
        this.cardList.dataSource = dataSource;
        Laya.timer.once(300, this, this.showResult);
    };
    // 显示结果弹窗
    GameView.prototype.showResult = function () {
        var _this = this;
        var _restxt = '恭 喜 您 获 得';
        if (this.curAwardType === 1)
            _restxt = '\n 运气不佳，差一点点~ \n \n 再接再厉！';
        var dlg = new MyDialog(_restxt, function () {
            dlg.close();
            _this.reset();
        });
        var dlgManager = new Laya.DialogManager();
        if (this.curAwardType === 1) {
            dlg.awardImg.removeSelf();
            dlg.confim.y = 260;
        }
        else {
            dlg.awardImg.skin = "ui/award_" + this.curAwardType + ".png";
            dlg.confim.y = 290;
        }
        dlgManager.closeEffectHandler = null; // 关闭默认dialog关闭效果
        dlgManager.open(dlg);
        this.addChild(dlgManager);
    };
    // 游戏次数
    GameView.chanceNum = 5;
    // 是否允许翻盘
    GameView.isAllow = false;
    return GameView;
}(ui.GameViewUI));
//# sourceMappingURL=GameView.js.map