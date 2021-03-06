// 程序入口

import LayaStage = Laya.Stage;
import Loader = Laya.Loader;
import Hander = Laya.Handler;

class GameMain {
    // 游戏开始界面
    public static GameStart: GameStart;
    // 游戏主界面
    public static GameView: GameView;
    // 加载进度
    private loading:Loading;
    // 登录状态
    static OPPEN_ID: string;
    // TOKEN
    static TOKEN:string;
    // 会员id
    static MEMBER_ID:string;
    // 分享人id  ， 被助力人的id
    static SHARE_ID:string;
    constructor() {
        this.setStageParams();
        // 进入游戏显示加载进度
        this.initLoading();
    }
    // 设置舞台参数
    private setStageParams():void {
        // 优先使用webgl渲染，不支持会自动使用canvas
        Laya.init(640, 1009, Laya.WebGL);
        // 设置背景颜色  用于显示 loading...
        Laya.stage.bgColor = '#000000';
        // 性能监控
        // Laya.Stat.show();
        // 设置适配
        Laya.stage.scaleMode = LayaStage.SCALE_SHOWALL;
        Laya.stage.alignH = LayaStage.ALIGN_CENTER;
        Laya.stage.screenMode = LayaStage.SCREEN_VERTICAL;
    }
    // 加载进入页面loading文字
    initLoading():void {
        var resArray:Array<any> = [
            { url: 'res/atlas/loading.atlas', type:Loader.ATLAS }
        ];
        Laya.loader.load(resArray, Hander.create(null, a => {
            this.loading = new Loading();
            Laya.stage.addChild(this.loading);
            this.init();
        }));        
    }
    // 初始化游戏 (加载游戏资源)
    init():void {
        var resArray:Array<any> = [
            { url: 'ui/card_init.jpg', type: Loader.IMAGE },
            { url: 'ui/clip_num.png', type: Loader.IMAGE },
            { url: 'ui/game-view-bg.jpg', type: Loader.IMAGE },
            { url: 'ui/grid-bg.jpg', type: Loader.IMAGE },
            { url: 'ui/gril.png', type: Loader.IMAGE },
            { url: 'ui/tip-bg.jpg', type: Loader.IMAGE },
            { url: 'ui/title.png', type: Loader.IMAGE},
            { url: 'res/atlas/ui.atlas', type:Loader.ATLAS }
        ];
        Laya.loader.load(resArray, Hander.create(this, this.onLoadComplete), Hander.create(this, this.onLoadProgress));
    }
    // 加载游戏资源进度
    onLoadProgress(num: number):void {        
        this.loading.progress.text = (num * 100).toFixed(0) + '%';
    }
    // 加载游戏资源完成
    onLoadComplete():void {
        this.loading.progress.text = '100%';
        Laya.Tween.to(this.loading, {alpha: 0}, 200, Laya.Ease.bounceInOut, Hander.create(null, () => {
            Laya.stage.bgColor = '#ff5529';
            this.loading.visible = false;
            this.loading.removeSelf();
            this.loading.destroy();
            this.technicalSupport();
            this.loadGameStart();
        }))
    }
    // 加载游戏开始界面
    loadGameStart():void {
        GameMain.OPPEN_ID = GameMain.GetQueryString('openid');
        GameMain.TOKEN = GameMain.GetQueryString('token');
        GameMain.MEMBER_ID = GameMain.GetQueryString('member_id');
        GameMain.SHARE_ID = GameMain.GetQueryString('share_id');
        GameMain.TOKEN = GameMain.TOKEN;
        // 添加开始界面
        GameMain.GameStart = new GameStart();
        Laya.stage.addChild(GameMain.GameStart);
        // 界面显示助力
        if (GameMain.SHARE_ID && GameMain.SHARE_ID !== 'nothing') return GameMain.GameStart.showHelpPage();
        // 获取游戏配置
        GameStart.getGameParams();
        // 是否绑定手机号码
        if (GameMain.OPPEN_ID) {
            var mobile:InputMobile = new InputMobile();
            mobile.popup(true);
            Laya.stage.addChild(mobile);
        }
    }
    // 技术支持
    technicalSupport():void {
        var txt:Laya.Text = new Laya.Text();
        txt.text = '技术支持：迈小步科技';
        txt.color = '#fff';
        txt.fontSize = 16;
        txt.x = (Laya.stage.width - txt.width) / 2;
        txt.y = Laya.stage.height - 18;
        txt.zOrder = 100;
        Laya.stage.addChild(txt);
    }
    // 显示首页
    static returnHome():void{
        GameMain.GameView.noCloseDialog && GameMain.GameView.noCloseDialog.close();
        GameMain.GameView.removeSelf();
        Laya.stage.addChild(GameMain.GameStart);
    }
    // 获取url参数
    static GetQueryString(name):any {
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return  decodeURIComponent(r[2]);
        return null;
    }
    // 获取游戏次数 (mark = read), 发送中奖内容（次数-1 mark = '' || write）; 
    static getAndSetUserChance(mark:string = '', win_info:string = ''):void {
        new Http({
            url: API.INFO,
            data: { mark, win_info }
        }, data => {
            GameStart.historyChanceNum = ~~data.allTime;
            GameStart.chanceNum = data.surplus_times;
            GameMain.GameView && GameMain.GameView.updateChanceNum();
        })
    }
}
new GameMain();