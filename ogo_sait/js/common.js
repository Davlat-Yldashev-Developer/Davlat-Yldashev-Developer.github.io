$(document).on('click','.select_block button', function(){
    $(this).toggleClass('active')
});
$(document).on('click','.tovar1_link__slider a img', function(){
    $(this).toggleClass('active')
});
$(document).on('click','.description_sort__item button', function(){
    $(this).addClass('active').siblings().removeClass('active')
});
$ (function() {
  $('.dop_info button') .click (function() {
    $('#description') .show();
    $('.dop_info button') .hide();
  })
});

$(function () {
  $(document).ready(function() {
    $('.description_tovar__slider').slick({
        arrows:false,
        dots:false,  
        slidesToShow:3,
        slidesToScroll:1,
        autoplaySpeed: 2000,
        speed: 500,
        infinite: false,
        cssEase: 'linear',
        responsive:[
        {
          breakpoint: 750,
          settings: {
            slidesToShow:2,
            dots:true,
          }
        }
        ]
      });
      $('.tovar1_price__slider').slick({
        arrows:false,
        dots:false,  
        slidesToShow:1,
        slidesToScroll:1,
        autoplaySpeed: 2000,
        speed: 500,
        infinite: false,
        asNavFor:".tovar1_price__min__slider",
   		   fade: true,
        cssEase: 'linear',
        responsive:[
        {
          breakpoint: 750,
          settings: {
            slidesToShow:1,
            dots:true,
          }
        }
        ]
      });
      $('.tovar1_price__min__slider').slick({
        arrows:true,
        dots:false,  
        slidesToShow:3,
        slidesToScroll:1,
        autoplaySpeed: 2000,
        speed: 500,
        infinite: false,
        vertical: true,
        asNavFor:".tovar1_price__slider",
        verticalSwiping: true,
        focusOnSelect: true,
        cssEase: 'linear',
      });
    });
  });


$(document).ready(function() {
  $('.burger_mob').click(function(){
        $('.left_menu').toggleClass('left_menu_active');
        $('body').toggleClass('fixed-page');
  });
});