
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class GameViewUI extends View {
		public chanceNum:Laya.Clip;
		public cardList:Laya.List;

        public static  uiView:any ={"type":"View","props":{"width":640,"height":1009},"child":[{"type":"Box","props":{"y":0,"x":0},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"ui/game-view-bg.jpg"}},{"type":"Image","props":{"y":0,"x":0,"width":640,"skin":"ui/top-bg.png","height":62,"sizeGrid":"0,0,0,0,1"}},{"type":"Image","props":{"y":119,"x":340,"skin":"ui/chance-bg.png"}},{"type":"Image","props":{"y":87,"x":114,"skin":"ui/avatar.png"}}]},{"type":"Clip","props":{"y":118,"x":401,"width":56,"var":"chanceNum","skin":"ui/clip_num.png","index":0,"height":60,"clipX":9,"clipWidth":56}},{"type":"List","props":{"y":245,"x":5,"width":630,"var":"cardList","spaceY":7,"spaceX":7,"repeatY":3,"repeatX":3,"height":748},"child":[{"type":"Box","props":{"y":0,"x":0,"width":206,"name":"render","height":245},"child":[{"type":"Image","props":{"skin":"ui/card-bg.png"}},{"type":"Image","props":{"y":50,"x":102,"skin":"ui/card_init.jpg","name":"card","anchorX":0.5}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameViewUI.uiView);

        }

    }
}

module ui {
    export class IndexUI extends View {
		public btn_bigin:Laya.Image;
		public btn_my_award:Laya.Image;
		public btn_rule:Laya.Image;
		public rule:Laya.Image;
		public btn_rule_close:Laya.Label;
		public my_award:Laya.Image;
		public btn_close_award:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":640,"height":1009},"child":[{"type":"Image","props":{"y":0,"x":0,"width":640,"skin":"ui/grid-bg.jpg","sizeGrid":"0,0,0,0,1","height":1009}},{"type":"Image","props":{"y":292,"x":0,"skin":"ui/gril.png"}},{"type":"Image","props":{"y":803,"x":121,"var":"btn_bigin","skin":"ui/begin_btn.png.png"}},{"type":"Image","props":{"y":881,"x":500,"var":"btn_my_award","skin":"ui/my_award_btn.png"}},{"type":"Image","props":{"y":881,"x":0,"var":"btn_rule","skin":"ui/rule_btn.png"}},{"type":"Image","props":{"y":62,"x":0,"width":642,"skin":"ui/tip-bg.jpg","sizeGrid":"5,6,5,47","height":40}},{"type":"Image","props":{"y":103,"x":-1,"skin":"ui/title.png"}},{"type":"Image","props":{"y":0,"x":0,"width":641,"skin":"ui/top-bg.png","sizeGrid":"0,0,0,0,1","height":62}},{"type":"Label","props":{"y":64,"x":56,"width":565,"valign":"middle","text":"恭喜XXX获得123蛋糕裙一张~","height":37,"color":"#6a2707"}},{"type":"Image","props":{"y":141,"x":36,"width":579,"visible":false,"var":"rule","skin":"ui/dialog-bg.png","sizeGrid":"57,54,16,15","height":798},"child":[{"type":"Image","props":{"y":55,"x":29,"skin":"ui/rule-txt.png"}},{"type":"Label","props":{"y":7,"x":524,"width":51,"var":"btn_rule_close","height":54}}]},{"type":"Image","props":{"y":116,"x":48,"width":568,"var":"my_award","skin":"ui/dialog-bg.png","height":847,"sizeGrid":"57,54,16,15"},"child":[{"type":"Image","props":{"y":49,"x":34,"skin":"ui/my-award-title.png"}},{"type":"Image","props":{"y":729,"x":29,"skin":"ui/my-award-rule.png"}},{"type":"Image","props":{"y":664,"x":119,"skin":"ui/my-award-btn.png"}},{"type":"Label","props":{"y":5,"x":512,"width":50,"var":"btn_close_award","height":54}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.IndexUI.uiView);

        }

    }
}

module ui {
    export class MyDialogUI extends Dialog {
		public btn_close:Laya.Label;
		public confim:Laya.Button;
		public context:Laya.Label;
		public awardImg:Laya.Image;
		public txtImg:Laya.Image;

        public static  uiView:any ={"type":"Dialog","props":{"width":560,"height":400},"child":[{"type":"Image","props":{"y":0,"x":0,"width":560,"skin":"ui/dialog-bg.png","height":400,"sizeGrid":"57,54,16,15"}},{"type":"Label","props":{"y":16,"x":512,"width":33,"var":"btn_close","height":31}},{"type":"Button","props":{"y":291,"x":75,"var":"confim","stateNum":1,"skin":"ui/btn_continue.png"}},{"type":"Label","props":{"y":74,"x":98,"width":356,"var":"context","height":44,"fontSize":30,"color":"#ff643c","align":"center"}},{"type":"Image","props":{"y":133,"x":208,"width":123,"var":"awardImg","height":141}},{"type":"Image","props":{"y":102,"x":60,"var":"txtImg"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.MyDialogUI.uiView);

        }

    }
}
