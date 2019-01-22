$(document).ready(function(){
	$(".watch-tab").first().addClass('active');
	$(".watch-all").first().addClass('show');

	$(".watch-tab").click(function(e){
		e.preventDefault();
		var $currentIndex = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$(".watch-all").eq($currentIndex).addClass('show').siblings().removeClass('show');
	});

	$(".gototop").click(function(e){
		e.preventDefault();
		var tabTop = $(".content").offset().top;
		$('body, html').animate({
			scrollTop : tabTop
		}, 800)
	});
});