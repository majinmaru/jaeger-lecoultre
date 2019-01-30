$(document).ready(function(){
  $(".nav-logo a").find('img').attr('src', 'images/common/fulllogo.svg');

  function imageSetting() {
    var windowWidth = $(window).width();
    var mainSliderItem = $(".main-slider").find(".item");
    if(windowWidth < 811) {
      $(mainSliderItem).eq(0).prepend('<div class="slider-image"><img src="images/index/mobile/slide-0.jpg"/></div>');
      $(mainSliderItem).eq(1).prepend('<div class="slider-image"><img src="images/index/mobile/slide-1.jpg"/></div>');
      $(mainSliderItem).eq(2).prepend('<div class="slider-image"><img src="images/index/mobile/slide-2.jpg"/></div>');
      $(mainSliderItem).eq(3).prepend('<div class="slider-image"><img src="images/index/mobile/slide-3.jpg"/></div>');
      $(mainSliderItem).eq(4).prepend('<div class="slider-image"><img src="images/index/mobile/slide-4.jpg"/></div>');
      $(mainSliderItem).eq(5).prepend('<div class="slider-image"><img src="images/index/mobile/slide-5.jpg"/></div>');
      $(mainSliderItem).eq(6).prepend('<div class="slider-image"><img src="images/index/mobile/slide-6.jpg"/></div>');
    }
  }
  imageSetting();
  
  var slideWrapper = $(".main-slider");
    slideWrapper.slick({
    autoplay: true,
    autoplaySpeed:7000,
    speed:500,
    arrows:false,
    dots: true,
    swipe:true,
    fade: true,
    zIndex: 1,
    pauseOnHover: false
  });

/*
  function listAppear(){
  	var sectionTwoTop = $(".two").offset().top;
  	var reactToTop =  sectionTwoTop*0.8;
  	var scrollTop = $(window).scrollTop(); 
  	if(scrollTop > reactToTop) {
			$(".service-list").addClass('appear');			
		}	
  }
  $(window).scroll(function() {
		listAppear();
	});
  */
  $(window).resize(function() {
    imageSetting();
  })
   /*
  document.querySelectorAll('video').forEach(function(video) {
    video.play();
  });

  document.addEventListener("mousemove", function(event) {
    const x = event.pageX;
    const y = event.pageY;
    const xCenter = window.innerWidth / 2;
    const yCenter = window.innerHeight / 2;
    const body = document.querySelector("body");
    const cursor = document.querySelector("#cursor");
    cursor.style.top = y - 24 + "px";
    if (x < xCenter * .5) {
      cursor.style.transform = "rotate(0deg)";
      cursor.style.left = x + "px";
      cursor.style.display = "block";
      body.style.cursor = "none";
    } else if (x > xCenter * 1.5) {
      cursor.style.display = "block";
      cursor.style.left = x - 48 + "px";
      body.style.cursor = "none";
    }
    else {
      cursor.style.transform = "rotate(180deg)";
      cursor.style.display = "none";
      body.style.cursor = "default";
    }
  })
 
  document.addEventListener("click", function(event) {
    const x = event.pageX;
    const y = event.pageY;
    const xCenter = window.innerWidth / 2;
    const yCenter = window.innerHeight / 2;
    if (x < xCenter * .5) {
      $(".main-slider").slick('slickPrev');
    } else if (x > xCenter * 1.5) {
      $(".main-slider").slick('slickNext');
    }
    else {
      return;
    }
  });
  */
});