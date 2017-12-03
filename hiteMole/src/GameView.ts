
import Browser = Laya.Browser;

class GameView extends ui.GameUI {
    private moles:Array<Mole>;   // 地鼠数据源
    private moleNumber:number = 9;  // 地鼠个数

    private score: number;    // 游戏分数

    private hammer: Hammer; // 锤子
    constructor() {
        super();
        this.moles = new Array<Mole>();
        var hitCallbancHd:Laya.Handler = Laya.Handler.create(this, this.setScore, null, false);

        for (var i:number = 0; i < this.moleNumber; i++) {
            var box:Laya.Box = this.getChildByName(`item${i}`) as Laya.Box;

            // as TYPE  === <type>   指定类型
            var mole:Mole = new Mole(
                <Laya.Image>box.getChildByName('normal'), 
                box.getChildByName('hit') as Laya.Image,
                <Laya.Image>box.getChildByName('scoreImg'),
                20, hitCallbancHd);

            this.moles.push(mole);
        }

        // 加载锤子
        this.hammer = new Hammer();
        this.hammer.zOrder = 2;    
        this.hammer.visible = false;        
    }
    // 随机显示地鼠
    onLoop():void {
        this.timeBar.value -= (1 / 10);
        if (this.timeBar.value <= 0) {
            this.gameOver();
            return;
        }
        var index:number = Math.floor(Math.random() * this.moleNumber);
        this.moles[index].show();
    }
    // 开始游戏
    gameStart():void {
        this.timeBar.value = 1;
        this.score = 0;
        GameMain.gameView.updateScoreUI();
        Laya.stage.addChild(this.hammer);
        Laya.timer.loop(1000, this, this.onLoop);
        this.hammer.star();
    }
    // 游戏结束
    gameOver():void {
        Laya.timer.clear(this, this.onLoop);
        this.hammer.end();
        
        if (!GameMain.gameOver) {
            GameMain.gameOver = new GameOver();
        }
        GameMain.gameOver.centerX = 0;
        GameMain.gameOver.centerY = 50;
        Laya.stage.addChild(GameMain.gameOver);
        GameMain.gameOver.showScore(this.score);
    }

    // 设置分数
    setScore(type:number):void {
        this.score += (type === 1 ? -100 : 100);
        if (this.score <= 0) this.score = 0;
        this.updateScoreUI();
    }

    // 更新分数显示
    updateScoreUI():void {
        var data:any = {};
        var temp:number = this.score;
        for (var i:number = 9; i >=0; i--) {
            data[`item${i}`] = {index: Math.floor(temp % 10)};
            temp /= 10;
        }
        this.scoreNums.dataSource = data;
    }
}