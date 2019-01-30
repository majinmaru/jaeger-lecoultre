$(document).ready(function(){
	
	$(".gototop").click(function(e){
		e.preventDefault();
		var headerTop = $(".header").offset().top;
		$('body, html').animate({
			scrollTop : headerTop
		}, 800)
	});
	function imageAppear(){
		var videoTop = $('.videobox').offset().top;
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