$(document).ready(function(){
	$(".tab-list .tab").first().addClass('active');
	$(".tab-box").first().addClass('show');
	var interviewTab = $("#box-2 ").find(".video-tab");

	interviewTab.first().addClass('video-show');

	$(".tab-list .tab").click(function(e){
		e.preventDefault();
		var $currentIndex = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$(".tab-box").eq($currentIndex).addClass('show').siblings().removeClass('show');
	});

	interviewTab.click(function(e){
		e.preventDefault();
		var $currentIndex = $(this).index();
		$(this).addClass('video-show').siblings().removeClass('video-show');
	});

	$(".gototop").click(function(e){
		e.preventDefault();
		var tabTop = $(".content").offset().top;
		$('body, html').animate({
			scrollTop : tabTop
		}, 800)
	});
	function imageAppear(){
		var videoTop = $('.videobox').offset().top;
		console.log(videoTop);
		var scrollTop = $(window).scrollTop();
		if(scrollTop > videoTop) {
			$('.video-text-image').children('img').first().addClass('appear');
			setTimeout(function(){
				$('.video-text-image').children('img').last().addClass('appear');
			}, 500);
		}
	}
	$(window).scroll(function() {
		imageAppear();
	});
});