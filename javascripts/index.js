$(document).ready(function(){
  
  $(".nav-logo a").find('img').attr('src', 'images/common/fulllogo.svg');
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
  });
  
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