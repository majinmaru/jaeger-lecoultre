$(document).ready(function(){
	$(".watch-tab").first().addClass('active');
	$(".watch-all").first().addClass('show');

	$(".watch-tab").click(function(e){
		e.preventDefault();
		var $currentIndex = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$(".watch-all").eq($currentIndex).addClass('show').siblings().removeClass('show');
	});
  //enable scrollY
    $(".body__image-wrapper").on('mousewheel',function(e){      
      var wheelDelta = e.originalEvent.wheelDelta;
      if(wheelDelta > 0){     
        $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
      }else{    
        $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
      }
      e.preventDefault();
    });
	$(".gototop").click(function(e){
		e.preventDefault();
		var tabTop = $(".content").offset().top;
		$('body, html').animate({
			scrollTop : tabTop
		}, 800)
	});
});