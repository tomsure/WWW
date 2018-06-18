/**
 * LBS mTabs
 * Date: 2014-5-10
 * ===================================================
 * opts.mtab 	tabs外围容器/滑动事件对象(一个CSS选择器)
 * opts.mhead 	tabs标题容器/点击对象(一个CSS选择器)
 * opts.mcontent	tabs内容容器/滑动切换对象(一个CSS选择器) 
 * opts.index 	tabs索引(默认0) 指定显示哪个索引的标题、内容
 * opts.current  tabs当前项的类名(默认current)
 * ===================================================
**/
;(function(){
window.mTabs = function(opts){
	if(typeof opts === undefined) return;

	this.mtab = document.querySelector(opts.mtab);
	this.mhead = document.querySelector(opts.mhead);
	this.mcontent = document.querySelector(opts.mcontent);

	this.mheads = this.mhead.children;
	this.mcontents = this.mcontent.children;
	
	this.length = this.mheads.length;
	if(this.length < 1) return;
	if(opts.index > this.length-1) opts.index = this.length-1;
	this.index = this.oIndex = opts.index || 0;
	this.current = opts.current || 'current';
	this.touch = {};

	this.init();
}
mTabs.prototype = {
	init: function(opts){
		this.set();
		this.initset();
		this.bind();
	},
	initset: function(){
		for(var i = 0; i < this.length; i++){
			this.mheads[i].index = i;
			this.mheads[i].className = this.mheads[i].className.replace(this.current,'');
			this.mcontents[i].className = this.mcontents[i].className.replace(this.current,'');
		} 
		this.mheads[this.index].className += ' '+this.current;
		this.mcontents[this.index].className += ' '+this.current;
		//this.mcontent.style.webkitTransform = this.mcontent.style.transform = "translateX(" + (-this.index * this.width) + "px)";
		this.mcontent.style.webkitTransform = this.mcontent.style.transform = "translate3d(" + (-this.index * this.width) + "px,0,0)";
	},
	set: function(){
		this.width =  document.documentElement.clientWidth || document.body.clientWidth;
		this.mcontent.style.width = this.length * this.width + 'px';		
		for(var i = 0; i < this.length; i++) this.mcontents[i].style.width = this.width + 'px';
		//this.mcontent.style.webkitTransform = this.mcontent.style.transform = "translateX(" + (-this.index * this.width) + "px)";
		this.mcontent.style.webkitTransform = this.mcontent.style.transform = "translate3d(" + (-this.index * this.width) + "px,0,0)";
	},
	bind: function(){
		var _this = this;
		this.mtab.addEventListener("touchstart",function(e){
			_this.touchStart(e);
		}, false);
		this.mtab.addEventListener("touchmove",function(e){
			_this.touchMove(e);
		}, false);
		this.mtab.addEventListener("touchend",function(e){
			_this.touchEnd(e);
		}, false);
		this.mtab.addEventListener("touchcancel",function(e){
			_this.touchEnd(e);
		}, false);
		this.mhead.addEventListener("click",function(e){
			_this.touchClick(e);
		}, false);
		this.mcontent.addEventListener('webkitTransitionEnd',function(){
			_this.transitionEnd();
		}, false);
		window.addEventListener("resize", function(){
			setTimeout(function(){
				_this.set();
			},100);
		}, false);
		window.addEventListener("orientationchange",function(){
			setTimeout(function(){
				_this.set();
			},100);
		}, false);
	},
	touchStart: function(e){
		this.touch.x = e.touches[0].pageX;
		this.touch.y = e.touches[0].pageY;
		this.touch.time = Date.now();
		this.touch.disX = 0;
		this.touch.disY = 0;
		this.touch.fixed = '';
	},
	touchMove: function(e){
		if(this.touch.fixed === 'up') return;
		e.stopPropagation();
		if(e.touches.length > 1 || e.scale && e.scale !== 1) return;
		this.touch.disX = e.touches[0].pageX - this.touch.x;
		this.touch.disY = e.touches[0].pageY - this.touch.y;
		if(this.touch.fixed === ''){
			if( Math.abs(this.touch.disY) > Math.abs(this.touch.disX) ){
				this.touch.fixed = 'up';
			}else{
				this.touch.fixed = 'left';
			}
		}
		if(this.touch.fixed === 'left'){
			e.preventDefault();
			if( (this.index === 0 && this.touch.disX > 0) || (this.index === this.length-1 && this.touch.disX < 0) ) this.touch.disX /= 4;
			//this.mcontent.style.webkitTransform = this.mcontent.style.transform = "translateX(" + ( this.touch.disX - this.index * this.width ) + "px)";
			this.mcontent.style.webkitTransform = this.mcontent.style.transform = "translate3d(" + ( this.touch.disX - this.index * this.width ) + "px,0,0)";
		} 
	},
	touchEnd: function(e){	
		if(this.touch.fixed === 'left'){
			var _this = this, X = Math.abs(this.touch.disX);
			this.mcontent.style.webkitTransition = this.mcontent.style.transition = 'all 100ms';
			if( (Date.now() - this.touch.time > 100 && X > 10) || X > this.width/2 ){
				this.touch.time = Date.now();
				this.touch.disX > 0 ? this.index-- : this.index++;
				this.index < 0 && (this.index = 0);
				this.index > this.length - 1 && (this.index = this.length - 1);
				if(this.index === this.oIndex) this.mcontent.style.webkitTransition = this.mcontent.style.transition = 'all 300ms';
				if(this.index !== this.oIndex) this.replace();
			}
			//this.mcontent.style.webkitTransform = this.mcontent.style.transform = "translateX(" + (-this.index * this.width) + "px)";
			this.mcontent.style.webkitTransform = this.mcontent.style.transform = "translate3d(" + (-this.index * this.width) + "px,0,0)";
		}	
	},
	transitionEnd: function(){
		this.mcontent.style.webkitTransition = this.mcontent.style.transition = 'all 0ms';
	},
	touchClick: function(e){
		var target = e.target;
		if(target.nodeType === 1 && target.index !== undefined){
			if(target.index === this.index) return;
			e.preventDefault();
			e.stopPropagation();
			this.index = target.index;
			this.mcontent.style.webkitTransition = this.mcontent.style.transition = 'all 100ms';
			//this.mcontent.style.webkitTransform = this.mcontent.style.transform = "translateX(" + (-this.index * this.width) + "px)";
			this.mcontent.style.webkitTransform = this.mcontent.style.transform = "translate3d(" + (-this.index * this.width) + "px,0,0)";
			this.replace();
		}
	},
	replace: function(){
		this.mheads[this.index].className += ' '+this.current;
		this.mheads[this.oIndex].className = this.mheads[this.oIndex].className.replace(this.current,'').trim();
		this.mcontents[this.index].className += ' '+this.current;
		this.mcontents[this.oIndex].className = this.mcontents[this.oIndex].className.replace(this.current,'').trim();
		this.oIndex = this.index;
	}
}
}());