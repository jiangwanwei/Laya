/**
 * 弹出框
 */
class noCloseDialog extends ui.baseDialogUI {
    constructor(title: string, btn_skin: string, callback: Function) {
        super();
        this.init();
        this.context.text = title;
        // 确定按钮事件
        this.confim.once(Laya.Event.CLICK, this, callback);
        this.closeEffect = null;  // 取消关闭特效
        this.confim.skin = btn_skin;
    }
    // 初始化子组件位置
    private init():void {
        // 提示文字
        this.context.text = '';
        this.context.x = 98;
        this.context.y = 74;
        this.context.width = 356;

        // 奖品图片
        this.awardImg.skin = '';
        this.awardImg.x = 208;
        this.awardImg.y = 133;
        this.awardImg.width = 123;
        this.awardImg.height = 141;

        // 内容文字图片
        this.txtImg.x = 60;
        this.txtImg.y = 120;
        this.txtImg.skin = '';

        this.confim.y = 292;
    }
}