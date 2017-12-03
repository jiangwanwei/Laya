// 程序入口
class Game{
    private hero:Role;
    constructor() {
        Laya.init(400, 852);

        Laya.Stat.show();

        // 创建循环滚动背景
        var bg:Background = new Background();
        Laya.stage.addChild(bg);

        Laya.loader.load('res/atlas/war.atlas', Laya.Handler.create(this, this.onLoaded), null, Laya.Loader.ATLAS);
    }
    onLoaded():void {
        // 创建一个主角
        this.hero = new Role();
        // 初始化角色
        this.hero.init('hero', 0, 1, 0, 30);
        // 设置设计类型
        this.hero.shootType = 1;
        
        this.hero.pos(200, 500);
        Laya.stage.addChild(this.hero);
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);

        // 创建敌人
        // this.createEnemy(10);
        // 创建主循环  frameLoop基于帧频的循环
        Laya.timer.frameLoop(1, this, this.onLoop);
    }
    onLoop():void {
        // 遍历舞台上所有飞机，更改飞行状态
        for (var i:number = Laya.stage.numChildren - 1; i > 0; i--) {
            var role:Role = <Role>Laya.stage.getChildAt(i);

            if (role && role.speed) {
                // 根据飞机的速度改变位置
                role.y += role.speed;
                // 敌机移动到屏幕外就移除
                if (role.y >= 1000 || !role.visible || (role.isBullet && role.y < -20)) {
                    role.removeSelf();
                    // 回收之前重置属性
                    role.isBullet = false;
                    role.visible = true;
                    // 回收到对象池
                    Laya.Pool.recover('role', role);
                }
            }
        }
        // 每隔30帧创建敌机
        if (Laya.timer.currFrame % 60 === 0) {
            this.createEnemy(2);
        }
    }
    onMouseMove():void {
        this.hero.pos(Laya.stage.mouseX, Laya.stage.mouseY);
    }
    // 敌机血量
    private hps:Array<any> = [1, 2, 10];
    // 敌机速度
    private speeds:Array<any> = [3, 2, 1];
    // 被击半径
    private radius:Array<any> = [15, 30, 70];
    createEnemy(num: number) {
        for (var i:number = 0; i < num; i++) {
            // 随机出现敌人
            var r:number = Math.random();
            // 根据随机数，随机敌人
            var type = r < 0.7 ? 0: r < 0.95 ?  1 : 2;
            // 创建敌人
            // var enemy:Role = new Role();
            var enemy:Role = Laya.Pool.getItemByClass('role', Role);  // 从对象池中创建，不用每一次new一个Role的实例，节省性能
            // 初始化角色
            enemy.init('enemy' + (type + 1), 1, this.hps[type], this.speeds[type], this.radius[type]);
            // 随机位置
            enemy.pos(Math.random() * 400 + 40, -200);
            // 添加到舞台
            Laya.stage.addChild(enemy);
        }
    }
}
new Game();