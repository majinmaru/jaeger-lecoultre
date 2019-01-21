$(document).ready(function(){
	var HeaderTop = $(".header").offset().top;
	$(".tab-list .tab").first().addClass('active');
	$(".tab-box").first().addClass('show');

	$(".tab-list .tab").click(function(e){
		e.preventDefault();
		var $currentIndex = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$(".tab-box").eq($currentIndex).addClass('show').siblings().removeClass('show');
	});

	$(".gototop").click(function(e){
		$(window).scrollTop(HeaderTop);
	});
});