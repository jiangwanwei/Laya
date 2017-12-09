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
        // 单个滚动信息的宽度
        _this.LOOP_TEXT_UNIT_WIDTH = 300;
        // 开始页面所有按钮绑定事件
        _this.bindEvent();
        // 设置body背景颜色和当前界面颜色相近
        document.body.style.background = '#f57759';
        // 获取滚动中奖数据
        _this.getLoopList();
        if (GameMain.TOKEN) {
            GameMain.getUserChance('read'); // 取得用户今天的游戏次数
            // 今日是否分享状态
            new Http({ url: API.SHARE_STATE }, function (data) { GameStart.isShared = !!data; });
        }
        // 清空我的奖品数据列表数据源
        _this.my_award_list.dataSource = [];
        return _this;
    }
    // 绑定按钮事件  （我的奖品、规则按钮、召唤小伙伴、开始按钮）
    GameStart.prototype.bindEvent = function () {
        var _this = this;
        // 绑定显示规则事件
        this.btn_rule.on(Laya.Event.MOUSE_DOWN, this, this.setRuleState(true, this.rule));
        // 绑定隐藏规则事件
        this.btn_rule_close.on(Laya.Event.MOUSE_DOWN, this, this.setRuleState(false, this.rule));
        this.setDefaultProp(this.rule);
        // 绑定显示我奖励事件
        this.btn_my_award.on(Laya.Event.MOUSE_DOWN, null, function (a) {
            _this.setRuleState(true, _this.my_award)();
            if (GameMain.TOKEN)
                _this.getMyAwardList(); // 请求我的奖品列表
        });
        // 绑定隐藏我奖励事件
        this.btn_close_award.on(Laya.Event.MOUSE_DOWN, this, this.setRuleState(false, this.my_award));
        this.setDefaultProp(this.my_award);
        // 点击开始
        this.btn_bigin.on(Laya.Event.MOUSE_DOWN, this, this.beginHandle);
        // 召唤小伙伴参与
        this.shareTo.on(Laya.Event.CLICK, null, function (a) { GameView.showHtmlTip('share-model'); });
    };
    // 滚动中奖数据
    GameStart.prototype.getLoopList = function () {
        var _this = this;
        new Http({
            url: API.LOOP_AWRAD_LIST,
        }, function (data) {
            data = data.splice(0, 5);
            data.forEach(function (a) {
                a.member_mobile = a.member_mobile.substr(0, 3) + '****' + a.member_mobile.substr(7);
                for (var k in a.win_info) {
                    a.win_name = k;
                }
            });
            _this.LOOP_TEXT_DATA = data;
            _this.setLoopList();
        });
    };
    // 获取抽奖配置 (概率、奖品)
    GameStart.getGameParams = function () {
        new Http({ url: API.PARAMS }, function (data) {
            var prize_rate = data.prize_rate, prize_options = data.prize_options;
            for (var k in prize_rate) {
                prize_rate[k].name = k;
                GameStart.PRIZE_RATE.push(prize_rate[k]);
            }
            // 设置概率 并从小到大排序
            GameStart.PRIZE_RATE.sort(function (a, b) { return (a.times > b.times || -1); });
            var _loop_1 = function (k) {
                prize_options[k].coupon.forEach(function (el, i) {
                    el.name = k + "-coupon-" + i;
                    GameStart.ALL_PRIZE.push(el);
                });
                prize_options[k].integral.forEach(function (el, i) {
                    el.name = k + "-integral-" + i;
                    GameStart.ALL_PRIZE.push(el);
                });
            };
            // 设置所有奖品列表 加入name字段作为计算标志
            for (var k in prize_options) {
                _loop_1(k);
            }
            console.log(GameStart.PRIZE_RATE, GameStart.ALL_PRIZE);
        });
    };
    // 获取我的奖励列表
    GameStart.prototype.getMyAwardList = function () {
        var _this = this;
        new Http({
            url: API.AWRAD_LIST,
        }, function (data) {
            data.forEach(function (a) {
                a.time = a.win_date;
                a.num = 1;
                for (var k in JSON.parse(a.win_info)) {
                    a.name = k;
                }
            });
            _this.my_award_list.dataSource = data;
        });
    };
    // 设置规则默认属性
    GameStart.prototype.setDefaultProp = function (target) {
        target.scaleX = .7;
        target.scaleY = .7;
        target.alpha = 0;
        target.anchorX = .5;
        target.anchorY = .5;
        target.y = 1000 + (target.height / 2);
        target.pos(Laya.stage.width / 2, Laya.stage.height / 2);
    };
    // 显示隐藏 规则
    GameStart.prototype.setRuleState = function (state, target) {
        var _this = this;
        return function () {
            _this.rule.visible = false;
            _this.my_award.visible = false;
            if (state) {
                var prop = {
                    scaleX: 1,
                    scaleY: 1,
                    alpha: 1,
                    y: 115 + (target.height / 2),
                };
                target.visible = state;
                Laya.Tween.to(target, prop, 200, Laya.Ease.backOut);
                return;
            }
            _this.setDefaultProp(target);
        };
    };
    // 开始游戏
    GameStart.prototype.beginHandle = function () {
        if (GameStart.PRIZE_RATE.length < 1) {
            return alert('游戏参数获取中...请稍等');
        }
        if (GameMain.TOKEN) {
            this.removeSelf();
            if (!GameMain.GameView) {
                GameMain.GameView = new GameView();
            }
            GameMain.GameView.reset();
            Laya.stage.addChild(GameMain.GameView);
        }
        else {
            alert('url有误');
        }
    };
    // 设置滚动中奖信息
    GameStart.prototype.setLoopList = function () {
        var _this = this;
        var sp = new Laya.Sprite();
        sp.graphics.drawRect(50, 0, 523, 37, '#ffffff');
        this.loop_label.mask = sp;
        this.LOOP_TEXT_DATA.forEach(function (e, i) {
            var txt = new Laya.Text();
            txt.text = "\u606D\u559C\u7528\u6237 " + e.member_mobile + " \u83B7\u5F97" + e.win_name + "~";
            txt.y = 12;
            txt.x = 60 + (_this.LOOP_TEXT_UNIT_WIDTH * i);
            _this.loop_label.addChild(txt);
        });
        if (this.LOOP_TEXT_DATA.length > 1) {
            Laya.timer.frameLoop(1, this, this.loopText);
        }
    };
    // 滚动文字
    GameStart.prototype.loopText = function () {
        for (var i = 1, l = this.loop_label.numChildren; i < l; i++) {
            var txt = this.loop_label.getChildAt(i);
            txt.x -= 1;
            if (txt.x <= -this.LOOP_TEXT_UNIT_WIDTH) {
                txt.x = (l - 2) * 300;
            }
        }
    };
    // 分享回调
    GameStart.prototype.shareCallback = function () {
        new Http({
            url: API.SHARE_CREATE,
        }, function (data) {
            if (!data.data)
                return;
            GameStart.chanceNum = data.data;
        });
    };
    // 是否分享过
    GameStart.isShared = false;
    // 中奖率
    GameStart.PRIZE_RATE = [];
    // 所有奖品列表
    GameStart.ALL_PRIZE = [];
    return GameStart;
}(ui.IndexUI));
//# sourceMappingURL=GameStart.js.map