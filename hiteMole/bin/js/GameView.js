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
var Browser = Laya.Browser;
var GameView = /** @class */ (function (_super) {
    __extends(GameView, _super);
    function GameView() {
        var _this = _super.call(this) || this;
        _this.moleNumber = 9; // 地鼠个数
        _this.moles = new Array();
        var hitCallbancHd = Laya.Handler.create(_this, _this.setScore, null, false);
        for (var i = 0; i < _this.moleNumber; i++) {
            var box = _this.getChildByName("item" + i);
            // as TYPE  === <type>   指定类型
            var mole = new Mole(box.getChildByName('normal'), box.getChildByName('hit'), box.getChildByName('scoreImg'), 20, hitCallbancHd);
            _this.moles.push(mole);
        }
        // 加载锤子
        _this.hammer = new Hammer();
        _this.hammer.zOrder = 2;
        _this.hammer.visible = false;
        return _this;
    }
    // 随机显示地鼠
    GameView.prototype.onLoop = function () {
        this.timeBar.value -= (1 / 10);
        if (this.timeBar.value <= 0) {
            this.gameOver();
            return;
        }
        var index = Math.floor(Math.random() * this.moleNumber);
        this.moles[index].show();
    };
    // 开始游戏
    GameView.prototype.gameStart = function () {
        this.timeBar.value = 1;
        this.score = 0;
        GameMain.gameView.updateScoreUI();
        Laya.stage.addChild(this.hammer);
        Laya.timer.loop(1000, this, this.onLoop);
        this.hammer.star();
    };
    // 游戏结束
    GameView.prototype.gameOver = function () {
        Laya.timer.clear(this, this.onLoop);
        this.hammer.end();
        if (!GameMain.gameOver) {
            GameMain.gameOver = new GameOver();
        }
        GameMain.gameOver.centerX = 0;
        GameMain.gameOver.centerY = 50;
        Laya.stage.addChild(GameMain.gameOver);
        GameMain.gameOver.showScore(this.score);
    };
    // 设置分数
    GameView.prototype.setScore = function (type) {
        this.score += (type === 1 ? -100 : 100);
        if (this.score <= 0)
            this.score = 0;
        this.updateScoreUI();
    };
    // 更新分数显示
    GameView.prototype.updateScoreUI = function () {
        var data = {};
        var temp = this.score;
        for (var i = 9; i >= 0; i--) {
            data["item" + i] = { index: Math.floor(temp % 10) };
            temp /= 10;
        }
        this.scoreNums.dataSource = data;
    };
    return GameView;
}(ui.GameUI));
//# sourceMappingURL=GameView.js.map