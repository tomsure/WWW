
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
    });

   //弹出窗
    $(function () {
	    $('.js-btn-warn').click(function(){
	       $('.js-modal-warn').addClass("modal-in");
	       $('.modal-overlay').addClass("modal-overlay-visible");
	    });
	    $('.js-modal-close').click(function(){
	       $('.modal').removeClass("modal-in");
	       $('.modal-overlay').removeClass("modal-overlay-visible");
	    });
    });
	
