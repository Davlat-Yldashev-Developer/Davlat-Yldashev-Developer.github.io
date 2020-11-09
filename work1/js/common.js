jQuery(($) => {
    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });
});

$(function () {
  $(document).ready(function() {
      $('.slider').slick({
        arrows:true,
        dots:false,  
        slidesToShow:1,
        asNavFor:".min_slider",
        slidesToScroll:1,
        autoplaySpeed: 2000,
        speed: 500,
        cssEase: 'linear'
      });
      $('.min_slider').slick({
        arrows:true,
        dots:false,  
        slidesToShow:7,
        asNavFor:".slider",
        slidesToScroll:1,
        autoplaySpeed: 2000,
        responsive:[
      {
        breakpoint: 1340,
        settings: {
          slidesToShow:6,
        }
      },{
        breakpoint: 1080,
        settings: {
          slidesToShow:5,
        }
      },{
        breakpoint: 950,
        settings: {
          slidesToShow:4,
        }
      },{
        breakpoint: 570,
        settings: {
          slidesToShow:3,
        }
      },
    ]
      });  
      $('.slider_contact').slick({
        arrows:true,
        dots:false,  
        slidesToShow:4,
        responsive:[
      {
        breakpoint: 1200,
        settings: {
          slidesToShow:3,
        }
      },{
        breakpoint: 700,
        settings: {
          slidesToShow:2,
        }
      },{
        breakpoint: 450,
        settings: {
          slidesToShow:1,
        }
      },
    ]
      });  
      $('.section3_content__slider').slick({
        arrows:true,
        dots:true,  
        slidesToShow:1,
      }); 
      $('.photo_modal__slider').slick({
        arrows:true,
        dots:false,  
        slidesToShow:2,
        responsive:[
      {
        breakpoint: 570,
        settings: {
          slidesToShow:1,
        }
      },
      ]
      }); 
    });
  });

$('.select_profile').click(function(event) {
    $('.menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
$(document).on('click','.box', function(){
    $(this).addClass('active').siblings().removeClass('active')
});

$ (function() {
   $('#btn__one') .ready (function() {
        $('.form2_button') .hide();
    })
    $('#box2') .click(function() {
        $('.form2_button') .show();
        $('.form1_button') .hide();
        $('.form_profile__text a') .hide();
    })
     $('#box1') .click(function() {
        $('.form2_button') .hide();
        $('.form1_button') .show();
        $('.form_profile__text a') .show();
    })
   
});