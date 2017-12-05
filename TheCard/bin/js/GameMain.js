// 程序入口
var LayaStage = Laya.Stage;
var Loader = Laya.Loader;
var Hander = Laya.Handler;
var GameMain = /** @class */ (function () {
    function GameMain() {
        // 优先使用webgl渲染，不支持会自动使用canvas
        Laya.init(640, 1009, Laya.WebGL);
        // 设置背景颜色  用于显示 loading...
        Laya.stage.bgColor = '#ff5529';
        // 性能监控
        // Laya.Stat.show();
        // 底部要加   技术支持： 迈小步科技
        // 设置适配
        Laya.stage.scaleMode = LayaStage.SCALE_SHOWALL;
        Laya.stage.alignH = LayaStage.ALIGN_CENTER;
        Laya.stage.screenMode = LayaStage.SCREEN_VERTICAL;
        // 进入游戏显示加载进度
        this.initLoading();
        this.init();
    }
    // 加载进入页面loading文字
    GameMain.prototype.initLoading = function () {
        this.loadingTxt = new Laya.Text();
        this.loadingTxt.text = 'loading(0%)...';
        this.loadingTxt.color = '#ffffff';
        this.loadingTxt.width = Laya.stage.width;
        this.loadingTxt.height = Laya.stage.height;
        this.loadingTxt.align = LayaStage.ALIGN_CENTER;
        this.loadingTxt.fontSize = 27;
        this.loadingTxt.valign = LayaStage.ALIGN_MIDDLE;
        this.loadingTxt.italic = true;
        Laya.stage.addChild(this.loadingTxt);
    };
    // 初始化游戏 (加载游戏资源)
    GameMain.prototype.init = function () {
        var resArray = [
            { url: 'ui/grid-bg.jpg', type: Loader.IMAGE },
            { url: 'ui/gril.png', type: Loader.IMAGE },
            { url: 'ui/tip-bg.jpg', type: Loader.IMAGE },
            { url: 'ui/title.png', type: Loader.IMAGE },
            { url: 'res/atlas/ui.atlas', type: Loader.ATLAS }
        ];
        Laya.loader.load(resArray, Hander.create(this, this.onLoadComplete), Hander.create(this, this.onLoadProgress));
    };
    // 加载游戏资源进度
    GameMain.prototype.onLoadProgress = function (num) {
        // TODO.
        this.loadingTxt.text = "loading(" + num * 100 + "%)...";
    };
    // 加载游戏资源完成
    GameMain.prototype.onLoadComplete = function () {
        var _this = this;
        this.loadingTxt.text = "loading(100%)...";
        Laya.Tween.to(this.loadingTxt, { alpha: 0 }, 300, Laya.Ease.bounceInOut, Hander.create(null, function () {
            _this.loadingTxt.visible = false;
            _this.loadingTxt.removeSelf();
            _this.loadingTxt.destroy();
            _this.loadGameStart();
        }));
    };
    // 加载游戏开始界面
    GameMain.prototype.loadGameStart = function () {
        // 添加开始界面
        GameMain.GameStart = new GameStart();
        Laya.stage.addChild(GameMain.GameStart);
    };
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=GameMain.js.map