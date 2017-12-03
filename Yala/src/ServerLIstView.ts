class ServerListView extends ui.ServerListUI {
    selectIndex: number;
    constructor() {
        super();

        var dataSource:Array<any> = [];

        for (var i = 1; i <= 100; ++i) {
            var _data: any;
            
            if (i === 1) {
                _data = {
                    serverName: { label: '服务器' + i, selected: true},
                    flag: { text: '（推荐）', color: '#d73330'},
                }
            } else {
                _data = {
                    serverName: { label: '服务器' + i, selected: false},
                    flag: {text: '', color: '#000000'},
                }
            }
            dataSource.push(_data);
        }

        this.selectIndex = -1;

        // 组合好数据放入列表中显示
        this.serverList.array = dataSource;

        // 设置列表选项为可选
        this.serverList.selectEnable = true;

        // 绑定选择事件  false: 绑定多次
        this.serverList.selectHandler = Laya.Handler.create(this, this.onSelect, null, false);
    }

    onSelect(index:number):void {
        console.log(index);
        if (this.selectIndex !== index) {
            if (this.selectIndex !== -1) {
                var _data = { serverName: {selected: false}};
                this.serverList.setItem(this.selectIndex, _data);
            }

            var _data = { serverName: {selected: true}};
            this.serverList.setItem(index, _data);

            this.selectIndex = index;
        }
    }
}