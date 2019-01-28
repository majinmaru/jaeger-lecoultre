$(document).ready(function(){	

	function showIssuesBox(){
		var issuesBox = $(".issues-box");
		var scrollTop = $(window).scrollTop();
		var i;
		
		for(var i = 0; i < 2; i++){
			var issuesBoxTop = issuesBox.eq(i).offset().top;
			if(scrollTop > issuesBoxTop*0.6) {
				issuesBox.eq(i).addClass('show');
			}
		}
		for(var i = 2; i < 4; i++){
			var issuesBoxTop = issuesBox.eq(i).offset().top;
			if(scrollTop > issuesBoxTop*0.75) {
				issuesBox.eq(i).addClass('show');
			}
		}
		for(var i = 4; i < issuesBox.length; i++){
			var issuesBoxTop = issuesBox.eq(i).offset().top;
			if(scrollTop > issuesBoxTop*0.85) {
				issuesBox.eq(i).addClass('show');
			}
		}
	}
	
	/*	
	function showIssuesBox(){
		var issuesBoxTop = $(".issues-box").offset().top;
		var windowScroll = $(window).scrollTop();
		if(windowScroll > issuesBoxTop*0.7) {
			$(".issues-box").addClass('show');
		}
	}
	*/
	
	$(window).scroll(function() {	
		showIssuesBox();	
	});
});