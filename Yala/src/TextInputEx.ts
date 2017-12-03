class TextInputEx extends Laya.TextInput {
    initText: string;
    initColor: string;
    
    constructor() {
        super();

        this.on(Laya.Event.FOCUS, this, this.onFocus);

        this.on(Laya.Event.BLUR, this, this.onBlur);
    }

    // 获取焦点
    onFocus():void {
        // 缓存初次文字和颜色
        if (!this.initText) {
            this.initText = this.textField.text;
            this.initColor = this.textField.color;
        }

        // 如果是提示字符串  设置为空和颜色
        if (this.initText === this.textField.text) {
            this.textField.text = '';
            this.textField.color = '#000000';
        }
    }
    // 失去焦点
    onBlur():void {
        if (this.textField.text === '') {
            this.textField.text = this.initText;
        }
        if (this.initText === this.textField.text) {
            this.textField.text = this.initText;
            this.textField.color = this.initColor;
        }
    }
}