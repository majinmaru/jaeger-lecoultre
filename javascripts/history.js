$(document).ready(function(){
	/*
	function historyCard(){
		var historyCard = $(".history-content__card");
		var scrollTop = $(window).scrollTop();
		var i;
		
		for(var i = 0; i < historyCard.length-1; i++){
			var historyCardTop = historyCard.eq(i).offset().top;
			if(scrollTop > historyCardTop*0.7) {
				historyCard.eq(i).addClass('appear');
			}
		}		
	}
	*/
     
	new WOW().init();

	$(window).scroll(function() {		
		//historyCard();
	});
	$(".gototop").click(function(e){
		e.preventDefault();
		var headerTop = $(".header").offset().top;
		$('body, html').animate({
			scrollTop : headerTop
		}, 800)
	});
});