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
            breakpoint: 480,
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
    

});



