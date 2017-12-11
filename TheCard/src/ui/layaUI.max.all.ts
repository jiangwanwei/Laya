
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class GameViewUI extends View {
		public btn_home:Laya.Image;
		public chanceNumClip:Laya.Clip;
		public cardList:Laya.List;

        public static  uiView:any ={"type":"View","props":{"width":640,"height":1009},"child":[{"type":"Box","props":{"y":0,"x":0,"width":640},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"ui/game-view-bg.jpg"}},{"type":"Image","props":{"y":0,"x":0,"width":640,"skin":"ui/top-bg.png","height":62,"sizeGrid":"0,0,0,0,1"}},{"type":"Image","props":{"y":106,"x":256,"skin":"ui/chance-bg.png"}},{"type":"Image","props":{"y":74,"x":89,"skin":"ui/avatar.png"}},{"type":"Image","props":{"y":128,"x":465,"var":"btn_home","skin":"ui/home-txt.png"}}]},{"type":"Clip","props":{"y":105,"x":317,"width":56,"var":"chanceNumClip","skin":"ui/clip_num.png","index":0,"height":60,"clipX":10,"clipWidth":56}},{"type":"List","props":{"y":234,"x":5,"width":630,"var":"cardList","spaceY":7,"spaceX":7,"repeatY":3,"repeatX":3,"height":748},"child":[{"type":"Box","props":{"y":0,"x":0,"width":206,"name":"render","height":245},"child":[{"type":"Image","props":{"skin":"ui/card-bg.png"}},{"type":"Image","props":{"y":50,"x":102,"width":150,"skin":"ui/card_init.jpg","name":"card","height":172,"anchorX":0.5}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameViewUI.uiView);
        }
    }
}

module ui {
    export class HelpViewUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":640,"height":1009}};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.HelpViewUI.uiView);
        }
    }
}

module ui {
    export class IndexUI extends View {
		public girl:Laya.Image;
		public btn_bigin:Laya.Image;
		public btn_my_award:Laya.Image;
		public btn_rule:Laya.Image;
		public loop_label:Laya.Label;
		public rule:Laya.Image;
		public btn_rule_close:Laya.Label;
		public my_award:Laya.Image;
		public shareTo:Laya.Image;
		public btn_close_award:Laya.Label;
		public my_award_list:Laya.List;
		public help_img:Laya.Image;
		public btn_help:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":640,"height":1009},"child":[{"type":"Image","props":{"y":0,"x":0,"width":640,"skin":"ui/grid-bg.jpg","sizeGrid":"0,0,0,0,1","height":1009}},{"type":"Image","props":{"y":293,"x":0,"var":"girl","skin":"ui/gril.png"}},{"type":"Image","props":{"y":803,"x":121,"var":"btn_bigin","skin":"ui/begin_btn.png.png"}},{"type":"Image","props":{"y":881,"x":500,"var":"btn_my_award","skin":"ui/my_award_btn.png"}},{"type":"Image","props":{"y":881,"x":0,"var":"btn_rule","skin":"ui/rule_btn.png"}},{"type":"Image","props":{"y":62,"x":0,"width":642,"skin":"ui/tip-bg.jpg","sizeGrid":"5,6,5,47","height":40}},{"type":"Image","props":{"y":103,"x":-1,"skin":"ui/title.png"}},{"type":"Image","props":{"y":0,"x":0,"width":641,"skin":"ui/top-bg.png","sizeGrid":"0,0,0,0,1","height":62}},{"type":"Label","props":{"y":64,"x":2,"width":636,"var":"loop_label","valign":"middle","height":37,"color":"#6a2707"}},{"type":"Image","props":{"y":141,"x":36,"width":579,"visible":false,"var":"rule","skin":"ui/dialog-bg.png","sizeGrid":"57,54,16,15","height":798},"child":[{"type":"Image","props":{"y":55,"x":29,"skin":"ui/rule-txt.png"}},{"type":"Label","props":{"y":7,"x":524,"width":51,"var":"btn_rule_close","height":54}}]},{"type":"Image","props":{"y":116,"x":48,"width":568,"visible":true,"var":"my_award","skin":"ui/dialog-bg.png","height":847,"sizeGrid":"57,54,16,15"},"child":[{"type":"Image","props":{"y":49,"x":34,"skin":"ui/my-award-title.png"}},{"type":"Image","props":{"y":729,"x":29,"skin":"ui/my-award-rule.png"}},{"type":"Image","props":{"y":664,"x":119,"var":"shareTo","skin":"ui/my-award-btn.png"}},{"type":"Label","props":{"y":5,"x":512,"width":50,"var":"btn_close_award","height":54}},{"type":"List","props":{"y":156,"x":36,"width":490,"var":"my_award_list","vScrollBarSkin":"ui/vscroll.png","spaceY":0,"repeatY":5,"height":478},"child":[{"type":"Box","props":{"name":"render"},"child":[{"type":"Label","props":{"width":490,"height":85,"bgColor":"#ffeac1"}},{"type":"Label","props":{"y":29,"x":24,"width":144,"text":"2017-12-07","name":"time","height":33,"fontSize":24,"color":"#f57747"}},{"type":"Label","props":{"y":29,"x":192,"width":144,"text":"XXXX蛋糕券","name":"name","height":33,"fontSize":24,"color":"#f57747"}},{"type":"Label","props":{"y":29,"x":380,"width":77,"text":"1","name":"num","height":33,"fontSize":24,"color":"#f57747","align":"center"}}]}]}]},{"type":"Image","props":{"y":307,"x":97,"visible":false,"var":"help_img","skin":"ui/help_img.png"}},{"type":"Image","props":{"y":877,"x":119,"visible":false,"var":"btn_help","skin":"ui/help_btn.png","mouseEnabled":true}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.IndexUI.uiView);
        }
    }
}

module ui {
    export class LoadingUI extends View {
		public loading:Laya.FrameAnimation;
		public bg:Laya.Label;
		public mxb:laya.display.Text;
		public progress:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":640,"height":1009},"child":[{"type":"Label","props":{"y":0,"x":0,"width":640,"var":"bg","height":1009,"bgColor":"#000000"}},{"type":"Text","props":{"y":484,"x":200,"width":209,"var":"mxb","text":"迈小步科技制作","height":74,"fontSize":24,"color":"#ffffff","align":"center"},"compId":4},{"type":"Text","props":{"y":403,"x":251,"width":108,"var":"progress","text":"10%","height":91,"fontSize":28,"color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":416,"x":304,"skin":"loading/loading.png","anchorY":0.5,"anchorX":0.5},"compId":6}],"animations":[{"nodes":[{"target":4,"keyframes":{"fontSize":[{"value":24,"tweenMethod":"linearNone","tween":true,"target":4,"key":"fontSize","index":0},{"value":24,"tweenMethod":"linearNone","tween":true,"target":4,"key":"fontSize","index":30}]}},{"target":6,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"rotation","index":0},{"value":360,"tweenMethod":"linearNone","tween":true,"target":6,"key":"rotation","index":30}]}}],"name":"loading","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.LoadingUI.uiView);
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

module ui {
    export class baseDialogUI extends Dialog {
		public confim:Laya.Button;
		public context:Laya.Label;
		public awardImg:Laya.Image;
		public txtImg:Laya.Image;

        public static  uiView:any ={"type":"Dialog","props":{"width":640,"height":1009},"child":[{"type":"Label","props":{"y":0,"width":640,"height":1009,"bgColor":"#060606","alpha":0.1}},{"type":"Image","props":{"y":304,"x":40,"width":560,"skin":"ui/dialog-bg-noclose.png","sizeGrid":"13,15,12,15","height":400},"child":[{"type":"Button","props":{"y":292,"x":75,"var":"confim","stateNum":1,"skin":"ui/btn_continue.png"}},{"type":"Label","props":{"y":74,"x":45,"width":469,"var":"context","height":44,"fontSize":30,"color":"#ff643c","align":"center"}},{"type":"Image","props":{"y":133,"x":208,"width":123,"var":"awardImg","height":141}},{"type":"Image","props":{"y":102,"x":60,"var":"txtImg"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.baseDialogUI.uiView);
        }
    }
}

module ui {
    export class inputMobileUI extends Dialog {
		public mobile_input:Laya.TextInput;
		public mobile_confim:Laya.Button;

        public static  uiView:any ={"type":"Dialog","props":{"width":640,"height":1009},"child":[{"type":"Label","props":{"y":0,"x":0,"width":640,"height":1009,"bgColor":"#060606","alpha":0.1}},{"type":"Image","props":{"y":320,"x":51,"width":537,"skin":"ui/dialog-bg-noclose.png","height":369,"sizeGrid":"13,15,12,15"}},{"type":"Image","props":{"y":575,"x":79,"skin":"ui/mobile_tips_txt.png"}},{"type":"TextInput","props":{"y":371,"x":88,"width":468,"var":"mobile_input","skin":"ui/input_bg.png","sizeGrid":"14,12,14,12","height":73}},{"type":"Button","props":{"y":474,"x":165,"var":"mobile_confim","stateNum":1,"skin":"ui/btn_ipt_ok.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.inputMobileUI.uiView);
        }
    }
}
