$(document).ready(function () {


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
  });
}

menuCloseTarget();


const maskInput = $('input[type=tel]');

if ($(maskInput)) {
  $(maskInput).keyup(function(e) {
    if (e.keyCode === 17 || e.keyCode === 65 || e.keyCode === 97) { return false; }
    if ($(this).val() == "") {
      let inputMask = new Inputmask("+999999999999999",{ "placeholder": "" });
      inputMask.mask($(this));
    }
    if (($(this).val().substring(0, 2) == "+7") || ($(this).val().substring(0, 1) == "7") || ($(this).val().substring(0, 2) == "+8") || ($(this).val().substring(0, 1) == "8")) {
      let inputMask = new Inputmask('+9 (999) 999-99-99',{ "placeholder": "_" });
      inputMask.mask($(this));
    } else {
      let inputMask = new Inputmask("+999999999999999",{ "placeholder": "" });
      inputMask.mask($(this));
    }
    if (($(this).val().substring(0, 1) == "+") && ($(this).val().substring(0, 2) != "+7")) {
      let inputMask = new Inputmask("999999999999999",{ "placeholder": "" });
      inputMask.mask($(this));
    }
    if (($(this).val().substring(0, 1) == "8")) {
      let inputMask = new Inputmask("9 (999) 999-99-99",{ "placeholder": "_" });
      inputMask.mask($(this));
    }
    if (($(this).val().substring(0, 1) == "9")) {
      let inputMask = new Inputmask("+7 (999) 999-99-99",{ "placeholder": "_" });
      inputMask.mask($(this));
    }
  });
}

function numberPrice() {
  $('.programs__item').on('click',function() {

  });
}

numberPrice();

ymaps.ready(init);		
function init() {
	var myMap = new ymaps.Map("map", {
		center: [59.824982,30.354379],
		zoom: 10,
      controls: []
	}, {
		searchControlProvider: 'yandex#search'
	});
 
	var myPlacemark = new ymaps.Placemark([59.824982,30.354379], {
      iconCaption: 'Автоцентр "Пулково"'
    }, {
      preset: 'islands#redIcon'
    });
    myMap.geoObjects.add(myPlacemark);
}
   
});