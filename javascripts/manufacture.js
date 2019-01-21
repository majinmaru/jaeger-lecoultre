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
});