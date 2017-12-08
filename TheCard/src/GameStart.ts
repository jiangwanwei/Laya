/**
 * 游戏开始界面
 */
class GameStart extends ui.IndexUI {
    // 单个滚动信息的宽度
    private LOOP_TEXT_UNIT_WIDTH:number = 300;
    // 滚动中奖列表数据源
    private LOOP_TEXT_DATA:Array<any>;
    // 今日游戏次数
    public static chanceNum: number;
    // 总游戏次数
    public static historyChanceNum: number;
    // 是否分享过
    public static isShared: boolean = false;

    constructor() {
        super();       
        
        // 绑定显示规则事件
        this.btn_rule.on(Laya.Event.MOUSE_DOWN, this, this.setRuleState(true, this.rule));
        // 绑定隐藏规则事件
        this.btn_rule_close.on(Laya.Event.MOUSE_DOWN, this, this.setRuleState(false, this.rule));
        this.setDefaultProp(this.rule);

        // 绑定显示我奖励事件
        this.btn_my_award.on(Laya.Event.MOUSE_DOWN, null, a => {
            this.setRuleState(true, this.my_award)();
            if (GameMain.TOKEN) {
                this.getMyAwardList();
            }
        });
        // 绑定隐藏我奖励事件
        this.btn_close_award.on(Laya.Event.MOUSE_DOWN, this, this.setRuleState(false, this.my_award));
        this.setDefaultProp(this.my_award); 
        
        // 点击开始
        this.btn_bigin.on(Laya.Event.MOUSE_DOWN, this, this.beginHandle);
        document.body.style.background = '#f57747';

        // 召唤小伙伴参与
        this.shareTo.on(Laya.Event.CLICK, null, a => {
            GameView.showHtmlTip('share-model');
        })

        // 获取滚动中奖数据
        this.getLoopList();        
        if (GameMain.TOKEN) {
            this.getMyAwardList();
            GameMain.getUserChance('read');
            // 是否分享
            new Http({ url: API.SHARE_STATE }, data => {
                GameStart.isShared = !!data;
            })
        }
    }
    // 滚动中奖数据
    getLoopList():void {
        new Http({
            url: API.LOOP_AWRAD_LIST,
        }, data => {
            data = data.splice(0, 5);
            data.forEach(a => {
                a.member_mobile = a.member_mobile.substr(0, 3) + '****' + a.member_mobile.substr(7);
                for (var k in a.win_info) {
                    a.win_name = k
                } 
            })
            this.LOOP_TEXT_DATA = data;
            this.setLoopList();
        })
    }
    // 获取抽奖配置
    static getGameParams():void {
        new Http({ url: API.PARAMS }, data => {
            console.log(data);
        })
        new Http({
            url: API.SHARE_CREATE,
        }, data => {
            if (!data.data) return;
            GameStart.chanceNum = data.data;
        })
    }
    // 获取我的奖励列表
    getMyAwardList():void {
        new Http({
            url: API.AWRAD_LIST,
        }, data => {
            data.forEach(a => {
                a.time = a.win_date;
                a.num = 1;
                for (var k in JSON.parse(a.win_info)) {
                    a.name = k;
                }
            })
            this.my_award_list.dataSource = data;
        })
    }
    // 设置规则默认属性
    setDefaultProp(target: Laya.Image):void {
        target.scaleX = .7;
        target.scaleY = .7;
        target.alpha = 0;
        target.anchorX = .5;
        target.anchorY = .5;
        target.y = 1000 + (target.height / 2);
        target.pos(Laya.stage.width / 2, Laya.stage.height / 2);
    }
    // 显示隐藏 规则
    setRuleState(state: boolean, target: Laya.Image):any {
        return ():any => {
            this.rule.visible = false;
            this.my_award.visible = false;
            if (state) {
                var prop = {
                    scaleX: 1,
                    scaleY: 1,
                    alpha: 1,
                    y: 115 + (target.height / 2),
                }
                target.visible = state;
                Laya.Tween.to(target, prop, 200, Laya.Ease.backOut);
                return;
            }
            this.setDefaultProp(target);            
        }
    }
    // 开始游戏
    beginHandle():void {
        if (GameMain.TOKEN) {
            this.removeSelf();
            if (!GameMain.GameView) {
                GameMain.GameView = new GameView();
            }
            GameMain.GameView.reset();
            Laya.stage.addChild(GameMain.GameView);
        } else {
            alert('url有误');
        }        
    }
    // 设置滚动中奖信息
    setLoopList():void {
        var sp:Laya.Sprite = new Laya.Sprite();
        sp.graphics.drawRect(50, 0, 523, 37, '#ffffff');
        this.loop_label.mask = sp;
        this.LOOP_TEXT_DATA.forEach((e, i)=> {
            var txt:Laya.Text = new Laya.Text();
            txt.text = `恭喜用户 ${e.member_mobile} 获得${e.win_name}~`;
            txt.y = 12;
            txt.x = 60 + (this.LOOP_TEXT_UNIT_WIDTH * i);
            this.loop_label.addChild(txt);
        });
        if (this.LOOP_TEXT_DATA.length > 1) {
            Laya.timer.frameLoop(1, this, this.loopText); 
        }         
    }
    // 滚动文字
    loopText():void {
        for (var i:number = 1, l:number = this.loop_label.numChildren; i < l; i++) {
            var txt: Laya.Text = <Laya.Text>this.loop_label.getChildAt(i);
            txt.x -= 1;
            if (txt.x <= -this.LOOP_TEXT_UNIT_WIDTH) {
                txt.x = (l - 2) * 300;
            }
        }
    }
}