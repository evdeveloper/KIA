$(document).ready(function () {


function compare() {
  $(document).on('click','.js-option', function(){
    $(this).closest('.options').hide().next().show();
    return false;
  });
  $(document).on('click','.js-compare', function(){
    $(this).closest('.compare').hide().prev().show();
    return false;
  });
}

compare();

function optionTable() {
  $(document).on('click', '.engine__open', function(){
    $(this).toggleClass('active');
    $(this).closest('.engine__top').next('.engine__body').slideToggle();
  });
}
  
optionTable();
  
  
  
function counterModel() {
  let timeoutId;
  $(document).on('click', '.engine__check input', function(e){
    let model = $(this).parent().next().find('span').text();
    console.log();
    let count = $('.engine__check input:checked').length;
    if (count > 3) return false;
    let popupCounter = $('.modelCounter');
    popupCounter.addClass('active').find('span').text(count);
    clearTimeout(timeoutId);
    timeoutId = setTimeout(()=> { $(popupCounter).removeClass('active') }, 3000);
    
  });
}
  
  counterModel();
  
  function saleCounter() {
    $(document).on('click','.programs__item', function(e){
      let sum = $('.programs__sum span');
      let sumValue = +sum.text().split(' ').join('');
      let sale = $(this).find('input');
  
      if (sale.is(':checked')) {
        setTimeout(()=> {
          sum.text(prettify(sumValue + parseInt(sale.val())));
        },0)
        
      }else {
        setTimeout(()=> {
          sum.text(prettify(sumValue - parseInt(sale.val())));
        },0)
      }
  
    });
  }
  
  function prettify(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
  
  saleCounter();
  
  
  function options() {
    $(document).on('click', '.feature__table tr', function() {
      let cParent = $(this).attr('class');
      let tab = $('[data-tr="tab"]');
      $(this).siblings('[data-tr="'+cParent+'"]').toggle(); 
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
        $(body).removeClass('hidden');
      }else {
        $('.mobile-menu').addClass('active');
        $(body).addClass('hidden');
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
        $(body).removeClass('hidden');
      }
      return false;
    });
  }
  
  menuCloseTarget();
  
  
  $('input[type="tel"]').inputmask("+7 (999) 999-99-99");
  
  
  $('form').on('click','button[type="submit"]',function() {
      let $forms = $(this).closest('form');
      $.validator.addMethod('phonemask', function (value) {
          return value.replace(/\D+/g, '').length > 10;
      });
      $forms.validate({
          errorClass: 'form-error',
          errorPlacement: function() {
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