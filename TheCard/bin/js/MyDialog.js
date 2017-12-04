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
var MyDialog = /** @class */ (function (_super) {
    __extends(MyDialog, _super);
    function MyDialog(_w, _h) {
        var _this = _super.call(this) || this;
        _this.width = _w;
        _this.height = _h;
        // this.context = _context;
        _this.init();
        _this.btn_close.on(Laya.Event.CLICK, _this, _this.close);
        return _this;
    }
    MyDialog.prototype.init = function () {
        // this.pos((Laya.stage.width - this.width) / 2, (Laya.stage.height - this.height) / 2);
    };
    return MyDialog;
}(ui.MyDialogUI));
//# sourceMappingURL=MyDialog.js.map