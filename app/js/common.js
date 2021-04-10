
  $('.section2_page4__menu').addClass('original').clone().insertAfter('.section2_page4__menu').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();

scrollIntervalID = setInterval(stickIt, 10);


function stickIt() {

  var orgElementPos = $('.original').offset();
  orgElementTop = orgElementPos.top;               

  if ($(window).scrollTop() >= (orgElementTop)) {
    // scrolled past the original position; now only show the cloned, sticky element.

    // Cloned element should always have same left position and width as original element.     
    orgElement = $('.original');
    coordsOrgElement = orgElement.offset();
    leftOrgElement = coordsOrgElement.left;  
    widthOrgElement = orgElement.css('width');
    $('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();
    $('.original').css('visibility','hidden');
  } else {
    // not scrolled past the menu; only show the original menu.
    $('.cloned').hide();
    $('.original').css('visibility','visible');
  }
}



$(document).on('click','.section1_page4__min__slider__item', function(){
    $(this).addClass('active').siblings().removeClass('active')
});


 $ (function() {
    $('#btn__one') .ready (function() {
        $('.burger_menu') .hide();
        $('.form__tel__item') .hide()
        $('.video__form') .hide();
        $('.search__form') .hide();
    })
    $('.burger') .click(function() {
        $('.burger2') .show();
        $('.burger_menu') .show();
        $('.burger') .hide();
    })
    $('.burger2') .click(function() {
        $('.burger') .show();
        $('.burger2') .hide();
        $('.burger_menu') .hide();
    })
    $('.item_btn1') .click(function() {
        $('.item_btn2') .show();
        $('.alicenty_content2, .alicenty_content') .show();
        $('.item_btn1') .hide();
    })
    $('.item_btn2') .click(function() {
        $('.item_btn1') .show();
        $('.alicenty_content2, .alicenty_content') .hide();
        $('.item_btn2') .hide();
    })
    $('.button1_orange') .click(function() {
        $('.alicente_team__item2') .show();
    })
    $('.button2_orange') .click(function() {
        $('.alicente_team__item_two') .show();
    })
    $('.button3_orange') .click(function() {
        $('.alicente_team__item3') .show();
    })
    $('.button4_orange') .click(function() {
        $('.alicente_team__item4') .show();
    })
    $('.button5_orange') .click(function() {
        $('.alicente_team__item5') .show();
    })
    $('.button6_orange') .click(function() {
        $('.alicente_team__item6') .show();
    })
    $('.button7_orange') .click(function() {
        $('.alicente_team__item7') .show();
    })
    $('.button8_orange') .click(function() {
        $('.alicente_team__item8') .show();
    })
    $('.button9_orange') .click(function() {
        $('.alicente_team__item9') .show();
    })
    $('.button10_orange') .click(function() {
        $('.alicente_team__item10') .show();
    })
    $('.button11_orange') .click(function() {
        $('.alicente_team__item11') .show();
    })
    $('.button12_orange') .click(function() {
        $('.alicente_team__item12') .show();
    })
    $('.button13_orange') .click(function() {
        $('.alicente_team__item13') .show();
    })
    $('.button14_orange') .click(function() {
        $('.alicente_team__item14') .show();
    })
    $('.button15_orange') .click(function() {
        $('.alicente_team__item15') .show();
    })
    $('.button16_orange') .click(function() {
        $('.alicente_team__item16') .show();
    })
    $('.button17_orange') .click(function() {
        $('.alicente_team__item17') .show();
    })
    $('.button18_orange') .click(function() {
        $('.alicente_team__item18') .show();
    })
    $('.button19_orange') .click(function() {
        $('.alicente_team__item19') .show();
    })
    $('.button20_orange') .click(function() {
        $('.alicente_team__item20') .show();
    })
    $('.button21_orange') .click(function() {
        $('.alicente_team__item21') .show();
    })
    $('.button22_orange') .click(function() {
        $('.alicente_team__item22') .show();
    })

    $('.button1_exit') .click(function() {
        $('.alicente_team__item2') .hide();
    })
    $('.button2_exit') .click(function() {
        $('.alicente_team__item_two') .hide();
    })
    $('.button5_exit') .click(function() {
        $('.alicente_team__item5') .hide();
    })
    $('.button6_exit') .click(function() {
        $('.alicente_team__item6') .hide();
    })
    $('.button7_exit') .click(function() {
        $('.alicente_team__item7') .hide();
    })
    $('.button8_exit') .click(function() {
        $('.alicente_team__item8') .hide();
    })
    $('.button9_exit') .click(function() {
        $('.alicente_team__item9') .hide();
    })
    $('.button10_exit') .click(function() {
        $('.alicente_team__item10') .hide();
    })
    $('.button11_exit') .click(function() {
        $('.alicente_team__item11') .hide();
    })
    $('.button4_exit') .click(function() {
        $('.alicente_team__item4') .hide();
    })
    $('.button12_exit') .click(function() {
        $('.alicente_team__item12') .hide();
    })
    $('.button13_exit') .click(function() {
        $('.alicente_team__item13') .hide();
    })
    $('.button3_exit') .click(function() {
        $('.alicente_team__item3') .hide();
    })
    $('.button14_exit') .click(function() {
        $('.alicente_team__item14') .hide();
    })
    $('.button15_exit') .click(function() {
        $('.alicente_team__item15') .hide();
    })
    $('.button16_exit') .click(function() {
        $('.alicente_team__item16') .hide();
    })
    $('.button17_exit') .click(function() {
        $('.alicente_team__item17') .hide();
    })
    $('.button18_exit') .click(function() {
        $('.alicente_team__item18') .hide();
    })
    $('.button19_exit') .click(function() {
        $('.alicente_team__item19') .hide();
    })
    $('.button20_exit') .click(function() {
        $('.alicente_team__item20') .hide();
    })
    $('.button21_exit') .click(function() {
        $('.alicente_team__item21') .hide();
    })
    $('.button22_exit') .click(function() {
        $('.alicente_team__item22') .hide();
    })

   
});

$('.burger_menu__item__content button').click(function(event) {
    $('.burger_menu__item__content__link').toggleClass('active');
    $('body').toggleClass('lock');
  });

$('.burger_menu__item__content2 button').click(function(event) {
    $('.burger_menu__item__content__link2').toggleClass('active');
    $('body').toggleClass('lock');
  });
$('.burger_menu__item__content3 button').click(function(event) {
    $('.burger_menu__item__content__link3').toggleClass('active');
    $('body').toggleClass('lock');
  });

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
    responsive:[
      {
        breakpoint: 900,
        settings: {
          slidesToShow:2,
        }
      },{
        breakpoint: 750,
        settings: {
          slidesToShow:1,
        }
      },
    ]
  });
    $('.blog_slider').slick({
    arrows:true,
    dots:false,  
    slidesToShow:3,
    infinite: false,
    responsive:[
      {
        breakpoint: 900,
        settings: {
          slidesToShow:2,
        },
      },{
        breakpoint: 750,
        settings: {
          slidesToShow:1,
        },
      }
    ]
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
    responsive:[
      {
        breakpoint: 900,
        settings: {
          slidesToShow:3,
        },
      },{
        breakpoint: 750,
        settings: {
          slidesToShow:2,
        },
      },{
        breakpoint: 470,
        settings: {
          slidesToShow:1,
        },
      }
    ]
  });
    $('.section1_page4__slider').slick({
      arrows:false,
      dots:false,  
      slidesToShow:1,
      infinite: false,
      slidesToScroll: 1,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      asNavFor: '.section1_page4__min__slider'
    });
    $('.section1_page4__min__slider').slick({
      arrows:true,
      dots:false,  
      slidesToShow:5,
      infinite: false,
      slidesToScroll: 1,
      speed: 500,
      cssEase: 'linear',
      asNavFor: '.section1_page4__slider',
      focusOnSelect: true,
    });
    $('.alicente_team__slider').slick({
      arrows:true,
      dots:false,  
      slidesToShow:1,
      infinite: false,
      slidesToScroll: 1,
    });
});


  $('.zoom-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
        verticalFit: true,
        titleSrc: function(item) {
            return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
        }
    },
    gallery: {
        enabled: true
    },
    zoom: {
        enabled: true,
        duration: 300, // don't foget to change the duration also in CSS
        opener: function(element) {
            return element.find('img');
        }
    }
    
});




// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

$(document).ready(function() {
  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });
});