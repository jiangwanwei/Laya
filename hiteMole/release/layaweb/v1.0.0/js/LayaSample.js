// 程序入口
var GameMain = /** @class */ (function () {
    function GameMain() {
        Laya.init(800, 600, Laya.WebGL);
        Laya.stage.bgColor = '#ffcccc';
        Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_HEIGHT;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
        var resArray = [
            { url: 'res/atlas/ui.atlas', type: Laya.Loader.ATLAS },
            { url: 'ui/back.png', type: Laya.Loader.IMAGE },
            { url: 'ui/help.png', type: Laya.Loader.IMAGE },
        ];
        Laya.loader.load(resArray, Laya.Handler.create(this, this.onLoaded));
    }
    GameMain.prototype.onLoaded = function () {
        GameMain.gameStart = new GameStart();
        GameMain.gameStart.centerX = 0;
        Laya.stage.addChild(GameMain.gameStart);
    };
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=LayaSample.js.map