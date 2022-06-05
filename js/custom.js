$(function(){
    new WOW().init();
    
	$('#banner-wrapper').slick({
  infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.banner-slider-icon1 .fa-arrow-left '),
        nextArrow: $('.banner-slider-icon2 .fa-arrow-right '),
        fade: true,
		dots: false,
        cssEase: 'linear',
		
  
});
    $('.client-text-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  arrows:false,
  dots: true,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        
      }
    },
	{
      breakpoint: 999,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
});
    
    
    //sticky menu and back-to-top start
	var $dis = $(".navbar-light").offset().top;
	$(window).scroll(function(){
		
		var $scrolling = $(this).scrollTop();
		
		if ($scrolling >= 1){
			
			$(".navbar-light").addClass("sticky-menu");
			
		}
		
		else{
			$(".navbar-light").removeClass("sticky-menu");
		}
		
		if ($scrolling >= 200){
			
			$(".back-to-top").fadeIn();
			
		}
		
		else{
			$(".back-to-top").fadeOut();
		}
		
		});
		
		$(".back-to-top") .click(function(){
			$("html,body") .animate({
				
				scrollTop:0
				
			}, 1500);
		});
		
	
	
	
	//sticky menu and back-to-top end
    
    
    
    
})