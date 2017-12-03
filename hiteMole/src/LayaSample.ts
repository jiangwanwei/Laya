// 程序入口
class GameMain{
    public static gameView:GameView;
    public static gameStart: GameStart;
    public static gameOver: GameOver;

    constructor() {
        Laya.init(800, 600, Laya.WebGL);
        Laya.stage.bgColor = '#ffcccc';
        Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_HEIGHT;

        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;

        Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;

        Laya.Stat.show(0, 0);

        var resArray:Array<any> = [
            {url: 'res/atlas/ui.atlas', type: Laya.Loader.ATLAS},
            {url: 'ui/back.png', type: Laya.Loader.IMAGE},
            {url: 'ui/help.png', type: Laya.Loader.IMAGE},
        ];
        Laya.loader.load(resArray, Laya.Handler.create(this, this.onLoaded));
    }

    onLoaded():void {
        GameMain.gameStart = new GameStart();
        GameMain.gameStart.centerX = 0;
        Laya.stage.addChild(GameMain.gameStart);
    }
}
new GameMain();