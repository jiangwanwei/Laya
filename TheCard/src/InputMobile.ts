/**
 * 添加电话号码弹窗
 */
class InputMobile extends ui.inputMobileUI {
    constructor() {
        super();
        this.setInputProps();
        // 绑定提交按钮事件
        this.mobile_confim.on(Laya.Event.CLICK, this, this.confimHandle);
    }
    // 设置输入框参数
    setInputProps():void {
        this.mobile_input.restrict = '0123456789';
        this.mobile_input.maxChars = 11;
        this.mobile_input.align = Laya.Stage.ALIGN_CENTER;
        this.mobile_input.fontSize = 28;
        this.mobile_input.color = '#272626';
        this.mobile_input.prompt = '请输入您的手机号码';
    }
    // 提交电话
    confimHandle():void {
        if (!/^(0?(13|15|18|14|17)[0-9]{9})$/.test(this.mobile_input.text)) {
            alert('请输入正确的手机号码');
            return;
        }
        var loading:Loading = new Loading();
        loading.hide();
        Laya.stage.addChild(loading);
        new Http({
            url: API.BIND_USER,
            data: {
                mobile: this.mobile_input.text,
                wx_openid: GameMain.OPPEN_ID,
            }
        }, data => {
            location.href = <string>(location.origin + location.pathname + '?token=' + data.token + '&member_id=' + data.member_id);
        }, a => {
            loading.removeSelf();
            loading.destroy(); 
        })        
    }
}