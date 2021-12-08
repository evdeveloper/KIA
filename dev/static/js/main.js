$(document).ready(function () {

function optionTable() {
  $(document).on('click', '.engine__open', function(){
    $(this).toggleClass('active');
    $(this).closest('.engine__top').next('.engine__body').slideToggle();
  });
}

optionTable();

function counterModel() {
  $(document).on('click', '.engine__check input', function(e){
    let count = 0;
    let popupCounter = $('.modelCounter');
    if($(this).is(':checked')) {
      $(popupCounter).addClass('active').find('span').text(parseInt(count + 1));
      setTimeout(()=> {
        $(popupCounter).removeClass('active');
      },3000);
    }else {
      // $(popupCounter).find('span').text(parseInt(count - 1));
    }
  });
}

counterModel();

function saleCounter() {
  $(document).on('click','.programs__item', function(e){
    let sum = $('.programs__sum span');
    let sumValue = +sum.text();
    let sale = $(this).find('input');

    if (sale.is(':checked')) {
      setTimeout(()=> {
        sum.text(sumValue + parseInt(sale.val()));
      },100)
      
    }else {
      setTimeout(()=> {
        sum.text(sumValue - parseInt(sale.val()));
      },100)
    }

  });
}

function prettify(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

saleCounter();


function options() {
  $(document).on('click', '.feature__table tr', function() {
    let parent = $(this).attr('class');
    $(this).siblings('[data-tr="'+parent+'"]').toggle();
    return false;
  });
}

options();

function fixedMenu() {
  let nav = $('.header__body');
  let height = $(nav).offset().top;
  $(window).scroll(function(){
    if ($(window).scrollTop() > height){
      $(nav).addClass('fixed');
    } else {
      $(nav).removeClass('fixed');
    }
  });
}

  fixedMenu();

function colorAuto() {
  $(document).on('click', '.colorAuto li', function() {
    $(this).addClass('active').siblings().removeClass('active');
    $('.offers__img img').attr('src', `static/images/img/car/${$(this).index() + 1}.png`);
    return false;
  });
}

colorAuto();

$('[data-scroll]').on('click', function(e){
  e.preventDefault();
  let elemId = $(this).data('scroll');
  let elemOffset = $(elemId).offset().top;
  $('html, body').animate({
      scrollTop: elemOffset
  },1000);
  return false;

});

function sandwich() {
  let body = $('body');
  $(document).on('click', '.sandwich', function(e) {
    $(this).toggleClass('active');
    if (!$(this).hasClass('active')) {
      $('.mobile-menu').removeClass('active');
      $(body).css({'overflow': 'auto'});
    }else {
      $('.mobile-menu').addClass('active');
      $(body).css({'overflow': 'hidden'});
    }
    return false;
  });
};

sandwich();

function menuCloseTarget() {
  let body = $('body');
  $(document).mouseup(function(e){
    let burgerMenu = $('.sandwich');
    let mobileMenu = $('.mobile-menu');
    if (!burgerMenu.is(e.target) && mobileMenu.has(e.target).length === 0) {
      $(burgerMenu).removeClass('active');
      $(mobileMenu).removeClass('active');
      $(body).css({'overflow': 'auto'});
    }
    return false;
  });
}

menuCloseTarget();


$('input[type="tel"]').inputmask("+7 (999) 999-99-99");


$('form').on('click','button[type="submit"]',function() {
    let $forms = $(this).closest('form');
    $.validator.addMethod('phonemask', function (value, element) {
        return value.replace(/\D+/g, '').length > 10;
    });
    $forms.validate({
        errorClass: 'form-error',
        errorPlacement: function(error,element) {
          return true;
        },
        rules: {
            name: {
              minlength: 3
            },
            phone: {
              phonemask: true,
              minlength: 10
            }
        }
    });
});



function numberPrice() {
  $('.programs__item').on('click',function() {

  });
}

numberPrice();

function init() {
	let myMap = new ymaps.Map("map", {
		center: [59.824982,30.354379],
		zoom: 10,
      controls: []
	}, {
		searchControlProvider: 'yandex#search'
	});
 
	let myPlacemark = new ymaps.Placemark([59.824982,30.354379], {
      iconCaption: 'Автоцентр "Пулково"'
    }, {
      preset: 'islands#redIcon'
    });
    myMap.geoObjects.add(myPlacemark);
}

ymaps.ready(init);
   
});