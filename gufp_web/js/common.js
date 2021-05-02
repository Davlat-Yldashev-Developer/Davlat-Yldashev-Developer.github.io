$(function () {
  $(document).ready(function() {
    $('.section1_slider').slick({
        arrows:true,
        dots:false,
        slidesToShow:7,
        slidesToScroll:1,
        variableWidth: true,
        infinite: false,
        cssEase: 'linear',
        focusOnSelect: true,
        asNavFor:".big_slider",
        responsive:[
        {
          breakpoint: 850,
          settings: {
            arrows:false,
          }
        }
        ]
      });
    $('.big_slider').slick({
        arrows:true,
        dots:false,
        slidesToShow:1,
        slidesToScroll:1,
        variableWidth: true,
        infinite: false,
        cssEase: 'linear',
        asNavFor:".section1_slider",
        responsive:[
        {
          breakpoint: 980,
          settings: {
            arrows:false,
          }
        }
        ]
      });
    $('.slider_photo').slick({
        arrows:false,
        dots:false,
        slidesToShow:3,
        slidesToScroll:1,
        variableWidth: true,
        infinite: false,
        initialSlide: 1,
        centerMode: true,
        centerPadding: '0',
        focusOnSelect: true,
        cssEase: 'linear',
      });
    $('.news').slick({
        responsive: [
        {
          breakpoint: 100000,
          settings: "unslick"
        },
        {
          breakpoint: 980,
          settings: {
            arrows:false,
            dots:false,
            slidesToShow:2,
            slidesToScroll:1,
            infinite: false,
            cssEase: 'linear',
            variableWidth: true,
          },
        },{
          breakpoint: 660,
          settings: {
            arrows:false,
            dots:false,
            slidesToShow:1,
            slidesToScroll:1,
            infinite: false,
            cssEase: 'linear',
            variableWidth: true,
          },
        }
        ]
      });
    });
  });


$(document).ready(function() {
  $('.burger_menu').click(function(){
        $('.burger_menu').toggleClass('burger_form');
        $('.burger_content').toggleClass('open');
        $('body').toggleClass('fixed-page');
  });
  $('.dop_text').click(function(){
        $('.hide_text').toggleClass('showe');
        $('body').toggleClass('fixed-page');
  });
  $('.dop_text2').click(function(){
        $('.hide_text2').toggleClass('showe2');
        $('body').toggleClass('fixed-page');
  });
});

$(document).ready(function() {
  $('#text').click(function() {
    var val = $('#input').val();
    if(val != '') {
        if(val.length >= 10) {
          $('#valid').text('');
        } else {
          $('#valid').text('Введите телефон в формате + 7 (___) ___ - __ - __');
          $('.phone_focus').focus();
        }
    } else {
      $('#valid').text('Введите телефон в формате + 7 (___) ___ - __ - __');
    }
  });
});

