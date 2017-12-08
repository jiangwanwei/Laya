var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * 弹出框
 */
var noCloseDialog = /** @class */ (function (_super) {
    __extends(noCloseDialog, _super);
    function noCloseDialog(title, btn_skin, callback) {
        var _this = _super.call(this) || this;
        _this.init();
        _this.context.text = title;
        // 确定按钮事件
        _this.confim.once(Laya.Event.CLICK, _this, callback);
        _this.closeEffect = null; // 取消关闭特效
        _this.confim.skin = btn_skin;
        return _this;
    }
    // 初始化子组件位置
    noCloseDialog.prototype.init = function () {
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
    };
    return noCloseDialog;
}(ui.baseDialogUI));
//# sourceMappingURL=noCLoseDialog.js.map