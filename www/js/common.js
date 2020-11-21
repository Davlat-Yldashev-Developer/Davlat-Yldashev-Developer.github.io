$(function () {

  var slidPrice = $(".js-range-slider");
  var max = document.getElementById('inp-2').value;
  slidPrice.ionRangeSlider({
    type: "double",
    min: 0,
    max: max,
    hide_min_max: true,
    hide_from_to: true
   });

  slidPrice.on("change", function() {
    var inp = $(this);
    var from = inp.data("from");   // input data-from attribute
    var to = inp.data("to");       // input data-to attribute
    document.getElementById('inp-1').value = from;
    document.getElementById('inp-2').value = to;
  });

});

$('.owl-item').owlCarousel({
  loop:true,
  margin:0,
  nav: true,
  dots: false,
  navText:['<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 29L10 16L23 3" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>','<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3L23 16L10 29" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>'],
  responsive:{
    0:{
        items:1
    }
  }
});

$('.modul-owl-contact').owlCarousel({
  margin:10,
  nav:true,
  dots:false,
  navText:[
  '<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.66699 12.3333L1.33366 6.99996L6.66699 1.66663" stroke="#70747B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  '<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.33301 12.3333L6.66634 6.99996L1.33301 1.66663" stroke="#70747B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'],
  responsive:{
    0:{
        items:1
    },
    470:{
      items:2
    },
    768:{
        items:3
    },
  }
});

$('.modul-owl-contact-object').owlCarousel({
  margin:10,
  nav:true,
  dots:false,
  navText:[
  '<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.66699 12.3333L1.33366 6.99996L6.66699 1.66663" stroke="#70747B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  '<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.33301 12.3333L6.66634 6.99996L1.33301 1.66663" stroke="#70747B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'],
  responsive:{
    0:{
      items:1
    },
    470:{
      items:2
    },
    768:{
      items:3
    },
    1230:{
      items:4
    },
  }
});

$('.owl-map').owlCarousel({
    loop:true,
    margin:0,
    nav: true,
    dots: false,
    navText:['<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 29L10 16L23 3" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>','<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3L23 16L10 29" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>'],
    responsive:{
      0:{
          items:1
      }
    }
  });

$('.owl-object').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  dots:false,
  navText:[
  '<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.66699 12.3333L1.33366 6.99996L6.66699 1.66663" stroke="#70747B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  '<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.33301 12.3333L6.66634 6.99996L1.33301 1.66663" stroke="#70747B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'],
  responsive:{
    0:{
        items:1
    }
  }
});

$('.owl-object-nav').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  dots:false,
  navText:[
  '<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.66699 12.3333L1.33366 6.99996L6.66699 1.66663" stroke="#70747B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  '<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.33301 12.3333L6.66634 6.99996L1.33301 1.66663" stroke="#70747B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'],
  responsive:{
    0:{
        items:2
    },
    768:{
        items:4
    },
  }
});

const mouseOn = () => {

  if(event.srcElement.attributes.id != undefined){
    var id = event.srcElement.attributes.id.value;
    var textHidden = id + '-text';

    $('#' + textHidden).hide();

    $('#info-tooltip').text(id.replace('_',' '));
    $('#info-tooltip').css({'left' : event.pageX - 30, 'top' : event.pageY + 30, 'display' : 'inline-block'});

    if(event.srcElement.attributes.fill.value == '#D1DBDD')
      event.srcElement.attributes.fill.value = '#7E7E3F';

  }
};

const mouseOut = () => {

  if(event.srcElement.attributes.id != undefined){
    var id = event.srcElement.attributes.id.value;
    var textHidden = id + '-text';
    $('#' + textHidden).show();
    $('#info-tooltip').css('display', 'none');
    if(event.srcElement.attributes.fill.value == '#7E7E3F')
      event.srcElement.attributes.fill.value = '#D1DBDD';
  }
};

const loadImg = (files) => {

  for (var i = 0; i < files.length; i++){

    $('.add-object-photo-add .row').append(function (indxe,html) {

      var numb = $('.add-object-photo-add .row .col-auto').length + 1;

      var a = '<div class="col-auto" id="img-' + numb + '"><div class="item"><svg class="mt-4" width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.5 4H21.3125C21.125 4 20.8925 3.87875 20.7113 3.6875L19.0063 1.0125C18.3125 -2.38419e-07 18 0 16.875 0H11.125C10 0 9.625 0 8.99562 1.01312L7.28875 3.6875C7.15 3.83875 6.955 4 6.75 4H3.25H1.5C1.10218 4 0.720644 4.15804 0.43934 4.43934C0.158035 4.72064 0 5.10218 0 5.5V20.5C0 20.8978 0.158035 21.2794 0.43934 21.5607C0.720644 21.842 1.10218 22 1.5 22H26.5C26.8978 22 27.2794 21.842 27.5607 21.5607C27.842 21.2794 28 20.8978 28 20.5V5.5C28 5.10218 27.842 4.72064 27.5607 4.43934C27.2794 4.15804 26.8978 4 26.5 4ZM14.2819 17.9937C13.0725 18.0506 11.8743 17.7402 10.8446 17.1034C9.81489 16.4666 9.00192 15.5333 8.51249 14.4259C8.02306 13.3186 7.88007 12.0891 8.10232 10.8989C8.32456 9.70884 8.90164 8.6138 9.75772 7.75772C10.6138 6.90164 11.7088 6.32456 12.8989 6.10232C14.0891 5.88007 15.3186 6.02306 16.4259 6.51249C17.5333 7.00192 18.4666 7.81489 19.1034 8.84458C19.7402 9.87428 20.0506 11.0725 19.9937 12.2819C19.9221 13.7736 19.2973 15.1852 18.2413 16.2413C17.1852 17.2973 15.7736 17.9221 14.2819 17.9937Z" fill="#C7CBCF"/></svg><div class="item-text">Main</div><img src="'
      var c = '" alt=""> <a onclick="delImg('+ numb +')">X</a> </div></div>';

      return a + window.URL.createObjectURL(files[i]) + c;
    });
  };

};

const delImg = (numb) => {
   $('#img-' + numb).remove();
};

const uploadPhoto = (img) => {
  $('#section-edit-company .edit-profil-img img').attr('src', window.URL.createObjectURL(img[0]));
};

const uploadPhotoModal = (img) => {
  $('.modal-addContactAddress .edit-profil-img img').attr('src', window.URL.createObjectURL(img[0]));
};


