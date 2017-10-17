   // 微信分享
//    var webLocaHref = location.href;
//	document.cookie = "webLocaHref="+encodeURIComponent(location.href.split('#')[0])+";path=/;domain=.sz189.cn"
//	jQuery.ajax("https://shop.sz189.cn/ajax/signAction.shtml", { 
//		dataType: "jsonp", 
//        jsonp: 'jsoncallback',
//		async:false, 
//		success: function(signdis){  
//				 wx.config({
//				  debug: false,
//				  appId:'wx03b602a6b61199b9',
//				  timestamp:signdis.timestamp,
//				  nonceStr:signdis.nonceStr,
//				  signature:signdis.signature,
//				  jsApiList: [
//					'checkJsApi',
//					'onMenuShareTimeline',
//					'onMenuShareAppMessage',
//					'onMenuShareQQ',
//					'onMenuShareWeibo',
//					'hideMenuItems',
//					'showMenuItems',
//					'hideAllNonBaseMenuItem',
//					'showAllNonBaseMenuItem',
//					'translateVoice',
//					'startRecord',
//					'stopRecord',
//					'onRecordEnd',
//					'playVoice',
//					'pauseVoice',
//					'stopVoice',
//					'uploadVoice',
//					'downloadVoice',
//					'chooseImage',
//					'previewImage',
//					'uploadImage',
//					'downloadImage',
//					'getNetworkType',
//					'openLocation',
//					'getLocation',
//					'hideOptionMenu',
//					'showOptionMenu',
//					'closeWindow',
//					'scanQRCode',
//					'chooseWXPay',
//					'openProductSpecificView',
//					'addCard',
//					'chooseCard',
//					'openCard'
//				  ]
//			  });
//	  
//	    },
//	    error: function(msg){ 
//	     
//	    }
//	});
//	
// 	function _ShareFriend() {
//			 wx.onMenuShareAppMessage({
//				 title: '',
//				 desc: '',
//				 link: '',
//				 imgUrl: '' 
//			   });
//			 wx.onMenuShareTimeline({
//				 title: '',
//				 link: '',
//				 imgUrl: '' 
//			   });
//		}
// 
//	wx.ready(function(){
//	       _ShareFriend();     
//	});
	
   //底部说明判断
   $(function(){
	    var height=window.screen.height;
		if( height > 440){
	       $('.js-bottom-warn').addClass('position-bot')
		}
		else{
	       $('.js-bottom-warn').removeClass('position-bot')
		}
   });
   
   //tab 切换
    $(function () {
        $(".tab-link").click(function () {
	        $(this).addClass('active').siblings(".tab-link").removeClass('active');
        });
	    $('#tab1').click(function(){
	       $('.tab1').show().siblings(".tab").hide();
	    });
	    $('#tab2').click(function(){
	       $('.tab2').show().siblings(".tab").hide();
	    });
	    $('#tab3').click(function(){
	       $('.tab3').show().siblings(".tab").hide();
	    });
	    $('#tab4').click(function(){
	       $('.tab4').show().siblings(".tab").hide();
	    });
	    $('#tab5').click(function(){
	       $('.tab5').show().siblings(".tab").hide();
	    });
	    $('#tab6').click(function(){
	       $('.tab6').show().siblings(".tab").hide();
	    });
    });
   
   //下拉列表
    $(function () {
        $(".js-pull-down").click(function () {
			$(".js-pull-down-block").slideToggle("slow"); 
			$(this).toggleClass('pull-down-show'); return false; 
	    });
    });
	
   //排序下拉列表
    $(function () {
	    $('#js-btn-sort').click(function(){
	       $('#js-btn-sort').toggleClass("button-sort-active");
	       $('.js-sort-content').toggleClass("sort-content-in");
	    });
    });
	
   //搜索
    $(function () {
	    $('.js-btn-search').click(function(){
	       $('.searchbar').addClass('searchbar-active');
	    });
	    $('.js-btn-searchCancel').click(function(){
	       $('.searchbar').removeClass('searchbar-active');
	    });
    });
	
   //loading
    $(function () {
	    $('.js-btn-loading').click(function(){
	       $('.js-loading-content').show();
	    });
    });
	
   //modal 弹出窗
    $(function () {
	    $('.js-btn-modal').click(function(){
	       $('.modal').addClass("modal-in");
	       $('.modal-overlay').addClass("modal-overlay-visible");
	    });
	    $('.js-modal-close').click(function(){
	       $('.modal').removeClass("modal-in");
	       $('.modal-overlay').removeClass("modal-overlay-visible");
	    });
    });
   //加载中弹出窗
    $(function () {
	    $('.js-btn-loadModal').click(function(){
	       $('.js-modal-loading').addClass("modal-in");
	       $('.modal-overlay').addClass("modal-overlay-visible");
	    });
    });
	//关注弹出窗
    $(function () {
	    $('.js-btn-attention').click(function(){
	       $('.js-modal-attention').addClass("modal-in");
	       $('.modal-overlay').addClass("modal-overlay-visible");
	    });
    });
	//分享弹出窗
    $(function () {
	    $('.js-btn-share').click(function(){
	       $('.js-modal-share').addClass("modal-in");
	       $('.modal-overlay').addClass("modal-overlay-visible");
	    });
	    $('.js-modal-share').click(function(){
	       $('.modal').removeClass("modal-in");
	       $('.modal-overlay').removeClass("modal-overlay-visible");
	    });
    });
	//选择日期弹出窗
    $(function () {
	    $('.js-btn-date').click(function(){
	       $('.js-modal-date').addClass("modal-in");
	       $('.modal-overlay').addClass("modal-overlay-visible");
	    });
    });
   //填写弹出窗
    $(function () {
	    $('.js-btn-write').click(function(){
	       $('.js-modal-write').addClass("modal-in");
	       $('.modal-overlay').addClass("modal-overlay-visible");
	    });
    });
   //提示弹出窗
    $(function () {
	    $('.js-btn-warn').click(function(){
	       $('.js-modal-warn').addClass("modal-in");
	       $('.modal-overlay').addClass("modal-overlay-visible");
	    });
    });
   //温馨提示弹出窗
    $(function () {
	    $('.js-btn-prompt').click(function(){
	       $('.js-modal-prompt').addClass("modal-in");
	       $('.modal-overlay').addClass("modal-overlay-visible");
	    });
    });
   //温馨提示（带序号）弹出窗
    $(function () {
	    $('.js-btn-promptUl').click(function(){
	       $('.js-modal-promptUl').addClass("modal-in");
	       $('.modal-overlay').addClass("modal-overlay-visible");
	    });
    });
   //协议弹出窗
    $(function () {
	    $('.js-btn-agreement').click(function(){
	       $('.js-modal-agreement').addClass("modal-in");
	       $('.modal-overlay').addClass("modal-overlay-visible");
	    });
    });
	

	
   //提交显示结果页面
    $(function () {
	    $('#js-btn-submit').click(function(){
	       $('.js-submit-result').show();
	       $('.js-header,.js-submit-content').hide();
	    });
    });
   
