class API {
    static HOST             = location.hostname.replace(/^game/, 'a');
    static PARAMS           = '/tools-fans';                // 中奖设置
    static LOOP_AWRAD_LIST  = '/tools-fans/win-info';       // 滚动中奖列表
    static INFO             = '/tools-fans/create';         // 抽奖 mark=read 为获取用户抽奖设置
    static AWRAD_LIST       = '/tools-fans-user-info';      // 用户中奖列表
    static BIND_USER        = '/bind-wx-openid';            // 绑定手机号
    static SHARE_PARAMS     = '/wechat-share';              // 分享参数获取
    static SHARE_CREATE     = '/wechat-share/create';       // 分享成功+次数
    static SHARE_STATE      = '/wechat-shared';             // 是否分享过
    static HELP             = '/wechat-help';               // 我要助力
}