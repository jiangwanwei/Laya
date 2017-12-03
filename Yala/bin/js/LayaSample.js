// 程序入口
var GameMain = /** @class */ (function () {
    function GameMain() {
        Laya.init(600, 400);
        Laya.stage.scaleMode = Laya.Stage.SCALE_NOSCALE;
        Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        var resArray = [
            { url: 'res/atlas/ui.atlas', type: Laya.Loader.ATLAS }
        ];
        Laya.loader.load(resArray, Laya.Handler.create(this, this.OnLoaded));
    }
    GameMain.prototype.OnLoaded = function () {
        Laya.stage.addChild(new LoginView());
    };
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=LayaSample.js.map