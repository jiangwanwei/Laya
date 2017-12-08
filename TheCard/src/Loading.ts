/**
 * Loading加载
 */
class Loading extends ui.LoadingUI {
    constructor() {
        super();
        this.progress.text = '0%';
    }
    // http 交互 隐藏迈小步
    hide():void {
        this.bg.alpha = .3;
        this.mxb.visible = false;
        this.progress.text = '';
    }
}