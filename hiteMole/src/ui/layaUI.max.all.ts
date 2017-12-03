
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class GameUI extends View {
		public timeBar:Laya.ProgressBar;
		public scoreNums:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"x":0,"width":800,"height":600},"child":[{"type":"Image","props":{"y":25,"x":25,"skin":"ui/back.png"}},{"type":"Box","props":{"y":195,"x":157,"name":"item0"},"child":[{"type":"Image","props":{"x":7,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":14,"x":8,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":85,"skin":"ui/mask-01.png"}},{"type":"Image","props":{"y":18,"x":66,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":191,"x":345,"name":"item1"},"child":[{"type":"Image","props":{"x":7,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":14,"x":8,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":85,"skin":"ui/mask-02.png"}},{"type":"Image","props":{"y":18,"x":66,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":196,"x":541,"name":"item2"},"child":[{"type":"Image","props":{"x":7,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":14,"x":8,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":85,"skin":"ui/mask-03.png"}},{"type":"Image","props":{"y":18,"x":66,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":280,"x":127,"name":"item3"},"child":[{"type":"Image","props":{"x":7,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":14,"x":8,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":85,"skin":"ui/mask-04.png"}},{"type":"Image","props":{"y":18,"x":66,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":286,"x":347,"name":"item4"},"child":[{"type":"Image","props":{"x":7,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":14,"x":8,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":85,"skin":"ui/mask-05.png"}},{"type":"Image","props":{"y":18,"x":66,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":282,"x":545,"name":"item5"},"child":[{"type":"Image","props":{"x":7,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":14,"x":8,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":85,"skin":"ui/mask-06.png"}},{"type":"Image","props":{"y":18,"x":66,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":381,"x":122,"name":"item6"},"child":[{"type":"Image","props":{"x":7,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":14,"x":8,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":85,"skin":"ui/mask-07.png"}},{"type":"Image","props":{"y":18,"x":66,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":387,"x":347,"name":"item7"},"child":[{"type":"Image","props":{"x":7,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":14,"x":8,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":85,"skin":"ui/mask-08.png"}},{"type":"Image","props":{"y":18,"x":66,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":386,"x":565,"name":"item8"},"child":[{"type":"Image","props":{"x":7,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":14,"x":8,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":85,"skin":"ui/mask-09.png"}},{"type":"Image","props":{"y":18,"x":66,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"ProgressBar","props":{"y":8,"x":7,"var":"timeBar","skin":"ui/progress_time.png"}},{"type":"Box","props":{"y":45,"x":18,"var":"scoreNums"},"child":[{"type":"Clip","props":{"skin":"ui/clip_number.png","name":"item0","clipX":10}},{"type":"Clip","props":{"x":18,"skin":"ui/clip_number.png","name":"item1","clipX":10}},{"type":"Clip","props":{"x":36,"skin":"ui/clip_number.png","name":"item2","clipX":10}},{"type":"Clip","props":{"x":54,"skin":"ui/clip_number.png","name":"item3","clipX":10}},{"type":"Clip","props":{"x":72,"skin":"ui/clip_number.png","name":"item4","clipX":10}},{"type":"Clip","props":{"x":90,"skin":"ui/clip_number.png","name":"item5","clipX":10}},{"type":"Clip","props":{"x":108,"skin":"ui/clip_number.png","name":"item6","clipX":10}},{"type":"Clip","props":{"x":126,"skin":"ui/clip_number.png","name":"item7","clipX":10}},{"type":"Clip","props":{"x":144,"skin":"ui/clip_number.png","name":"item8","clipX":10}},{"type":"Clip","props":{"x":162,"skin":"ui/clip_number.png","name":"item9","clipX":10}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameUI.uiView);
        }
    }
}

module ui {
    export class GameOverUI extends View {
		public restartBtn:Laya.Button;
		public scoreNums:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":500,"height":400},"child":[{"type":"Image","props":{"y":0,"x":0,"width":500,"skin":"ui/overBg.png","sizeGrid":"14,19,14,16","height":400}},{"type":"Image","props":{"y":57,"x":39,"skin":"ui/total Score.png"}},{"type":"Button","props":{"y":292,"x":161,"var":"restartBtn","stateNum":2,"skin":"ui/btn_restart.png"}},{"type":"Box","props":{"y":188,"x":160,"var":"scoreNums"},"child":[{"type":"Clip","props":{"skin":"ui/clip_number.png","name":"item0","clipX":10}},{"type":"Clip","props":{"x":18,"skin":"ui/clip_number.png","name":"item1","clipX":10}},{"type":"Clip","props":{"x":36,"skin":"ui/clip_number.png","name":"item2","clipX":10}},{"type":"Clip","props":{"x":54,"skin":"ui/clip_number.png","name":"item3","clipX":10}},{"type":"Clip","props":{"x":72,"skin":"ui/clip_number.png","name":"item4","clipX":10}},{"type":"Clip","props":{"x":90,"skin":"ui/clip_number.png","name":"item5","clipX":10}},{"type":"Clip","props":{"x":108,"skin":"ui/clip_number.png","name":"item6","clipX":10}},{"type":"Clip","props":{"x":126,"skin":"ui/clip_number.png","name":"item7","clipX":10}},{"type":"Clip","props":{"x":144,"skin":"ui/clip_number.png","name":"item8","clipX":10}},{"type":"Clip","props":{"x":162,"skin":"ui/clip_number.png","name":"item9","clipX":10}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameOverUI.uiView);
        }
    }
}

module ui {
    export class GameStartUI extends View {
		public startBtn:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":55,"x":38,"skin":"ui/help.png"}},{"type":"Button","props":{"y":428,"x":311,"var":"startBtn","stateNum":2,"skin":"ui/btn_start.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameStartUI.uiView);
        }
    }
}

module ui {
    export class HammerUI extends View {
		public hit:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":100,"height":100},"child":[{"type":"Image","props":{"y":64,"x":71,"width":98,"skin":"ui/hammer.png","rotation":20,"pivotY":52,"pivotX":57,"height":77},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"y":[{"value":64,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0},{"value":66,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":1},{"value":64,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":5}],"x":[{"value":71,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":63,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":1},{"value":71,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":5}],"rotation":[{"value":20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":0},{"value":-20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":1},{"value":20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":5}]}}],"name":"hit","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.HammerUI.uiView);
        }
    }
}
