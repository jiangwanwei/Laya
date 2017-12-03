// 程序入口
var Game = /** @class */ (function () {
    function Game() {
        // 敌机血量
        this.hps = [1, 2, 10];
        // 敌机速度
        this.speeds = [3, 2, 1];
        // 被击半径
        this.radius = [15, 30, 70];
        Laya.init(400, 852);
        Laya.Stat.show();
        // 创建循环滚动背景
        var bg = new Background();
        Laya.stage.addChild(bg);
        Laya.loader.load('res/atlas/war.atlas', Laya.Handler.create(this, this.onLoaded), null, Laya.Loader.ATLAS);
    }
    Game.prototype.onLoaded = function () {
        // 创建一个主角
        this.hero = new Role();
        // 初始化角色
        this.hero.init('hero', 0, 1, 0, 30);
        this.hero.pos(200, 500);
        Laya.stage.addChild(this.hero);
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
        // 创建敌人
        // this.createEnemy(10);
        // 创建主循环  frameLoop基于帧频的循环
        Laya.timer.frameLoop(1, this, this.onLoop);
    };
    Game.prototype.onLoop = function () {
        // 遍历舞台上所有飞机，更改飞行状态
        for (var i = Laya.stage.numChildren - 1; i > 0; i--) {
            var role = Laya.stage.getChildAt(i);
            if (role && role.speed) {
                // 根据飞机的速度改变位置
                role.y += role.speed;
                // 敌机移动到屏幕外就移除
                if (role.y >= 1000) {
                    role.removeSelf();
                    // 回收到对象池
                    Laya.Pool.recover('role', role);
                }
            }
        }
        // 每隔30帧创建敌机
        if (Laya.timer.currFrame % 60 === 0) {
            this.createEnemy(2);
        }
    };
    Game.prototype.onMouseMove = function () {
        this.hero.pos(Laya.stage.mouseX, Laya.stage.mouseY);
    };
    Game.prototype.createEnemy = function (num) {
        for (var i = 0; i < num; i++) {
            // 随机出现敌人
            var r = Math.random();
            // 根据随机数，随机敌人
            var type = r < 0.7 ? 0 : r < 0.95 ? 1 : 2;
            // 创建敌人
            // var enemy:Role = new Role();
            var enemy = Laya.Pool.getItemByClass('role', Role); // 从对象池中创建，不用每一次new一个Role的实例，节省性能
            // 初始化角色
            enemy.init('enemy' + (type + 1), 1, this.hps[type], this.speeds[type], this.radius[type]);
            // 随机位置
            enemy.pos(Math.random() * 400 + 40, -200);
            // 添加到舞台
            Laya.stage.addChild(enemy);
        }
    };
    return Game;
}());
new Game();
//# sourceMappingURL=Game.js.map