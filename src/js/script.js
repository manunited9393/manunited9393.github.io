window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})

$(document).ready(function(){
    

    $('.top__item').each(function(i){
        $(this).on('click', function() {
            $('.top__text').eq(i).toggleClass('top__text_active');
        })
    });

    $('.carousel__inner').slick({
      speed: 2000,
      adaptiveHeight: true,
      // autoplay: true,
      autoplaySpeed: 1000,
      arrows: true,
      centerMode: false,
      prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
      responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 580,
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
    });

    $('ul.desicions__tabs').on('click', 'li:not(.desicions__tab_active)', function() {
      $(this)
        .addClass('desicions__tab_active').siblings().removeClass('desicions__tab_active')
        .closest('div.desicions__wrapper').find('div.desicions__content').removeClass('desicions__content_active').eq($(this).index()).addClass('desicions__content_active');
    });

    new WOW().init();


    $('[data-modal=contact]').on('click', function() {
      $('.overlay, #connection').fadeIn('slow');
    });

    $('.modal__close').on('click', function() {
      $('.overlay, #connection, #thanks').fadeOut('slow');
    })



    
    function validateForm(form){
      $(form).validate({
        rules: {
          // simple rule, converted to {required:true}
          name: "required",
          phone: "required",
          // compound rule
          email: {
            required: true,
            email: true
          }
        },
        messages: {
          name: "Введите пожалуйста ваше имя",
          email: {
            required: "We need your email address to contact you",
            email: "Your email address must be in the format of name@domain.com"
          }
        }
      });
    };
    
    validateForm('#connection form');
    validateForm('#form-section');

    $('input[name=phone]').mask('+7 (999) 999-99-99');


    $('form').submit(function(e) {
      e.preventDefault();
      $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
      }).done(function() {
        $(this).find("input").val("");
        $('.modal').fadeOut();
        $('.modal_mini, .ovelay').fadeIn('slow');
        
        $('form').trigger('reset');
      });
      return false;
    });

});



