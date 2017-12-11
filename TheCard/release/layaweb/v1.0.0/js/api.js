var API = /** @class */ (function () {
    function API() {
    }
    API.PARAMS = '/tools-fans'; // 中奖设置
    API.LOOP_AWRAD_LIST = '/tools-fans/win-info'; // 滚动中奖列表
    API.INFO = '/tools-fans/create'; // 抽奖 mark=read 为获取用户抽奖设置
    API.AWRAD_LIST = '/tools-fans-user-info'; // 用户中奖列表
    API.BIND_USER = '/bind-wx-openid'; // 绑定手机号
    API.SHARE_PARAMS = '/wechat-share'; // 分享参数获取
    API.SHARE_CREATE = '/wechat-share/create'; // 分享成功+次数
    API.SHARE_STATE = '/wechat-shared'; // 是否分享过
    API.HELP = '/wechat-help'; // 我要助力
    return API;
}());
//# sourceMappingURL=api.js.map