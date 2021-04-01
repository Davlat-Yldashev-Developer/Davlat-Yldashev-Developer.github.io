
  $(document).ready(function() {
    $('.min_slider').slick({
    arrows:true,
    dots:true,  
    slidesToShow:1,
  });
    $('.slider').slick({
    arrows:true,
    dots:false,  
    slidesToShow:3,
    infinite: false,
  });
    $('.offers_right__slider').slick({
    arrows:false,
    dots:false,  
    slidesToShow:1,
    infinite: false,
    speed: 500,
  	fade: true,
  	cssEase: 'linear',
  	asNavFor: '.offer_text__slider',
  });
    $('.offer_text__slider').slick({
    arrows:true,
    dots:false,  
    asNavFor: '.offers_right__slider',
    slidesToShow:1,
    infinite: false,
    speed: 500,
  	fade: true,
  	cssEase: 'linear',
  });
    $('.services_link__slider').slick({
    arrows:true,
    dots:false,  
    slidesToShow:4,
    infinite: false,
  });
});