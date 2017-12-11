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
    private curAwardName: string;
    // 提示框
    noCloseDialog: noCloseDialog;
    constructor() {
        super();
        // 卡牌绑定点击事件
        this.cardList.mouseHandler = Laya.Handler.create(this, this.cardSelect, null, false);
        this.btn_home.on(Laya.Event.CLICK, this, GameMain.returnHome);
        this.updateChanceNum();
    }
    // 重置界面
    reset():void {
        // 设置舞台背景颜色
        Laya.stage.bgColor = '#ff5529';
        document.body.style.background = '#ff5529';
        GameView.isAllow = false;
        this.curAwardName = '';
        this.initCardListAnimate();
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
        Laya.timer.once(this.cardNum * 100, null, () => { GameView.isAllow = true });
        // 设置List数据源
        this.cardList.dataSource = dataSource;
    }
    // 更新次数
    public updateChanceNum():void {
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
            
            var isAward:boolean = (Math.ceil(Math.random() * 100) < 10), // 10%概率
                type:string,
                _data:any = {};
            if (isAward) {  // 中奖
                // 计算历史次数能中几等奖
                GameStart.PRIZE_RATE.forEach(a => {
                    if (GameStart.historyChanceNum >= a.times) {
                        type = a.name;
                    }
                })
                // 从能中奖项中抽取一个 {"一等奖":{"coupon":[{"type":3,"id":3}]}}  或者  {"一等奖":{"integral":[{"value":1000}]}}
                if (type) {
                    var _tmplist:Array<any> = GameStart.ALL_PRIZE.filter(a => a.name.search(type) === 0);
                    _tmplist.sort((a, b) => (Math.random() - 0.5 || -1));
                    
                    type = _tmplist[0].name;
                    var [name, flag] = type.split('-');
                    _data[name] = {
                        [flag]: [_tmplist[0]]
                    };
                }
            }
            // 次数-1
            GameStart.chanceNum -= 1;
            GameStart.historyChanceNum += 1;
            this.updateChanceNum();  
            GameMain.getAndSetUserChance('', JSON.stringify(_data));   // 发送中奖数据 请求次数-1
            this.curAwardName = type;
        }
    }
    // 设置选中翻盘结果
    private setCurCardResult():void {
        var _res = { card: {skin: this.curAwardName ? `ui/${this.curAwardName}.jpg` : `ui/no_award.png`} };
        this.cardList.setItem(this.curIndex, _res);      
        Laya.timer.once(300, this, this.setOtherCardResult);
    }
    // 设置其他牌结果
    private setOtherCardResult():void {
        var dataSource:Array<any> = [];
          // 获取所有一等奖 随机抽取一张 插入其他牌显示
        var one_award:Array<any> = GameStart.ALL_PRIZE.filter(a => a.name.search('一等奖') === 0);
        one_award.sort(a => Math.random() - 0.5 || -1);
        // 打乱所有奖项
        var all_prize:Array<any> = JSON.parse(JSON.stringify(GameStart.ALL_PRIZE));
        all_prize.sort(a => Math.random() - 0.5 || -1);
        while (all_prize.length < 9) all_prize = all_prize.concat(all_prize);
        if (one_award.length > 0) {
            var random_idx:number = Math.floor(Math.random() * 9);
            while (random_idx === this.curIndex) {
                random_idx = Math.floor(Math.random() * 9);
            }
            all_prize[random_idx] = one_award[0];
        }
        for (var i:number = 0; i < this.cardNum; i++) {      
            if (i === this.curIndex) {
                var _data:any = {card: {skin: this.curAwardName ? `ui/${this.curAwardName}.jpg` : `ui/no_award.png`}};
            } else {
                var r:number = Math.floor(Math.random() * 100),
                    type:number = r < 15 ? 0 : 1;  // 百分之15出现 运气不佳
                var _data:any = {card: {skin: type ? `ui/${all_prize[i].name}.jpg` : `ui/no_award.png`}};
            }
            _data.card.skewY = 0;
            dataSource.push(_data);
        }
        this.cardList.dataSource = dataSource;
        Laya.timer.once(1500, this, this.showResult);
    }
    // 翻牌结果提示弹窗
    private showResult():void {
        var _restxt:string = '恭 喜 您 获 得';  // award_1_coupon_1
        if (!this.curAwardName)  _restxt = '\n 运气不佳，差一点点~ \n \n 再接再厉！';
        this.noCloseDialog = new noCloseDialog(_restxt, 'ui/btn_continue.png', () => {
            this.noCloseDialog.close();
            if (this.GameStateCheck()) this.reset();
        });
        if (!this.curAwardName) {
            this.noCloseDialog.awardImg.removeSelf();
            this.noCloseDialog.confim.y = 260;
        } else {
            this.noCloseDialog.awardImg.skin = `ui/${this.curAwardName}.jpg`;
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
        var _restxt = '\n 今天的机会已经用完啦，\n\n 明天再来吧~';
        this.noCloseDialog = new noCloseDialog(_restxt, 'ui/btn_bye.png', a => {
            this.noCloseDialog.close();
        });
        this.noCloseDialog.popup(true);
        this.noCloseDialog.confim.y = 260;
        Laya.stage.addChild(this.noCloseDialog);
    }
    // 显示html 提示层   （提示分享 share-model 、 提示关注 follow-model）
    public static showHtmlTip(_id: string):void {
        document.getElementById(_id).style.display = 'block';
    }
}