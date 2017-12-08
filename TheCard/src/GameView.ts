/**
 * 游戏主界面
 */
class GameView extends ui.GameViewUI {    
    // 是否关注
    public static isFollow: boolean = false;
    // 是否允许翻牌
    public static isAllow: boolean = false;
    // 当前选中牌的index
    private curIndex: number;
    // 卡牌数量
    private cardNum: number = 9;
    // 当前获得奖励类型
    private curAwardType: number;
    // 奖励列表
    private awardData: Object = {2: '积分 x 1', 3: '积分 x 3', 4: '积分 x 5', 5: '百瑞蛋糕1榜', 6: '娜可露露蛋糕1榜', 7: '越慢玫瑰蛋糕1榜'};
    // 提示框
    noCloseDialog: noCloseDialog;
    constructor() {
        super();
        // 卡牌绑定点击事件
        this.cardList.mouseHandler = Laya.Handler.create(this, this.cardSelect, null, false);
        this.btn_home.on(Laya.Event.CLICK, this, GameMain.returnHome);
    }
    // 重置界面
    reset():void {
        // 设置舞台背景颜色
        Laya.stage.bgColor = '#ff5529';
        document.body.style.background = '#ff5529';
        GameView.isAllow = false;
        this.initCardListAnimate();
        this.updateChanceNum();
    }
    // 初始化卡牌 (发牌动画)
    private initCardListAnimate():void {
        var dataSource:Array<any> = [];
        for (var i:number = 0; i < this.cardNum; i++) {
            // 添加List数据源
            dataSource.push({card: { skin: 'ui/card_init.jpg'}});

            // 初始化card属性
            this.cardList.getCell(i).x = 0;
            this.cardList.getCell(i).y = 0;
            var _props:any = {};

            if ([0, 3, 6].indexOf(i) !== -1) { _props.x = 0; } 
            else if ([1, 4, 7].indexOf(i) !== -1) { _props.x = 211;}
            else { _props.x = 422; }

            if ([0, 1, 2].indexOf(i) !== -1) { _props.y = 0; } 
            else if ([3, 4, 5].indexOf(i) !== -1) { _props.y = 252;} 
            else { _props.y = 504; }

            Laya.Tween.to(this.cardList.getCell(i), _props, 200, Laya.Ease.bounceInOut, null, i * 100);
        }
        // 所有动画执行完毕开启点击事件
        Laya.timer.once(this.cardNum * 100, null, () => {
            GameView.isAllow = true;
        });
        // 设置List数据源
        this.cardList.dataSource = dataSource;
    }
    // 更新次数
    private updateChanceNum():void {
        this.chanceNumClip.index = GameStart.chanceNum;
    }
    // 开始翻盘
    private cardSelect(e:Laya.Event, index: number):void {        
        e.stopPropagation();
        if (e.type === 'mousedown') {
            if (!GameView.isAllow || !this.GameStateCheck()) return;
            GameView.isAllow = false;
            this.curIndex = index;
            Laya.Tween.to(this.cardList.getCell(index).getChildByName('card'), {skewY: 360}, 300, Laya.Ease.bounceIn, Laya.Handler.create(this, this.setCurCardResult))
        }
    }
    // 设置选中翻盘结果
    private setCurCardResult():void {
        var r:number = Math.ceil(Math.random() * 100),
            type: number = r < 50 ? 1 : r < 35 ? 2 : r < 25 ? 3 : r < 20 ? 4 : 5;
        if (type === 5) {
            type = [5, 6, 7][Math.floor(Math.random()* 3)];
        }
        this.curAwardType = type;
        var _res = { card: {skin: `ui/award_${type}.png`} };
        this.cardList.setItem(this.curIndex, _res);
        // 次数-1
        GameStart.chanceNum -= 1;
        GameMain.getUserChance();
        this.updateChanceNum();
        Laya.timer.once(1000, this, this.setOtherCardResult);

    }
    // 设置其他牌结果
    private setOtherCardResult():void {
        var dataSource:Array<any> = [];
        for (var i:number = 0; i < this.cardNum; i++) {      
            if (i === this.curIndex) {
                var _data = {card: {skin: `ui/award_${this.curAwardType}.png`, skewY: 0}};
            } else {
                var r:number = Math.ceil(Math.random() * 100),
                type: number = r < 50 ? 4 : r < 25 ? 5 : r < 15 ? 3 : r < 10 ? 2 : 1;
                if (type === 5) {
                    type = [5, 6, 7][Math.floor(Math.random()* 3)];
                }
                var _data = {card: {skin: `ui/award_${Math.ceil(Math.random() * 7)}.png`, skewY: 0}};
            }
            dataSource.push(_data);
        }
        this.cardList.dataSource = dataSource;
        Laya.timer.once(300, this, this.showResult);
    }
    // 翻牌结果显示
    private showResult():void {
        var _restxt:string = '恭 喜 您 获 得';
        if (this.curAwardType === 1)  _restxt = '\n 运气不佳，差一点点~ \n \n 再接再厉！';
        this.noCloseDialog = new noCloseDialog(_restxt, 'ui/btn_continue.png', () => {
            this.noCloseDialog.close();
            if (this.GameStateCheck()) this.reset();
        });
        if (this.curAwardType === 1) {
            this.noCloseDialog.awardImg.removeSelf();
            this.noCloseDialog.confim.y = 260;
        } else {
            this.noCloseDialog.awardImg.skin = `ui/award_${this.curAwardType}.png`;
        }        
        this.noCloseDialog.popup(true);
        Laya.stage.addChild(this.noCloseDialog);
    }
    // 检查当前用户游戏状态（是否有机会、是否关注、是否分享）
    GameStateCheck():any {
        // if (GameStart.chanceNum === 2 && !GameView.isFollow) {
        //     this.haveToFollow();
        //     return false;
        // } else 
        if (GameStart.chanceNum <= 0 && !GameStart.isShared) {
            this.haveToShareDialog();
            return false
        } else if (GameStart.chanceNum <= 0) {
            this.todayNoChance();
            return false
        }
        return true;       
    }
    // 次数用完提示分享弹窗
    private haveToShareDialog():void {
        this.noCloseDialog = new noCloseDialog('', 'ui/btn_share.png', () => {
            // 显示分享提示层
            this.noCloseDialog.close();
            GameView.showHtmlTip('share-model');
        });
        this.noCloseDialog.txtImg.skin = 'ui/nochance_txt.png';
        this.noCloseDialog.popup(true);
        Laya.stage.addChild(this.noCloseDialog);
    }
    // 提示关注弹窗
    private haveToFollow():void {
        var _restxt = '\n 点击关注公众号 "迈小步科技"\n \n 可提高概率哦~';
        this.noCloseDialog = new noCloseDialog(_restxt, 'ui/btn_follow.png', () => {
            this.noCloseDialog.close();
            GameView.showHtmlTip('follow-model');
        });
        this.noCloseDialog.confim.y = 260;
        this.noCloseDialog.popup(true);
        Laya.stage.addChild(this.noCloseDialog);
    }
    // 今天没有翻盘机会了
    private todayNoChance():void {
        var _restxt = '今天的机会已经用完啦，\n\n 明天再来吧~';
        this.noCloseDialog = new noCloseDialog(_restxt, 'ui/btn_bye.png', this.noCloseDialog.close);
        this.noCloseDialog.popup(true);
        Laya.stage.addChild(this.noCloseDialog);
    }
    // 显示html 提示层   （提示分享 share-model 、 提示关注 follow-model）
    public static showHtmlTip(_id: string):void {
        document.getElementById(_id).style.display = 'block';
    }
    // 随机数
    private getRandom():any {
        return Math.ceil(Math.random() * 9);
    }
}