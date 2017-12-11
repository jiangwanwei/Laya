var WxJs = /** @class */ (function () {
    function WxJs() {
        new Http({
            url: API.SHARE_PARAMS,
            data: {
                url: location.href.replace(/\&/g, '|'),
            }
        }, this.init);
    }
    WxJs.prototype.init = function (data) {
        //通过config接口注入权限验证配置
        Laya.Browser.window.wx.config({
            debug: data.debug || false,
            appId: data.appId,
            timestamp: data.timestamp,
            nonceStr: data.nonceStr,
            signature: data.signature,
            jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });
        var title = GameStart.SHARE_NAME, link = location.protocol + '//' + location.hostname + '/card/dump.html?member_id=' + GameMain.MEMBER_ID, 
        // link:string = location.protocol + '//' + location.hostname.replace(/^game\./, 'a.') + '/game/wx-web-login?member_id=' + GameMain.MEMBER_ID + '&url=' + encodeURIComponent(location.protocol + '//' + location.hostname.replace(/^a\./, 'game.') + location.pathname),
        imgUrl = GameStart.SHARE_PIC, desc = '挑战蛋糕师';
        Laya.Browser.window.wx.ready(function () {
            Laya.Browser.window.wx.onMenuShareTimeline({
                title: title,
                link: link,
                imgUrl: imgUrl,
                success: function (a) {
                    new Http({
                        url: API.SHARE_CREATE,
                    }, function (data) {
                        if (typeof data === 'object')
                            return;
                        GameStart.isShared = true;
                        GameStart.chanceNum += 1;
                        GameMain.GameView && GameMain.GameView.updateChanceNum();
                        document.getElementById('share-model').style.display = 'none';
                        var dlg = new noCloseDialog('\n恭 喜 您 获 得 \n \n 一次游戏机会', 'ui/btn_continue.png', function () {
                            dlg.close();
                            GameMain.GameView && GameMain.GameView.reset();
                        });
                        dlg.popup(true);
                        Laya.stage.addChild(dlg);
                    });
                },
            });
            Laya.Browser.window.wx.onMenuShareAppMessage({
                title: title,
                desc: desc,
                link: link,
                imgUrl: imgUrl,
                type: 'link',
                dataUrl: '',
                success: function (a) {
                    new Http({
                        url: API.SHARE_CREATE,
                    }, function (data) {
                        if (typeof data === 'object')
                            return;
                        GameStart.isShared = true;
                        GameStart.chanceNum += 1;
                        GameMain.GameView && GameMain.GameView.updateChanceNum();
                        document.getElementById('share-model').style.display = 'none';
                        var dlg = new noCloseDialog('\n恭 喜 您 获 得 \n \n 一次游戏机会', 'ui/btn_continue.png', function () {
                            dlg.close();
                            GameMain.GameView && GameMain.GameView.reset();
                        });
                        dlg.popup(true);
                        Laya.stage.addChild(dlg);
                    });
                },
            });
        });
        Laya.Browser.window.wx.error(function (a) {
            alert(JSON.stringify(a));
        });
    };
    WxJs.shareSuccess = function () {
        new Http({
            url: API.SHARE_CREATE,
        }, function (data) {
            if (typeof data === 'object')
                return;
            GameStart.isShared = true;
            GameStart.chanceNum += 1;
            GameMain.GameView && GameMain.GameView.updateChanceNum();
            document.getElementById('share-model').style.display = 'none';
            var dlg = new noCloseDialog('\n恭 喜 您 获 得 \n \n 一次游戏机会', 'ui/btn_continue.png', function () {
                dlg.close();
                GameMain.GameView && GameMain.GameView.reset();
            });
            dlg.popup(true);
            Laya.stage.addChild(dlg);
        });
    };
    return WxJs;
}());
//# sourceMappingURL=wx.js.map