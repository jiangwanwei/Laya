class GameOver extends ui.GameOverUI {
    constructor() {
        super();
        this.restartBtn.on(Laya.Event.CLICK, this, this.restartGame)
    }
    // 重新开始
    restartGame():void {
        this.removeSelf();
        GameMain.gameView.removeSelf();
        Laya.stage.addChild(GameMain.gameStart);
    }
    // 显示分数
    showScore(score:number):void {
        var data:any = {};
        var temp:number = score;
        for (var i:number = 9; i >= 0; i--) {
            data[`item${i}`] = {index: Math.floor(temp % 10)}
            temp /= 10;
        }
        this.scoreNums.dataSource = data;
    }
}