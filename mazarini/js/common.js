$(document).ready(function () {
  var stepsSlider = document.getElementById('range-slider');
  var input0 = document.getElementById('input-with-keypress-0');
  var input1 = document.getElementById('input-with-keypress-1');
  var inputs = [input0, input1];

  noUiSlider.create(stepsSlider, {
    start: [14000,14000000],
    connect: true,
    tooltips: [true, true],
    range: {
        'min': 14000,
        'max': 1400000
    }
  });

  stepsSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = values[handle];
  });
});

$(document).ready(function () {
  var stepsSlider = document.getElementById('range-slider2');
  var input0 = document.getElementById('input-with-keypress-2');
  var input1 = document.getElementById('input-with-keypress-3');
  var inputs = [input0, input1];

  noUiSlider.create(stepsSlider, {
    start: [0,50],
    connect: true,
    tooltips: [true, true],
    range: {
        'min': 0,
        'max': 50
    }
  });

  stepsSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = values[handle];
  });
});

 const anchors = document.querySelectorAll('a[href*="#"]')

    for (let anchor of anchors) {
        anchor.addEventListener("click", function(event){
            event.preventDefault();
            const blockID = anchor.getAttribute('href')
            document.querySelector('' + blockID).scrollIntoView({
                behavior:"smooth",
                block:"start"
            })
          })
        }

        $(function(){
          $('.home-slider1').each(function(){
            $(this).owlCarousel({
              items: 3,
              margin: 0,
              loop: true,
              dots: false,
              nav: true,
              responsive:{
                  0:{
                      items:1
                  },
                  550:{
                      items:2
                  },
                  901:{
                      items:3
                  },
              }
            });
          });
        });

        $(function(){
          $('.home-slider').each(function(){
            $(this).owlCarousel({
              items: 4,
              margin: 0,
              loop: true,
              dots: false,
              nav: true,
              responsive:{
                  0:{
                      items:1
                  },
                  470:{
                      items:2
                  },
                  600:{
                      items:3
                  },
                  1030:{
                      items:3
                  },
                  1031:{
                      items:4
                  }
              }
            });
          });
        });

$(document).ready(function() {
  $('.burger_menu').click(function(){
        $('.burger_content').toggleClass('open');
        $('body').toggleClass('fixed-page');
  });
});
