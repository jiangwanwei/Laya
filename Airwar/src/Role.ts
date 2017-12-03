class Role extends Laya.Sprite {
    
    private body: Laya.Animation;   // 定义飞机身体
    public static cached: boolean = false;  // 是否缓存过动画
    public type: string;           // 角色类型    
    public camp: number;            // 阵营
    public hp: number;              // 血量
    public speed: number;           // 速度
    public hitRadius: number;       // 被击半径

    public shootType: number = 0;   // 射击类型
    public shootInterval: number = 500;       // 射击间隔
    public shootTime: number = Laya.Browser.now() + 2000;       // 下次射击时间
    public action: string = '';      // 当前动作
    public isBullet: boolean = false;       //  是否是子弹

    constructor() {
        super();
    }
    public init(_type: string, _camp: number, _hp: number, _speed: number, _hitRadius: number):void {
        this.type = _type;
        this.camp = _camp;
        this.hp = _hp;
        this.speed = _speed;
        this.hitRadius = _hitRadius;
        if (!Role.cached) {
            Role.cached = true;
            // 缓存飞行动画
            Laya.Animation.createFrames(['war/hero_fly1.png', 'war/hero_fly2.png'], 'hero_fly');
            // 击中爆炸效果
            Laya.Animation.createFrames(['war/hero_down1.png', 'war/hero_down2.png', 'war/hero_down3.png', 'war/hero_down4.png'], 'hero_down');
            
            // 缓存敌机1飞行动画
            Laya.Animation.createFrames(['war/enemy1_fly1.png'], 'enemy1_fly');
            // 缓存敌机1爆炸动画
            Laya.Animation.createFrames(['war/enemy1_down1.png', 'war/enemy1_down2.png', 'war/enemy1_down3.png', 'war/enemy1_down4.png'], 'enemy1_down');

            // 缓存敌机2飞行动画
            Laya.Animation.createFrames(['war/enemy2_fly1.png'], 'enemy2_fly');
            // 缓存敌机2爆炸动画
            Laya.Animation.createFrames(['war/enemy2_down1.png', 'war/enemy2_down2.png', 'war/enemy2_down3.png', 'war/enemy2_down4.png'], 'enemy2_down');
            // 缓存敌机2碰撞效果
            Laya.Animation.createFrames(['war/enemy2_hit.png'], 'enemy2_hit');

            // 缓存敌机3飞行动画
            Laya.Animation.createFrames(['war/enemy3_fly1.png', 'war/enemy3_fly1.png'], 'enemy3_fly');
            // 缓存敌机3爆炸动画
            Laya.Animation.createFrames(['war/enemy3_down1.png', 'war/enemy3_down2.png', 'war/enemy3_down3.png', 'war/enemy3_down4.png', 'war/enemy3_down5.png','war/enemy3_down6.png'], 'enemy3_down')
            // 缓存敌机3碰撞效果
            Laya.Animation.createFrames(['war/enemy3_hit.png'], 'enemy3_hit');

            // 缓存子弹飞行动画
            Laya.Animation.createFrames(['war/bullet1.png'], 'bullet1_fly');
        }
        if (!this.body) {
            // 创建一个动画为飞机本身
            this.body = new Laya.Animation();
            this.addChild(this.body);
            this.body.on(Laya.Event.COMPLETE, this, this.onPlayComplete);
        }

        this.playAction('fly');
    }
    onPlayComplete():void {
        //  击毁动画则隐藏
        if (this.action === 'down') {
            this.body.stop();
            this.visible = false;
        }
        else if (this.action === 'hit') {
            // 击打动画播放完毕继续播放飞行动画
            this.playAction('fly');
        }
    }
    playAction(action: string): void {
        // 记录当前动画播放类型
        this.action = action;
        this.body.play(0, true, this.type + '_' + action);

        // 获取动画大小区域
        var bound:Laya.Rectangle = this.body.getBounds();
        this.body.pos( - bound.width / 2, - bound.height / 2);
    }
}