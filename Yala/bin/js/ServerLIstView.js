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
var ServerListView = /** @class */ (function (_super) {
    __extends(ServerListView, _super);
    function ServerListView() {
        var _this = _super.call(this) || this;
        var dataSource = [];
        for (var i = 1; i <= 100; ++i) {
            var _data;
            if (i === 1) {
                _data = {
                    serverName: { label: '服务器' + i, selected: true },
                    flag: { text: '（推荐）', color: '#d73330' },
                };
            }
            else {
                _data = {
                    serverName: { label: '服务器' + i, selected: false },
                    flag: { text: '', color: '#000000' },
                };
            }
            dataSource.push(_data);
        }
        _this.selectIndex = -1;
        // 组合好数据放入列表中显示
        _this.serverList.array = dataSource;
        // 设置列表选项为可选
        _this.serverList.selectEnable = true;
        // 绑定选择事件  false: 绑定多次
        _this.serverList.selectHandler = Laya.Handler.create(_this, _this.onSelect, null, false);
        return _this;
    }
    ServerListView.prototype.onSelect = function (index) {
        console.log(index);
        if (this.selectIndex !== index) {
            if (this.selectIndex !== -1) {
                var _data = { serverName: { selected: false } };
                this.serverList.setItem(this.selectIndex, _data);
            }
            var _data = { serverName: { selected: true } };
            this.serverList.setItem(index, _data);
            this.selectIndex = index;
        }
    };
    return ServerListView;
}(ui.ServerListUI));
//# sourceMappingURL=ServerLIstView.js.map