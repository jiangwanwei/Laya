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
    var GameViewUI = /** @class */ (function (_super) {
        __extends(GameViewUI, _super);
        function GameViewUI() {
            return _super.call(this) || this;
        }
        GameViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.GameViewUI.uiView);
        };
        GameViewUI.uiView = { "type": "View", "props": { "width": 640, "height": 1009 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 640 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "ui/game-view-bg.jpg" } }, { "type": "Image", "props": { "y": 0, "x": 0, "width": 640, "skin": "ui/top-bg.png", "height": 62, "sizeGrid": "0,0,0,0,1" } }, { "type": "Image", "props": { "y": 106, "x": 256, "skin": "ui/chance-bg.png" } }, { "type": "Image", "props": { "y": 74, "x": 89, "skin": "ui/avatar.png" } }, { "type": "Image", "props": { "y": 128, "x": 465, "var": "btn_home", "skin": "ui/home-txt.png" } }] }, { "type": "Clip", "props": { "y": 105, "x": 317, "width": 56, "var": "chanceNumClip", "skin": "ui/clip_num.png", "index": 0, "height": 60, "clipX": 9, "clipWidth": 56 } }, { "type": "List", "props": { "y": 234, "x": 5, "width": 630, "var": "cardList", "spaceY": 7, "spaceX": 7, "repeatY": 3, "repeatX": 3, "height": 748 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 206, "name": "render", "height": 245 }, "child": [{ "type": "Image", "props": { "skin": "ui/card-bg.png" } }, { "type": "Image", "props": { "y": 50, "x": 102, "skin": "ui/card_init.jpg", "name": "card", "anchorX": 0.5 } }] }] }] };
        return GameViewUI;
    }(View));
    ui.GameViewUI = GameViewUI;
})(ui || (ui = {}));
(function (ui) {
    var IndexUI = /** @class */ (function (_super) {
        __extends(IndexUI, _super);
        function IndexUI() {
            return _super.call(this) || this;
        }
        IndexUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.IndexUI.uiView);
        };
        IndexUI.uiView = { "type": "View", "props": { "width": 640, "height": 1009 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 640, "skin": "ui/grid-bg.jpg", "sizeGrid": "0,0,0,0,1", "height": 1009 } }, { "type": "Image", "props": { "y": 293, "x": 0, "skin": "ui/gril.png" } }, { "type": "Image", "props": { "y": 803, "x": 121, "var": "btn_bigin", "skin": "ui/begin_btn.png.png" } }, { "type": "Image", "props": { "y": 881, "x": 500, "var": "btn_my_award", "skin": "ui/my_award_btn.png" } }, { "type": "Image", "props": { "y": 881, "x": 0, "var": "btn_rule", "skin": "ui/rule_btn.png" } }, { "type": "Image", "props": { "y": 62, "x": 0, "width": 642, "skin": "ui/tip-bg.jpg", "sizeGrid": "5,6,5,47", "height": 40 } }, { "type": "Image", "props": { "y": 103, "x": -1, "skin": "ui/title.png" } }, { "type": "Image", "props": { "y": 0, "x": 0, "width": 641, "skin": "ui/top-bg.png", "sizeGrid": "0,0,0,0,1", "height": 62 } }, { "type": "Label", "props": { "y": 64, "x": 56, "width": 565, "valign": "middle", "text": "恭喜XXX获得123蛋糕裙一张~", "height": 37, "color": "#6a2707" } }, { "type": "Image", "props": { "y": 141, "x": 36, "width": 579, "visible": false, "var": "rule", "skin": "ui/dialog-bg.png", "sizeGrid": "57,54,16,15", "height": 798 }, "child": [{ "type": "Image", "props": { "y": 55, "x": 29, "skin": "ui/rule-txt.png" } }, { "type": "Label", "props": { "y": 7, "x": 524, "width": 51, "var": "btn_rule_close", "height": 54 } }] }, { "type": "Image", "props": { "y": 116, "x": 48, "width": 568, "var": "my_award", "skin": "ui/dialog-bg.png", "height": 847, "sizeGrid": "57,54,16,15" }, "child": [{ "type": "Image", "props": { "y": 49, "x": 34, "skin": "ui/my-award-title.png" } }, { "type": "Image", "props": { "y": 729, "x": 29, "skin": "ui/my-award-rule.png" } }, { "type": "Image", "props": { "y": 664, "x": 119, "skin": "ui/my-award-btn.png" } }, { "type": "Label", "props": { "y": 5, "x": 512, "width": 50, "var": "btn_close_award", "height": 54 } }] }] };
        return IndexUI;
    }(View));
    ui.IndexUI = IndexUI;
})(ui || (ui = {}));
(function (ui) {
    var LoadingUI = /** @class */ (function (_super) {
        __extends(LoadingUI, _super);
        function LoadingUI() {
            return _super.call(this) || this;
        }
        LoadingUI.prototype.createChildren = function () {
            View.regComponent("Text", laya.display.Text);
            _super.prototype.createChildren.call(this);
            this.createView(ui.LoadingUI.uiView);
        };
        LoadingUI.uiView = { "type": "View", "props": { "width": 640, "height": 1009 }, "child": [{ "type": "Label", "props": { "y": 0, "x": 0, "width": 640, "height": 1009, "bgColor": "#000000" } }, { "type": "Text", "props": { "y": 484, "x": 200, "width": 209, "text": "迈小步科技制作", "height": 74, "fontSize": 24, "color": "#ffffff", "align": "center" }, "compId": 4 }, { "type": "Text", "props": { "y": 403, "x": 251, "width": 108, "var": "progress", "text": "10%", "height": 91, "fontSize": 28, "color": "#ffffff", "align": "center" } }, { "type": "Image", "props": { "y": 416, "x": 304, "skin": "loading/loading.png", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 6 }], "animations": [{ "nodes": [{ "target": 4, "keyframes": { "fontSize": [{ "value": 24, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "fontSize", "index": 0 }, { "value": 24, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "fontSize", "index": 30 }] } }, { "target": 6, "keyframes": { "rotation": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "rotation", "index": 0 }, { "value": 360, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "rotation", "index": 30 }] } }], "name": "loading", "id": 1, "frameRate": 24, "action": 2 }] };
        return LoadingUI;
    }(View));
    ui.LoadingUI = LoadingUI;
})(ui || (ui = {}));
(function (ui) {
    var MyDialogUI = /** @class */ (function (_super) {
        __extends(MyDialogUI, _super);
        function MyDialogUI() {
            return _super.call(this) || this;
        }
        MyDialogUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.MyDialogUI.uiView);
        };
        MyDialogUI.uiView = { "type": "Dialog", "props": { "width": 560, "height": 400 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 560, "skin": "ui/dialog-bg.png", "height": 400, "sizeGrid": "57,54,16,15" } }, { "type": "Label", "props": { "y": 16, "x": 512, "width": 33, "var": "btn_close", "height": 31 } }, { "type": "Button", "props": { "y": 291, "x": 75, "var": "confim", "stateNum": 1, "skin": "ui/btn_continue.png" } }, { "type": "Label", "props": { "y": 74, "x": 98, "width": 356, "var": "context", "height": 44, "fontSize": 30, "color": "#ff643c", "align": "center" } }, { "type": "Image", "props": { "y": 133, "x": 208, "width": 123, "var": "awardImg", "height": 141 } }, { "type": "Image", "props": { "y": 102, "x": 60, "var": "txtImg" } }] };
        return MyDialogUI;
    }(Dialog));
    ui.MyDialogUI = MyDialogUI;
})(ui || (ui = {}));
(function (ui) {
    var baseDialogUI = /** @class */ (function (_super) {
        __extends(baseDialogUI, _super);
        function baseDialogUI() {
            return _super.call(this) || this;
        }
        baseDialogUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.baseDialogUI.uiView);
        };
        baseDialogUI.uiView = { "type": "Dialog", "props": { "width": 640, "height": 1009 }, "child": [{ "type": "Label", "props": { "y": 0, "width": 640, "height": 1009, "bgColor": "#060606", "alpha": 0.1 } }, { "type": "Image", "props": { "y": 304, "x": 40, "width": 560, "skin": "ui/dialog-bg-noclose.png", "sizeGrid": "13,15,12,15", "height": 400 }, "child": [{ "type": "Button", "props": { "y": 292, "x": 75, "var": "confim", "stateNum": 1, "skin": "ui/btn_continue.png" } }, { "type": "Label", "props": { "y": 74, "x": 45, "width": 469, "var": "context", "height": 44, "fontSize": 30, "color": "#ff643c", "align": "center" } }, { "type": "Image", "props": { "y": 133, "x": 208, "width": 123, "var": "awardImg", "height": 141 } }, { "type": "Image", "props": { "y": 102, "x": 60, "var": "txtImg" } }] }] };
        return baseDialogUI;
    }(Dialog));
    ui.baseDialogUI = baseDialogUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map