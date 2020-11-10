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

$('.select').click(function(event) {
    $('.language_active').toggleClass('active');
    $('body').toggleClass('lock');
  });
$(document).on('click','.box3', function(){
    $(this).toggleClass('active')
});
$(document).on('click','.box4', function(){
    $(this).toggleClass('active')
});
$(document).on('click','.box', function(){
    $(this).addClass('active').siblings().removeClass('active')
});

$('.mobile__button').click(function(event) {
    $('.mobile_text,.mobile__button img').toggleClass('active');
    $('body').toggleClass('lock');
  });

$ (function() {
   $('#btn__one') .ready (function() {
        $('.form2_button') .hide();
        $('.registration_text') .hide();
        $('.bottom_text2') .hide();
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
   
});

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

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