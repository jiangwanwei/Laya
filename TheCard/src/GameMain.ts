// 程序入口

import LayaStage = Laya.Stage;
import Loader = Laya.Loader;
import Hander = Laya.Handler;

class GameMain{
    // loading 文字
    private loadingTxt: Laya.Text;

    public GameStart: GameStart;
    public GameView: any;
    public GameEnd: any;

    constructor() {
        // 优先使用webgl渲染，不支持会自动使用canvas
        Laya.init(640, 1009, Laya.WebGL);

        // 设置背景颜色  用于显示 loading...
        Laya.stage.bgColor = '#e16339';

        Laya.Stat.show();

        // 设置适配
        Laya.stage.scaleMode = LayaStage.SCALE_SHOWALL;
        Laya.stage.alignH = LayaStage.ALIGN_CENTER;
        Laya.stage.screenMode = LayaStage.SCREEN_VERTICAL;

        // 进入游戏显示加载进度
        this.initLoading();

        this.init();
    }
    // 加载进入页面loading文字
    initLoading():void {
        this.loadingTxt = new Laya.Text();
        this.loadingTxt.text = 'loading(0%)...';
        this.loadingTxt.color = '#ffffff';
        this.loadingTxt.width = Laya.stage.width;
        this.loadingTxt.height = Laya.stage.height;
        this.loadingTxt.align = LayaStage.ALIGN_CENTER;
        this.loadingTxt.fontSize = 27;
        this.loadingTxt.valign = LayaStage.ALIGN_MIDDLE;
        this.loadingTxt.italic = true;
        Laya.stage.addChild(this.loadingTxt);
    }
    // 初始化游戏 (加载游戏资源)
    init():void {
        var resArray:Array<any> = [
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
        // TODO.
        this.loadingTxt.text = `loading(${num * 100}%)...`;
    }
    // 加载游戏资源完成
    onLoadComplete():void {
        this.loadingTxt.text = `loading(100%)...`;
        Laya.Tween.to(this.loadingTxt, {alpha: 0}, 200, Laya.Ease.bounceInOut, Hander.create(null, () => {
            this.loadingTxt.visible = false;
            this.loadingTxt.removeSelf();
            this.loadingTxt.destroy();

            this.loadGameStart();
        }))
    }
    // 加载游戏开始界面
    loadGameStart():void {
        // 添加开始界面
        var gameStar: GameStart = new GameStart();
        Laya.stage.addChild(gameStar);
    }
}
new GameMain();