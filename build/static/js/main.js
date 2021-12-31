$(document).ready(function() {


$('.brands__item:hidden').attr('data-hide', true);

$(document).on('click','.brands__show', function(){
  $(this).toggleClass('active');
  let dataItem = $(this).siblings('.brands__item[data-hide="true"]');
  if (!$(this).hasClass('active')) {
    dataItem.css({'display':'none'});
  }else {
    dataItem.css({'display':'flex'});
  }
  return false;
});


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
      
    } else {
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
          'price-from': {
            minlength: 3
          },
          'price-to': {
            minlength: 3
          },
          phone: {
            phonemask: true,
            minlength: 10
          }
      }
  });
});

$(document).on('click','.sort__btn', function(){
  $(this).addClass('active').siblings().removeClass('active');
  if ($(this).attr('data-sort') === 'old') {
    $('input[name="typecar"]').val('Заявка на автомобиль с пробегом');
  } else {
    $('input[name="typecar"]').val('Заявка на новый автомобиль');
  }
  return false;
});

$('.choicesCar').each(function(i, item) {
  let carValue = $(item).attr('data-choices');
  let choicesObj =  new Choices(item, {
    itemSelectText:'',
    // shouldSort: false,
    noResultsText: 'Нет вариантов'
  });

  if (carValue === 'brand') {
    choicesObj.setChoices(
      [
        { value: 'Honda', label: 'Honda' },
        { value: 'Audi', label: 'Audi' },
        { value: 'BMW', label: 'BMW' },
        { value: 'Ford', label: 'Ford' },
        { value: 'Mazda', label: 'Mazda' },
        { value: 'Toyota', label: 'Toyota' },
        { value: 'Lada', label: 'Lada' },
        { value: 'Nissan', label: 'Nissan' }
      ], 'value', 'label', false,
    );
  } else if (carValue === 'model') {
    choicesObj.setChoices(
      [
        {
          label: 'Audi',
          id: 1,
          disabled: false,
          choices: [
            { value: 'A1', label: 'A1' },
            { value: 'A3', label: 'A3' },
            { value: 'A4', label: 'A4' },
            { value: 'A5', label: 'A5' },
            { value: 'Q3', label: 'Q3' },
            { value: 'S3', label: 'S3' },
          ],
        },
        {
          label: 'BMW',
          id: 2,
          disabled: false,
          choices: [
            { value: 'M5', label: 'M5' },
            { value: 'X5', label: 'X5' },
            { value: 'X6', label: 'X6' }
          ],
        },
        {
          label: 'Ford',
          id: 3,
          disabled: false,
          choices: [
            { value: 'Focus', label: 'Focus' },
            { value: 'Mustang', label: 'Mustang' },
            { value: 'Mondeo', label: 'Mondeo' },
            { value: 'Kuga', label: 'Kuga' },
            { value: 'Fusion', label: 'Fusion' }
          ],
        },
        {
          label: 'Honda',
          id: 4,
          disabled: false,
          choices: [
            { value: 'Accord', label: 'Accord' },
            { value: 'Civic', label: 'Civic' },
            { value: 'Pilot', label: 'Pilot' }
          ],
        },
        {
          label: 'Lada',
          id: 5,
          disabled: false,
          choices: [
            { value: 'Granta', label: 'Granta' },
            { value: 'Largus', label: 'Largus' },
            { value: 'Vesta', label: 'Vesta' }
          ],
        },
        {
          label: 'Mazda',
          id: 6,
          disabled: false,
          choices: [
            { value: 'CX-5', label: 'CX-5' },
            { value: 'RX-7', label: 'RX-7' },
            { value: 'Demio', label: 'Demio' }
          ],
        },
        {
          label: 'Nissan',
          id: 7,
          disabled: false,
          choices: [
            { value: 'Qashqai', label: 'Qashqai' },
            { value: 'Skyline', label: 'Skyline' },
            { value: 'Almera', label: 'Almera' },
            { value: 'X-Trail', label: 'X-Trail' },
            { value: 'Terrano', label: 'Terrano' }
          ],
        },
        {
          label: 'Toyota',
          id: 8,
          disabled: false,
          choices: [
            { value: 'Camry', label: 'Camry' },
            { value: 'Land Cruiser', label: 'Land Cruiser' },
            { value: 'RAV4', label: 'RAV4' },
            { value: 'Corolla', label: 'Corolla' },
            { value: 'Supra', label: 'Supra' }
          ],
        }
        
      ], 'value', 'label', false,
    );
  }
  
});

$('.gallery-all').on('click', function(){
  $(this).hide().siblings().fadeIn();
});

function itemAllShow(items) {
  $(document).on('click','.btnShow', function(){
    $(this).hide().closest('body').find(items).fadeIn();
  });
}

itemAllShow($('.new-cars__col'));
itemAllShow($('.trusted__item'));


function filterTabs() {
  $(document).on('click','.filters__tab', function(){
    $(this).addClass('active').siblings().removeClass('active');
    $(this).closest('.filters').find('.filters__list').eq($(this).index()).addClass('active').siblings().removeClass('active');
    return false;
  });
}

filterTabs();

  
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

const swiper = document.querySelector('.swiper');
if (swiper) {
  new Swiper(swiper, {
    speed: 400,
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
  });
}

