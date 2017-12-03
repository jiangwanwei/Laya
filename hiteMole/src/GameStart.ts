class GameStart extends ui.GameStartUI {
    constructor() {
        super();
        this.startBtn.on(Laya.Event.CLICK, this, this.start);
    }

    // 开始游戏
    start() {
        if (!GameMain.gameView) {
            GameMain.gameView = new GameView();
        }
        this.removeSelf();
        GameMain.gameView.centerX = 0;
        Laya.stage.addChild(GameMain.gameView);
        GameMain.gameView.gameStart();
    }
}