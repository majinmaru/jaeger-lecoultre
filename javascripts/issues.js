$(document).ready(function(){
	$(".tab-list .tab").first().addClass('active');
	$(".tab-box").first().addClass('show');

	$(".tab-list .tab").click(function(e){
		e.preventDefault();
		var $currentIndex = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$(".tab-box").eq($currentIndex).addClass('show').siblings().removeClass('show');
	});

	function parallaxOne(){
		var jumboTop = $(".jumbotron-images").offset().top;
		var windowScroll = $(window).scrollTop();
		if (windowScroll > jumboTop*0.9){
			$(".jumbotron-images").find('img').css('transform', 'translateY(-' + windowScroll * 0.15 + 'px)');
		}
	}
	parallaxOne();

	function showIssuesBox(){
		var issuesBoxTop = $(".issues-box").offset().top;
		var windowScroll = $(window).scrollTop();
		if(windowScroll > issuesBoxTop*0.7) {
			$(".issues-box").addClass('show');
		}
	}
	$(".gototop").click(function(e){
		e.preventDefault();
		var tabTop = $(".content").offset().top;
		$('body, html').animate({
			scrollTop : tabTop
		}, 800)
	});
	
	$(window).scroll(function() {		
		parallaxOne();
		showIssuesBox();	
	});
});