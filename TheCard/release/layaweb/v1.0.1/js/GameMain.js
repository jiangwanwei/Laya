// 程序入口
var LayaStage = Laya.Stage;
var Loader = Laya.Loader;
var Hander = Laya.Handler;
var GameMain = /** @class */ (function () {
    function GameMain() {
        // 优先使用webgl渲染，不支持会自动使用canvas
        Laya.init(640, 1009, Laya.WebGL);
        // 设置背景颜色  用于显示 loading...
        Laya.stage.bgColor = '#000000';
        // 性能监控
        // Laya.Stat.show();
        // 设置适配
        Laya.stage.scaleMode = LayaStage.SCALE_SHOWALL;
        Laya.stage.alignH = LayaStage.ALIGN_CENTER;
        Laya.stage.screenMode = LayaStage.SCREEN_VERTICAL;
        // 进入游戏显示加载进度
        this.initLoading();
    }
    // 加载进入页面loading文字
    GameMain.prototype.initLoading = function () {
        var _this = this;
        var resArray = [
            { url: 'res/atlas/loading.atlas', type: Loader.ATLAS }
        ];
        Laya.loader.load(resArray, Hander.create(null, function (a) {
            _this.loading = new Loading();
            Laya.stage.addChild(_this.loading);
            _this.init();
        }));
    };
    // 初始化游戏 (加载游戏资源)
    GameMain.prototype.init = function () {
        var resArray = [
            { url: 'ui/card_init.jpg', type: Loader.IMAGE },
            { url: 'ui/clip_num.png', type: Loader.IMAGE },
            { url: 'ui/game-view-bg.jpg', type: Loader.IMAGE },
            { url: 'ui/grid-bg.jpg', type: Loader.IMAGE },
            { url: 'ui/gril.png', type: Loader.IMAGE },
            { url: 'ui/tip-bg.jpg', type: Loader.IMAGE },
            { url: 'ui/rule-txt.png', type: Loader.IMAGE },
            { url: 'ui/title.png', type: Loader.IMAGE },
            { url: 'res/atlas/ui.atlas', type: Loader.ATLAS }
        ];
        Laya.loader.load(resArray, Hander.create(this, this.onLoadComplete), Hander.create(this, this.onLoadProgress));
    };
    // 加载游戏资源进度
    GameMain.prototype.onLoadProgress = function (num) {
        this.loading.progress.text = (num * 100).toFixed(0) + "%";
    };
    // 加载游戏资源完成
    GameMain.prototype.onLoadComplete = function () {
        var _this = this;
        this.loading.progress.text = "100%";
        Laya.Tween.to(this.loading, { alpha: 0 }, 200, Laya.Ease.bounceInOut, Hander.create(null, function () {
            Laya.stage.bgColor = '#ff5529';
            _this.loading.visible = false;
            _this.loading.removeSelf();
            _this.loading.destroy();
            _this.technicalSupport();
            _this.loadGameStart();
        }));
    };
    // 加载游戏开始界面
    GameMain.prototype.loadGameStart = function () {
        // 添加开始界面
        GameMain.GameStart = new GameStart();
        Laya.stage.addChild(GameMain.GameStart);
    };
    // 技术支持
    GameMain.prototype.technicalSupport = function () {
        var txt = new Laya.Text();
        txt.text = '技术支持：迈小步科技';
        txt.color = '#fff';
        txt.fontSize = 16;
        txt.x = (Laya.stage.width - txt.width) / 2;
        txt.y = Laya.stage.height - 18;
        txt.zOrder = 100;
        Laya.stage.addChild(txt);
    };
    // 显示首页
    GameMain.returnHome = function () {
        GameMain.GameView.noCloseDialog.close();
        GameMain.GameView.removeSelf();
        Laya.stage.addChild(GameMain.GameStart);
    };
    // 创建一个遮罩层
    GameMain.createLockLayer = function () {
        var sp = new Laya.Sprite();
        sp.graphics.drawRect(0, 0, Laya.stage.width, Laya.stage.height, '#000000');
        sp.graphics.setAlpha(.7);
        sp.graphics.save();
        return sp;
    };
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=GameMain.js.map