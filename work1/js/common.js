$(document).ready(function () {
  var stepsSlider = document.getElementById('range-slider');
  var input0 = document.getElementById('input-with-keypress-0');
  var input1 = document.getElementById('input-with-keypress-1');
  var inputs = [input0, input1];

  noUiSlider.create(stepsSlider, {
    start: [0, 300],
    connect: true,
    tooltips: [true, true],
    range: {
        'min': 0,
        'max': 300
    }
  });

  stepsSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = values[handle];
  });
});




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
        slidesToShow:6,
        asNavFor:".slider",
        slidesToScroll:1,
        autoplaySpeed: 2000,
        focusOnSelect: true,
        centerMode: true,
        responsive:[
      {
        breakpoint: 1340,
        settings: {
          slidesToShow:5,
        }
      },{
        breakpoint: 1080,
        settings: {
          slidesToShow:4,
        }
      },{
        breakpoint: 950,
        settings: {
          slidesToShow:3,
        }
      },{
        breakpoint: 570,
        settings: {
          slidesToShow:2,
        }
      },
    ]
      });  
      $('.slider_contact').slick({
        arrows:true,
        dots:false,  
        slidesToShow:4,
        infinite: false,
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
        slidesToShow:1,
        responsive:[
      {
        breakpoint: 570,
        settings: {
          slidesToShow:1,
        }
      },
      ]
      }); 
      $('.slider1_landing3').slick({
        arrows:true,
        dots:false,  
        slidesToShow:3,
        responsive:[
      {
        breakpoint: 830,
        settings: {
          slidesToShow:2,
        }
      },{
        breakpoint: 570,
        settings: {
          slidesToShow:1,
        }
      },
      ]
      }); 
    });
  });

$(document).on('click','.box3', function(){
    $(this).toggleClass('active')
});
$(document).on('click','.box4', function(){
    $(this).toggleClass('active')
});

$(document).on('click','.icon_landing3__one', function(){
    $(this).toggleClass('active')
});
$(document).on('click','.icon_landing3__two', function(){
    $(this).toggleClass('active')
});
$(document).on('click','.icon_landing3__fri', function(){
    $(this).toggleClass('active')
});

$(document).on('click','.icon_landing3__for', function(){
    $(this).toggleClass('active')
});
$(document).on('click','.icon_landing3__five', function(){
    $(this).toggleClass('active')
});
$(document).on('click','.icon_landing3__six', function(){
    $(this).toggleClass('active')
});
$(document).on('click','.icon_landing3__seven', function(){
    $(this).toggleClass('active')
});

$(document).on('click','.box', function(){
    $(this).addClass('active').siblings().removeClass('active')
});
$(document).on('click','.box_filtr', function(){
    $(this).toggleClass('active')
});

$(document).on('click','.icon_landing3 a', function(){
    $(this).addClass('active').siblings().removeClass('active')
});

$('.mobile__button').click(function(event) {
    $('.mobile_text,.mobile__button img,.showe_text').toggleClass('active');
    $('body').toggleClass('lock');
  });
$('.box19').click(function(event) {
    $('.box16').toggleClass('active');
    $('body').toggleClass('lock');
  });
$('.box20').click(function(event) {
    $('.box17').toggleClass('active');
    $('body').toggleClass('lock');
  });
$('.box21').click(function(event) {
    $('.box18').toggleClass('active');
    $('body').toggleClass('lock');
  });

$('.button__mobile__showe__two').click(function(event) {
    $('.checkbox_content,.select_content,.search_block,.search_content').toggleClass('active');
    $('body').toggleClass('lock');
  });



$ (function() {
   $('#btn__one') .ready (function() {
        $('.form2_button') .hide();
        $('.registration_text') .hide();
        $('.bottom_text2') .hide();
        $('.modal_subscription') .hide();
        $('.modal_contact') .hide();
        $('.modal_address') .hide();
        $('.modal_changes') .hide();
        $('.modal_user__argument') .hide();
        $('.menu_modal') .hide();
        $('.modal_language') .hide();
        $('.modal__redactor1') .hide();
        $('.modal__redactor2') .hide();
        $('.modal__redactor3') .hide();
        $('.modal_comment1') .hide();
        $('.modal_comment2') .hide();
        $('.modal_comment3') .hide();
        $('.modal_spain') .hide();
    })
    $('#box2') .click(function() {
        $('.form2_button') .show();
        $('.form1_button') .hide();
        $('.form_profile__text a') .hide();
        $('.registration_text') .show();
        $('.login_text') .hide();
        $('.bottom_text2') .show();
        $('.bottom_text1') .hide();
    })
     $('#box1') .click(function() {
        $('.form2_button') .hide();
        $('.form1_button') .show();
        $('.form_profile__text a') .show();
        $('.registration_text') .hide();
        $('.login_text') .show();
        $('.bottom_text1') .show();
        $('.bottom_text2') .hide();
    })
     $('.landing3_header__content__item a') .click(function() {
        $('.modal_subscription') .show();
    })
      $('.modal_subscription__title button') .click(function() {
        $('.modal_subscription') .hide();
    })
      $('.button__add ') .click(function() {
        $('.modal_contact') .show();
    })
    $('.button__add2 ') .click(function() {
        $('.modal_address') .show();
    })
    $('.modal_contact__content__title button') .click(function() {
        $('.modal_contact') .hide();
    })
    $('.modal_contact__content__title b') .click(function() {
        $('.modal_address') .hide();
    })
    $('.download_btn ') .click(function() {
        $('.modal_changes') .show();
    })
     $('.select_profile ') .click(function() {
        $('.menu_modal') .show();
        $('.menu_modal__content') .show();
    })
     $('.select') .click(function() {
        $('.modal_language') .show();
        $('.modal_language__content') .show();
    })
     $('.box19') .click(function() {
        $('.modal__redactor1') .show();
        $('.modal__redactor1__content') .show();
    })
     $('.box19_hide') .click(function() {
        $('.modal__redactor1') .hide();
        $('.modal__redactor1__content') .hide();
    })
     $('.box20') .click(function() {
        $('.modal__redactor2') .show();
        $('.modal__redactor2__content') .show();
    })
     $('.box20_hide') .click(function() {
        $('.modal__redactor2') .hide();
        $('.modal__redactor2__content') .hide();
    })
     $('.box21') .click(function() {
        $('.modal__redactor3') .show();
        $('.modal__redactor3__content') .show();
    })
     $('.box21_hide') .click(function() {
        $('.modal__redactor3') .hide();
        $('.modal__redactor3__content') .hide();
    })
     $('.box15') .click(function() {
        $('.modal_comment1') .show();
        $('.modal_comment1__content') .show();
    })
     $('.box15_hide') .click(function() {
        $('.modal_comment1') .hide();
        $('.modal_comment1__content') .hide();
    })
     $('.box_two') .click(function() {
        $('.modal_comment2') .show();
        $('.modal_comment2__content') .show();
    })
     $('.box_two_hide') .click(function() {
        $('.modal_comment2') .hide();
        $('.modal_comment2__content') .hide();
    })
     $('.box_fri') .click(function() {
        $('.modal_comment3') .show();
        $('.modal_comment3__content') .show();
    })
     $('.box_fri_hide') .click(function() {
        $('.modal_comment3') .hide();
        $('.modal_comment3__content') .hide();
    })
     $('.landing5_section__select__language__item') .click(function() {
        $('.modal_spain') .show();
        $('.modal_spain__content') .show();
    })
    $('.hide_changes') .click(function() {
        $('.modal_changes') .hide();
    })
     $('.bottom_text2 b ') .click(function() {
        $('.modal_user__argument') .show();
    })
     $('.modal_user__title button') .click(function() {
        $('.modal_user__argument') .hide();
    })

});
$(".modal_subscription, .modal_spain, .modal_spain__content, .modal_user__argument, .modal_changes, .modal_address, .modal_contact, .menu_modal, .modal_comment3, .modal_comment3__content, .modal_comment2, .modal_comment2__content, .menu_modal__content, .modal_comment1, .modal_comment1__content, .modal_language, .modal_language__content, .modal__redactor1, .modal__redactor1__content, .modal__redactor2, .modal__redactor2__content, .modal__redactor3, .modal__redactor3__content")
.on('click', function (e) { if (e.target == this) 
  $(".modal_subscription, .modal_spain, .modal_spain__content, .modal_user__argument, .modal_changes, .modal_address, .modal_contact, .menu_modal, .modal_comment3, .modal_comment3__content, .menu_modal__content, .modal_comment2, .modal_comment2__content, .modal_comment1, .modal_comment1__content, .modal_language, .modal_language__content, .modal__redactor1, .modal__redactor1__content, .modal__redactor2, .modal__redactor2__content, .modal__redactor3, .modal__redactor3__content")
  .fadeOut('fast'); })


// Close the dropdown menu if the user clicks outside of it
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

