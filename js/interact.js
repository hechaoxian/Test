$(function(){
	$("body").append("<div class='back-top'><img src='images/backtop.png' /></div>");
	window.onscroll = function() {
	    var t = document.documentElement.scrollTop || document.body.scrollTop;
	    if (t >= 50) {
	        $(".back-top").show();
	    } else {
	        $(".back-top").hide();
	    }
	}
	$("body").on('click','.back-top',function(){
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
	})
	if($(".swiper-container").length>0){
		$(".swiper-container").swiper({
			loop: true,
			autoHeight: true,
			autoplay: 2000,
			autoplayDisableOnInteraction: false
		});
	}
})