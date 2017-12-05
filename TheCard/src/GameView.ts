/**
 * 游戏主界面
 */
class GameView extends ui.GameViewUI {
    // 游戏次数
    public static chanceNum: number = 5;
    // 是否允许翻盘
    public static isAllow: boolean = false;
    // 当前选中牌的index
    private curIndex: number;
    // 卡牌数量
    private cardNum: number = 9;
    // 当前获得奖励类型
    private curAwardType: number;

    constructor() {
        super();
        this.updateChanceNum();
        this.reset();

        // 卡牌绑定点击事件
        this.cardList.mouseHandler = Laya.Handler.create(this, this.cardSelect, null, false);
    }
    // 重置界面
    reset():void {
        // 设置舞台背景颜色
        Laya.stage.bgColor = '#ff5529';
        GameView.isAllow = true;
        this.initCardListAnimate();
    }
    // 初始化卡牌 (发牌动画)
    initCardListAnimate():void {
        var dataSource:Array<any> = [];
        for (var i:number = 0; i < this.cardNum; i++) {
            // 添加List数据源
            dataSource.push({card: { skin: 'ui/card_init.jpg'}});

            // 初始化card属性
            this.cardList.getCell(i).x = 0;
            this.cardList.getCell(i).y = 0;
            this.cardList.getCell(i).skewY = 0;
            var _props:any = {};

            if ([0, 3, 6].indexOf(i) !== -1) { _props.x = 0; } 
            else if ([1, 4, 7].indexOf(i) !== -1) { _props.x = 211;}
            else { _props.x = 422; }

            if ([0, 1, 2].indexOf(i) !== -1) { _props.y = 0; } 
            else if ([3, 4, 5].indexOf(i) !== -1) { _props.y = 252;} 
            else { _props.y = 504; }

            Laya.Tween.to(this.cardList.getCell(i), _props, 200, Laya.Ease.bounceInOut, null, i * 100);
        }
        // 动画执行完毕开启点击
        Laya.timer.once(this.cardNum * 100, null, () => GameView.isAllow = true);
        // 设置List数据源
        this.cardList.dataSource = dataSource;
    }
    // 更新次数
    private updateChanceNum():void {
        this.chanceNum.index = GameView.chanceNum;
    }
    // 开始翻盘
    private cardSelect(e:Laya.Event, index: number):void {
        if (!GameView.isAllow) return;
        if (GameView.chanceNum <= 0) {
            // 显示机会用完
            return;
        }
        e.stopPropagation();
        if (e.type === 'mousedown') {
            GameView.isAllow = false;
            this.curIndex = index;
            Laya.Tween.to(this.cardList.getCell(index).getChildByName('card'), {skewY: 360}, 300, Laya.Ease.bounceIn, Laya.Handler.create(this, this.setCurCardResult))
        }
    }
    // 设置选中翻盘结果
    setCurCardResult():void {
        var r:number = Math.ceil(Math.random() * 100),
            type: number = r < 50 ? 1 : r < 35 ? 2 : r < 25 ? 3 : r < 20 ? 4 : 5;
        if (type === 5) {
            type = [5, 6, 7][Math.floor(Math.random()* 3)];
        }
        this.curAwardType = type;
        var _res = { card: {skin: `ui/award_${type}.png`} };
        this.cardList.setItem(this.curIndex, _res);
        // 次数-1
        GameView.chanceNum -= 1;
        this.updateChanceNum();
        Laya.timer.once(1000, this, this.setOtherCardResult);

    }
    // 设置其他牌结果
    setOtherCardResult():void {
        var dataSource:Array<any> = [];
        for (var i:number = 0; i < this.cardNum; i++) {      
            if (i === this.curIndex) {
                var _data = {card: {skin: `ui/award_${this.curAwardType}.png`}};
            } else {
                var r:number = Math.ceil(Math.random() * 100),
                type: number = r < 50 ? 4 : r < 35 ? 5 : r < 25 ? 3 : r < 20 ? 2 : 1;
                if (type === 5) {
                    type = [5, 6, 7][Math.floor(Math.random()* 3)];
                }
                var _data = {card: {skin: `ui/award_${Math.ceil(Math.random() * 7)}.png`}};
            }
            dataSource.push(_data);
        }
        this.cardList.dataSource = dataSource;
        // Laya.timer.once(300, this, this.showResult);
    }
    // 显示结果弹窗
    showResult():void {

        var dlg:MyDialog = new MyDialog('恭喜你获得', () => {
            console.log('...')
        });
        dlg.popup(true);
        this.addChild(dlg);
    }
}