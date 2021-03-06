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
 * Loading加载
 */
var Loading = /** @class */ (function (_super) {
    __extends(Loading, _super);
    function Loading() {
        var _this = _super.call(this) || this;
        _this.progress.text = '0%';
        return _this;
    }
    // http 交互 隐藏迈小步
    Loading.prototype.hide = function () {
        this.bg.alpha = .3;
        this.mxb.visible = false;
        this.progress.text = '';
    };
    return Loading;
}(ui.LoadingUI));
//# sourceMappingURL=Loading.js.map