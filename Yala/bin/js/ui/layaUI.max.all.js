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
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var LoginUI = /** @class */ (function (_super) {
        __extends(LoginUI, _super);
        function LoginUI() {
            return _super.call(this) || this;
        }
        LoginUI.prototype.createChildren = function () {
            View.regComponent("TextInputEx", TextInputEx);
            _super.prototype.createChildren.call(this);
            this.createView(ui.LoginUI.uiView);
        };
        LoginUI.uiView = { "type": "View", "props": { "width": 600, "height": 400 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 600, "skin": "ui/bg.png", "sizeGrid": "29,6,7,6", "height": 400 } }, { "type": "Image", "props": { "y": 52, "x": 15, "width": 237, "skin": "ui/laya_monkey.png", "height": 314 } }, { "type": "Label", "props": { "y": 160, "x": 286, "text": "用户名", "fontSize": 20, "color": "#0a0a0a", "size": 20 } }, { "type": "Label", "props": { "y": 67, "x": 264, "width": 137, "text": "欢迎。。。。。", "height": 12, "fontSize": 30, "color": "#ff0f0b", "align": "center", "size": 20 } }, { "type": "TextInput", "props": { "y": 155, "x": 365, "width": 175, "text": "请输入用户名", "skin": "ui/textinput.png", "runtime": "TextInputEx", "italic": false, "height": 30, "color": "#d6d3d3", "sizeGrid": "3,4,4,5" } }, { "type": "Label", "props": { "y": 206, "x": 286, "text": "密    码", "fontSize": 20, "color": "#0a0a0a", "size": 20 } }, { "type": "TextInput", "props": { "y": 201, "x": 365, "width": 175, "text": "请输入密码", "skin": "ui/textinput.png", "runtime": "TextInputEx", "height": 30, "color": "#dbdbdb", "sizeGrid": "3,4,4,5" } }, { "type": "CheckBox", "props": { "y": 265, "x": 297, "skin": "ui/checkbox.png", "label": "记住密码" } }, { "type": "Button", "props": { "y": 324, "x": 288, "var": "btn_reg", "skin": "ui/button.png", "sizeGrid": "5,4,4,5", "label": "注 册" } }, { "type": "Button", "props": { "y": 325, "x": 395, "var": "btn_login", "skin": "ui/button.png", "sizeGrid": "5,4,4,5", "label": "登 录" } }] };
        return LoginUI;
    }(View));
    ui.LoginUI = LoginUI;
})(ui || (ui = {}));
(function (ui) {
    var NormalDialogUI = /** @class */ (function (_super) {
        __extends(NormalDialogUI, _super);
        function NormalDialogUI() {
            return _super.call(this) || this;
        }
        NormalDialogUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.NormalDialogUI.uiView);
        };
        NormalDialogUI.uiView = { "type": "Dialog", "props": { "width": 300, "height": 200 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 300, "skin": "ui/bg.png", "sizeGrid": "30,8,8,8", "height": 200 } }, { "type": "Label", "props": { "y": 90, "x": 11, "width": 278, "var": "context", "text": "请输入文本", "height": 20, "fontSize": 20, "align": "center", "size": 20 } }, { "type": "Button", "props": { "y": 4, "x": 269, "var": "btn_close", "skin": "ui/btn_close.png" } }, { "type": "Button", "props": { "y": 150, "x": 112, "var": "btn_ok", "skin": "ui/button.png", "label": "o k", "sizeGrid": "3,3,3,4" } }] };
        return NormalDialogUI;
    }(Dialog));
    ui.NormalDialogUI = NormalDialogUI;
})(ui || (ui = {}));
(function (ui) {
    var RegDialogUI = /** @class */ (function (_super) {
        __extends(RegDialogUI, _super);
        function RegDialogUI() {
            return _super.call(this) || this;
        }
        RegDialogUI.prototype.createChildren = function () {
            View.regComponent("TextInputEx", TextInputEx);
            _super.prototype.createChildren.call(this);
            this.createView(ui.RegDialogUI.uiView);
        };
        RegDialogUI.uiView = { "type": "Dialog", "props": { "width": 300, "height": 350 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 300, "skin": "ui/bg.png", "height": 350, "sizeGrid": "29,6,7,6" } }, { "type": "Label", "props": { "y": 6, "x": 115, "width": 80, "text": "注册页面", "height": 12, "fontSize": 16, "color": "#000000", "align": "center", "size": 20 } }, { "type": "Box", "props": { "y": 59, "x": 60 }, "child": [{ "type": "Label", "props": { "y": 5, "text": "用户名", "size": 20 } }, { "type": "TextInput", "props": { "x": 62, "text": "请输入用户名", "skin": "ui/textinput.png", "restrict": "abc", "color": "#a39d9d", "runtime": "TextInputEx", "sizeGrid": "3,4,4,5" } }] }, { "type": "Box", "props": { "y": 101, "x": 60 }, "child": [{ "type": "Label", "props": { "y": 5, "text": "密   码", "size": 20 } }, { "type": "TextInput", "props": { "x": 62, "text": "请输入密码", "skin": "ui/textinput.png", "maxChars": 8, "color": "#a39d9d", "runtime": "TextInputEx", "sizeGrid": "3,4,4,5" } }] }, { "type": "Box", "props": { "y": 184, "x": 60 }, "child": [{ "type": "Label", "props": { "y": 5, "text": "手机号", "size": 20 } }, { "type": "TextInput", "props": { "x": 62, "text": "请输入手机号", "skin": "ui/textinput.png", "restrict": "0123456789", "maxChars": 11, "color": "#a39d9d", "runtime": "TextInputEx", "sizeGrid": "3,4,4,5" } }] }, { "type": "Box", "props": { "y": 142, "x": 60 }, "child": [{ "type": "Label", "props": { "y": 5, "text": "确认密码", "size": 20 } }, { "type": "TextInput", "props": { "x": 62, "text": "请再次输入密码", "skin": "ui/textinput.png", "maxChars": 8, "color": "#a39d9d", "runtime": "TextInputEx", "sizeGrid": "3,4,4,5" } }] }, { "type": "Box", "props": { "y": 225, "x": 60 }, "child": [{ "type": "Label", "props": { "y": 5, "text": "邮箱", "size": 20 } }, { "type": "TextInput", "props": { "x": 62, "text": "请输入邮箱", "skin": "ui/textinput.png", "color": "#a39d9d", "runtime": "TextInputEx", "sizeGrid": "3,4,4,5" } }] }, { "type": "Button", "props": { "y": 287, "x": 113, "var": "btn_submit", "skin": "ui/button.png", "label": "提交注册", "sizeGrid": "3,3,3,4" } }, { "type": "Button", "props": { "y": 4, "x": 268, "var": "btn_close", "skin": "ui/btn_close.png" } }] };
        return RegDialogUI;
    }(Dialog));
    ui.RegDialogUI = RegDialogUI;
})(ui || (ui = {}));
(function (ui) {
    var ServerListUI = /** @class */ (function (_super) {
        __extends(ServerListUI, _super);
        function ServerListUI() {
            return _super.call(this) || this;
        }
        ServerListUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.ServerListUI.uiView);
        };
        ServerListUI.uiView = { "type": "View", "props": { "width": 600, "height": 400 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 600, "skin": "ui/bg.png", "height": 400, "sizeGrid": "29,6,7,6" } }, { "type": "Label", "props": { "y": 37, "x": 22, "text": "服务器列表", "fontSize": 30, "size": 20 } }, { "type": "List", "props": { "y": 85, "x": 46, "width": 510, "var": "serverList", "vScrollBarSkin": "ui/vscroll.png", "height": 251 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 171, "name": "render", "height": 27 }, "child": [{ "type": "CheckBox", "props": { "skin": "ui/checkbox.png", "name": "serverName", "labelSize": 18, "label": " 服务器999" } }, { "type": "Label", "props": { "y": 5, "x": 108, "width": 47, "text": "（推荐）", "name": "flag", "height": 13, "color": "#d73330", "size": 20 } }] }] }, { "type": "Button", "props": { "y": 349, "x": 236, "width": 127, "skin": "ui/button.png", "labelSize": 20, "label": "进入游戏", "height": 36, "sizeGrid": "3,3,3,4" } }] };
        return ServerListUI;
    }(View));
    ui.ServerListUI = ServerListUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map