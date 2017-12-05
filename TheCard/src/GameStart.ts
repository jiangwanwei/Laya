/**
 * 游戏开始界面
 */
class GameStart extends ui.IndexUI {
    constructor() {
        super();       
        
        // 绑定显示规则事件
        this.btn_rule.on(Laya.Event.MOUSE_DOWN, this, this.setRuleState(true, this.rule));
        // 绑定隐藏规则事件
        this.btn_rule_close.on(Laya.Event.MOUSE_DOWN, this, this.setRuleState(false, this.rule));
        this.setDefaultProp(this.rule);

        // 绑定显示我奖励事件
        this.btn_my_award.on(Laya.Event.MOUSE_DOWN, this, this.setRuleState(true, this.my_award));
        // 绑定隐藏我奖励事件
        this.btn_close_award.on(Laya.Event.MOUSE_DOWN, this, this.setRuleState(false, this.my_award));
        this.setDefaultProp(this.my_award); 
        
        // 点击开始
        this.btn_bigin.on(Laya.Event.MOUSE_DOWN, this, this.beginHandle)
    }
    // 设置规则默认属性
    setDefaultProp(target: Laya.Image):void {
        target.scaleX = .5;
        target.scaleY = .5;
        target.alpha = 0;
        target.anchorX = .5;
        target.anchorY = .5;
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
        this.removeSelf();
        if (!GameMain.GameView) {
            GameMain.GameView = new GameView();
        }
        GameMain.GameView.reset();
        Laya.stage.addChild(GameMain.GameView);
    }
}