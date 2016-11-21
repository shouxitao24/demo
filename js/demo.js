$(function() {
	/**
	 * 创建第一个萤火虫对象
	 * */
	
		var fireworm = new Object();
		//对象的element属性
		fireworm.element = $('<img src="img/1.jpg"/>');
		
		//默认出来的初始位置
	//	fireworm.point = {
	//		pointX:100,
	//		pointY:100
	//	};
		
		//每个萤火虫出来的随机初始位置
		fireworm.showPoint = function(){
			var x = Math.random()*($("div").width()-18);
			var y = Math.random()*($("div").height()-18);
			var point = {
				pointX:x,
				pointY:y
			};
			return point;
		}
		
		//萤火虫出现
		fireworm.show = function(){
			this.element.css({"top":this.showPoint().pointY+"px","left":this.showPoint().pointX+"px"});
			$("div").append(this.element);
		}
		
		//萤火虫的随机速度
		fireworm.speed = function(){
			var speedRunTime = Math.round(Math.random()*10)*1000;
			return speedRunTime;
		}
		
		//萤火虫的运动
		fireworm.move = function(){
			var _self = this;
			this.element.animate({"top":this.showPoint().pointY+"px","left":this.showPoint().pointX+"px"},this.speed(),function(){
				_self.move();
			});
		}
		
		//调用显示和运动函数
		fireworm.show();
		fireworm.move();
		
		/**
		 * 再创建一个萤火虫
		 * */
		var fireworm1 = new Object();
		fireworm1.element = $('<img src="img/1.jpg"/>');
	//	fireworm1.point = {
	//		pointX:100,
	//		pointY:100
	//	}
		fireworm1.showPoint = function(){
			var x = Math.random()*($("div").width()-18);
			var y = Math.random()*($("div").height()-18);
			var point = {
				pointX:x,
				pointY:y
			}
			return point;
		}
		fireworm1.speed = function(){
			var speedRunTime = Math.round(Math.random()*10)*1000;
			return speedRunTime;
		}
		
		fireworm1.show = function(){
			this.element.css({"top":this.showPoint().pointY+"px","left":this.showPoint().pointX+"px"});
			$("div").append(this.element);
		}
		
		fireworm1.move = function(){
			var _self = this;
			this.element.animate({"top":this.showPoint().pointY+"px","left":this.showPoint().pointX+"px"},this.speed(),function(){
				_self.move();
			});
		}
		
		fireworm1.show();
		fireworm1.move();
});